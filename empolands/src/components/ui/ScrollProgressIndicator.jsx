import React, { useState, useEffect } from 'react';

const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(Math.min(scrollPercent, 100));
      setIsVisible(scrollTop > 200); // Show after scrolling past hero
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-navigation">
      <div 
        className="h-1 bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="absolute top-0 left-0 right-0 h-1 bg-border/20" />
    </div>
  );
};

export default ScrollProgressIndicator;