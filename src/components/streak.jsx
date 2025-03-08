import React, { useEffect, useState } from 'react';

const GaseousFlow = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const animate = () => {
      setOffset(prev => (prev + 1) % 1000);
    };
    
    const interval = setInterval(animate, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <svg className="absolute w-full h-full">
        <defs>
          <filter id="turbulence">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.005 0.008" 
              numOctaves="3" 
              seed={offset}
            />
            <feDisplacementMap in="SourceGraphic" scale="30" />
          </filter>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>

      <div className="absolute left-1/2 -translate-x-1/2 h-full max-w-xs">
        {/* Main gaseous flow */}
        <div 
          className="absolute h-full w-24 opacity-70"
          style={{
            background: `linear-gradient(
              to bottom,
              transparent,
              #4c1d95 ${offset % 100}%,
              #2563eb ${(offset + 30) % 100}%,
              #0d9488 ${(offset + 60) % 100}%,
              transparent
            )`,
            filter: 'url(#turbulence) url(#glow)',
            animation: 'sway 20s ease-in-out infinite'
          }}
        />
        
        {/* Secondary flow for more complexity */}
        <div 
          className="absolute h-full w-16 opacity-50"
          style={{
            background: `linear-gradient(
              to bottom,
              transparent,
              #7c3aed ${(offset + 50) % 100}%,
              #3b82f6 ${(offset + 80) % 100}%,
              #14b8a6 ${(offset + 110) % 100}%,
              transparent
            )`,
            filter: 'url(#turbulence) url(#glow)',
            animation: 'sway 25s ease-in-out infinite reverse'
          }}
        />
      </div>

      <style>{`
        @keyframes sway {
          0% { transform: translateX(-10%) scale(1); }
          50% { transform: translateX(10%) scale(1.1); }
          100% { transform: translateX(-10%) scale(1); }
        }
      `}</style>

      <div className="relative z-10">
        {/* Your page content goes here */}
      </div>
    </div>
  );
};

export default GaseousFlow;