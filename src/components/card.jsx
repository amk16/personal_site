import React from 'react';

const TechSkillsCarousel = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: "⚛️",
      description: "Modern ES6+, React, Node.js",
      color: '142, 249, 252',
    },
    {
      name: "Python",
      icon: "🐍",
      description: "Data Science, ML, Django, Flask",
      color: '142, 252, 204',
    },
    {
      name: "Blender",
      icon: "🎮",
      description: "3D modeling, animation, rendering",
      color: '142, 252, 157',
    },
    {
      name: "SQL",
      icon: "🗄️",
      description: "Database design, optimization",
      color: '215, 252, 142',
    },
    {
      name: "Cloud",
      icon: "☁️",
      description: "AWS, Runpod, GCP",
      color: '252, 252, 142',
    },
    {
      name: "DevOps",
      icon: "🐳",
      description: "CI/CD, Docker, Kubernetes",
      color: '252, 208, 142',
    },
    {
      name: "Data Scraping",
      icon: "🕸️",
      description: "Large Scale youtube, reddit, twitter, etc.",
      color: '252, 142, 142',
    },
    {
      name: "Distributed Systems",
      icon: "🔄",
      description: "Parallel Processing, Resource optimization.",
      color: '252, 142, 239',
    },
    {
      name: "UI/UX",
      icon: "🎨",
      description: "Responsive design, accessibility",
      color: '204, 142, 252',
    },
    {
      name: "Security",
      icon: "🔐",
      description: "Cryptography, best practices",
      color: '142, 202, 252',
    },
  ];

  return (
    <div className="w-full h-screen bg-transparent">
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute w-[120px] h-[150px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            transformStyle: 'preserve-3d',
            animation: 'rotating 40s linear infinite'
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="absolute w-[120px] h-[150px] rounded-xl overflow-hidden"
              style={{
                border: `2px solid rgba(${skill.color})`,
                transform: `rotateY(${(360 / skills.length) * skills.indexOf(skill)}deg) translateZ(250px)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <div 
                className="w-full h-full p-2 flex flex-col items-center justify-center text-center"
                style={{
                  background: `rgba(${skill.color}, 0.3)`,
                  backdropFilter: 'blur(8px)'
                }}
              >
                <div className="text-2xl mb-1">{skill.icon}</div>
                <h3 className="font-bold text-white text-sm mb-1">{skill.name}</h3>
                <p className="text-white text-xs opacity-90">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes rotating {
          0% {
            transform: perspective(1000px) rotateX(-10deg) rotateY(0deg);
          }
          100% {
            transform: perspective(1000px) rotateX(-10deg) rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default TechSkillsCarousel;