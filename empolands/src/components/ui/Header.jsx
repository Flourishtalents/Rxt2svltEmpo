import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navigationItems = [
    { id: 'solutions', label: 'Solutions', href: '#solutions' },
    { id: 'roi-calculator', label: 'ROI Calculator', href: '#roi-calculator' },
    { id: 'success-stories', label: 'Success Stories', href: '#success-stories' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);

      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleDemoBooking = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-navigation transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-sm shadow-md border-b border-border' 
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div 
                className="flex items-center cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-6 h-6 text-primary-foreground"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <span className="text-xl lg:text-2xl font-heading font-heading-bold text-primary">
                  EmpoLands
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-body-medium transition-colors duration-250 hover:text-primary ${
                    activeSection === item.id 
                      ? 'text-primary border-b-2 border-primary pb-1' :'text-text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDemoBooking}
                className="font-body-medium"
              >
                Schedule Demo
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={handleDemoBooking}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-cta"
              >
                Book Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-text-primary hover:text-primary transition-colors duration-250"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100' :'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-background border-t border-border px-6 py-4 space-y-4">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left py-2 text-base font-body-medium transition-colors duration-250 ${
                  activeSection === item.id 
                    ? 'text-primary font-body-semibold' :'text-text-primary hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="pt-4 border-t border-border space-y-3">
              <Button
                variant="outline"
                fullWidth
                onClick={handleDemoBooking}
                className="font-body-medium"
              >
                Schedule Demo
              </Button>
              <Button
                variant="default"
                fullWidth
                onClick={handleDemoBooking}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-cta"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Header;