import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Contact, About, Projects } from './pages';
import Navbar from './components/Navbar';
import GaseousFlow from './components/streak';
import NebulaBackground from './components/nebula';
import Loader from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Set a timeout to hide the loading screen after 10 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    // Update progress bar
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 1;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 100);

    // Clean up the timers if the component unmounts
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  // Complete loading screen with no Three.js components
  if (loading) {
    return (
      <main className='text-white bg-gradient-to-r from-black to-slate-900 h-screen flex flex-col items-center justify-center'>
        <Loader />
        <div className="w-64 bg-gray-800 rounded-full h-2.5 mt-8">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="mt-2 text-sm font-medium">{progress}%</div>
      </main>
    );
  }

  // Main application when loaded
  return (
    <main className='text-white bg-gradient-to-r from-black to-slate-900'>
      <Router>
        {//<Navbar />
        }
        
        {/* Add NebulaBackground inside Router for useLocation access */}
        <div className="fixed inset-0 z-0">
          <NebulaBackground />
        </div>
        
        <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
          <section className="h-screen snap-start relative z-10">
            <Home />
          </section>
          <section className="h-screen snap-start relative z-10">
            <About />
          </section>
          <section className="h-screen snap-start relative z-10">
            <Projects />
          </section>
          <section className="h-screen snap-start relative z-10">
            <Contact />
          </section>
        </div>
      </Router>
    </main>
  );
}

export default App