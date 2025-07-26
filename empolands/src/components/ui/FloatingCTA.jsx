import React, { useState, useEffect } from 'react';
import Button from './Button';
import Icon from '../AppIcon';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentCTA, setCurrentCTA] = useState('demo');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - windowHeight);

      // Show after scrolling past hero section
      const heroSection = document.querySelector('#hero');
      const heroHeight = heroSection ? heroSection.offsetHeight : 800;
      
      setIsVisible(scrollTop > heroHeight * 0.7);

      // Change CTA based on scroll position
      if (scrollPercent > 0.8) {
        setCurrentCTA('consultation');
      } else if (scrollPercent > 0.5) {
        setCurrentCTA('roi');
      } else {
        setCurrentCTA('demo');
      }
    };

    const handleContactWidget = () => {
      const contactWidget = document.querySelector('[data-contact-widget]');
      if (contactWidget && contactWidget.classList.contains('expanded')) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('contact-widget-toggle', handleContactWidget);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('contact-widget-toggle', handleContactWidget);
    };
  }, []);

  const handleCTAClick = () => {
    let targetSection;
    
    switch (currentCTA) {
      case 'roi':
        targetSection = document.getElementById('roi-calculator');
        break;
      case 'consultation':
        targetSection = document.getElementById('contact');
        break;
      default:
        targetSection = document.getElementById('solutions');
    }

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getCTAContent = () => {
    switch (currentCTA) {
      case 'roi':
        return {
          text: 'Calculate ROI',
          icon: 'Calculator',
          description: 'See your potential savings'
        };
      case 'consultation':
        return {
          text: 'Book Consultation',
          icon: 'Calendar',
          description: 'Limited slots available'
        };
      default:
        return {
          text: 'View Demo',
          icon: 'Play',
          description: 'See it in action'
        };
    }
  };

  const ctaContent = getCTAContent();

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-floating">
      {/* Mobile Version */}
      <div className="lg:hidden">
        <Button
          variant="default"
          size="lg"
          onClick={handleCTAClick}
          className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-cta hover:shadow-testimonial transition-all duration-250 font-cta"
          iconName={ctaContent.icon}
          iconPosition="left"
        >
          {ctaContent.text}
        </Button>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block">
        <div 
          className={`transition-all duration-300 ${
            isExpanded ? 'w-64' : 'w-auto'
          }`}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <div className="bg-accent text-accent-foreground rounded-lg shadow-cta hover:shadow-testimonial transition-all duration-250 overflow-hidden">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="lg"
                onClick={handleCTAClick}
                className="bg-transparent text-accent-foreground hover:bg-accent-foreground/10 font-cta flex-shrink-0"
                iconName={ctaContent.icon}
                iconPosition="left"
              >
                {ctaContent.text}
              </Button>
              
              {isExpanded && (
                <div className="px-4 py-3 border-l border-accent-foreground/20 animation-reveal">
                  <p className="text-sm font-accent-medium text-accent-foreground/90">
                    {ctaContent.description}
                  </p>
                  <div className="flex items-center mt-1 text-xs text-accent-foreground/70">
                    <Icon name="Clock" size={12} className="mr-1" />
                    <span>2 min setup</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;