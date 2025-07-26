import React, { useState, useEffect } from 'react';
import Button from './Button';
import Icon from '../AppIcon';

const QuickContactWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const contactMethods = [
    {
      id: 'phone',
      label: 'Call Now',
      icon: 'Phone',
      action: () => window.open('tel:+1-800-EMPOLANDS', '_self'),
      description: 'Speak with an expert'
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: 'MessageCircle',
      action: () => window.open('https://wa.me/18003676526', '_blank'),
      description: 'Quick chat support'
    },
    {
      id: 'calendar',
      label: 'Schedule Call',
      icon: 'Calendar',
      action: () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      },
      description: 'Book a consultation'
    },
    {
      id: 'email',
      label: 'Email Us',
      icon: 'Mail',
      action: () => window.open('mailto:hello@empolands.com', '_self'),
      description: 'Send us a message'
    }
  ];

  useEffect(() => {
    const handleFloatingCTA = () => {
      const floatingCTA = document.querySelector('[data-floating-cta]');
      if (isExpanded && floatingCTA) {
        // Hide floating CTA when contact widget is expanded
        document.dispatchEvent(new CustomEvent('contact-widget-toggle'));
      }
    };

    handleFloatingCTA();
  }, [isExpanded]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-6 left-6 z-contact"
      data-contact-widget
    >
      {/* Mobile Version */}
      <div className="lg:hidden">
        {isExpanded ? (
          <div className="bg-card border border-border rounded-lg shadow-testimonial p-4 w-64 animation-reveal">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-heading-bold text-card-foreground">
                Contact Us
              </h3>
              <button
                onClick={toggleExpanded}
                className="p-1 rounded-md text-text-secondary hover:text-primary transition-colors duration-250"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            
            <div className="space-y-3">
              {contactMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={method.action}
                  className="w-full flex items-center p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-250 text-left"
                >
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Icon 
                      name={method.icon} 
                      size={18} 
                      className="text-primary-foreground" 
                    />
                  </div>
                  <div>
                    <p className="font-body-medium text-card-foreground">
                      {method.label}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {method.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <Button
            variant="default"
            size="icon"
            onClick={toggleExpanded}
            className="w-14 h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-cta hover:shadow-testimonial transition-all duration-250 rounded-full"
          >
            <Icon name="MessageSquare" size={24} />
          </Button>
        )}
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block">
        <div 
          className={`transition-all duration-300 ${
            isExpanded ? 'w-80' : 'w-auto'
          }`}
        >
          {isExpanded ? (
            <div className="bg-card border border-border rounded-lg shadow-testimonial p-6 animation-reveal">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-heading font-heading-bold text-lg text-card-foreground">
                    Get In Touch
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">
                    Choose your preferred contact method
                  </p>
                </div>
                <button
                  onClick={toggleExpanded}
                  className="p-2 rounded-md text-text-secondary hover:text-primary transition-colors duration-250"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {contactMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={method.action}
                    className="flex flex-col items-center p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-250 text-center group"
                  >
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-250">
                      <Icon 
                        name={method.icon} 
                        size={20} 
                        className="text-primary-foreground" 
                      />
                    </div>
                    <p className="font-body-medium text-card-foreground text-sm">
                      {method.label}
                    </p>
                    <p className="text-xs text-text-secondary mt-1">
                      {method.description}
                    </p>
                  </button>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center text-sm text-text-secondary">
                  <Icon name="Clock" size={16} className="mr-2" />
                  <span>Available 24/7 for urgent inquiries</span>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={toggleExpanded}
              className="w-16 h-16 bg-primary text-primary-foreground hover:bg-primary/90 shadow-cta hover:shadow-testimonial transition-all duration-250 rounded-full flex items-center justify-center group"
            >
              <Icon 
                name="MessageSquare" 
                size={24} 
                className="group-hover:scale-110 transition-transform duration-250" 
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickContactWidget;