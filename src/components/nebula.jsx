import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const NebulaBackground = () => {
  const canvasRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const particlesRef = useRef([]);
  const location = useLocation();
  
  // Colors for each section
  const sectionColors = [
    { primary: '#1a237e', secondary: '#7e57c2' }, // Home - deep blue to purple
    { primary: '#004d40', secondary: '#00acc1' }, // About - teal to cyan
    { primary: '#bf360c', secondary: '#ff9800' }, // Projects - deep orange to amber
    { primary: '#4a148c', secondary: '#e91e63' }  // Contact - deep purple to pink
  ];

  useEffect(() => {
    // Use Intersection Observer instead of scroll events for snap scrolling
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Get the section index from the data attribute
          const sectionIndex = parseInt(entry.target.dataset.section);
          
          // Make sure index is valid before setting
          if (!isNaN(sectionIndex) && sectionIndex >= 0 && sectionIndex < sectionColors.length) {
            setCurrentSection(sectionIndex);
            console.log('Section changed to:', sectionIndex);
          }
        }
      });
    }, {
      root: null, // viewport
      threshold: 0.5 // trigger when 50% of the element is visible
    });
    
    // Find all sections and observe them
    const sections = document.querySelectorAll('section.snap-start');
    sections.forEach((section, index) => {
      // Add data attribute for section index
      section.dataset.section = index;
      sectionObserver.observe(section);
    });
    
    // Initial call to set correct section on mount
    if (sections.length > 0) {
      const visibleSectionIndex = Array.from(sections).findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });
      
      if (visibleSectionIndex !== -1) {
        setCurrentSection(visibleSectionIndex);
      }
    }
    
    // Clean up
    return () => {
      sections.forEach(section => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);

  // Helper function to convert hex to RGB
  function hexToRgb(hex) {
    // Make sure hex is a string
    if (typeof hex !== 'string') {
      return { r: 0, g: 0, b: 0 };
    }
    
    // Handle shorthand hex format (e.g. "#03F")
    let cleanHex = hex.trim();
    if (cleanHex.length === 4) {
      cleanHex = '#' + 
        cleanHex[1] + cleanHex[1] +
        cleanHex[2] + cleanHex[2] +
        cleanHex[3] + cleanHex[3];
    }
    
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(cleanHex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  }
  
  // Get random color based on current section
  function getRandomColor(sectionIndex) {
    // Safety check to ensure we have a valid section index
    const index = Math.min(Math.max(sectionIndex, 0), sectionColors.length - 1);
    const colors = sectionColors[index];
    
    if (!colors) {
      // Fallback color if something goes wrong
      return 'rgb(30, 30, 60)';
    }
    
    const ratio = Math.random();
    
    try {
      // Get RGB values of primary and secondary colors
      const primary = hexToRgb(colors.primary);
      const secondary = hexToRgb(colors.secondary);
      
      // Interpolate between colors
      const r = Math.floor(primary.r + ratio * (secondary.r - primary.r));
      const g = Math.floor(primary.g + ratio * (secondary.g - primary.g));
      const b = Math.floor(primary.b + ratio * (secondary.b - primary.b));
      
      return `rgb(${r}, ${g}, ${b})`;
    } catch (error) {
      // Fallback if color conversion fails
      return 'rgb(30, 30, 60)';
    }
  }

  // Effect to handle the animation with access to current section
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Only initialize particles if they don't exist yet
      if (particlesRef.current.length === 0) {
        initParticles();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Initialize particles only once
    function initParticles() {
      const numberOfParticles = Math.floor(canvas.width * canvas.height / 10000);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          color: getRandomColor(currentSection),
          vx: Math.random() * 0.2 - 0.1,
          vy: Math.random() * 0.2 - 0.1,
          opacity: Math.random() * 0.5 + 0.1,
          // Store original color properties to help with transitions
          lastColorChange: 0
        });
      }
    }
    
    // Animation loop
    const animate = () => {
      // Apply a semi-transparent black fill to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Get the current section to use for colors
      const sectionIndex = currentSection;
      
      // Draw and update particles
      particlesRef.current.forEach(particle => {
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Add some random movement
        particle.vx += (Math.random() - 0.5) * 0.01;
        particle.vy += (Math.random() - 0.5) * 0.01;
        
        // Limit velocity
        const maxVel = 0.3;
        particle.vx = Math.max(Math.min(particle.vx, maxVel), -maxVel);
        particle.vy = Math.max(Math.min(particle.vy, maxVel), -maxVel);
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Gradually change colors based on current section
        // Higher probability (0.03) to ensure colors actually change
        if (Math.random() < 0.03) {
          particle.color = getRandomColor(sectionIndex);
        }
      });
      
      // Reset global alpha
      ctx.globalAlpha = 1;
      
      animationFrameId = window.requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [currentSection]); // Include currentSection in dependencies to react to section changes

  // When location changes, scroll to top and reset section
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentSection(0);
    console.log('Location changed, reset to section 0');
  }, [location]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default NebulaBackground;