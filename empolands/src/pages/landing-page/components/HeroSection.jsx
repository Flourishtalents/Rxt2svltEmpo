import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    hotels: 0,
    revenue: 0,
    costs: 0
  });

  const metrics = [
    { label: "Hotels Transformed", value: 247, suffix: "+" },
    { label: "Average Revenue Increase", value: 35, suffix: "%" },
    { label: "Operational Cost Reduction", value: 28, suffix: "%" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setAnimatedNumbers({
          hotels: Math.floor(247 * progress),
          revenue: Math.floor(35 * progress),
          costs: Math.floor(28 * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateNumbers();
        observer.disconnect();
      }
    });

    const heroElement = document.getElementById('hero');
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => observer.disconnect();
  }, []);

  const handleDemoBooking = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLiveDemo = () => {
    const demoSection = document.getElementById('app-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent font-accent-medium text-sm">
                <Icon name="Zap" size={16} className="mr-2" />
                Proven Digital Transformation
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-heading font-heading-bold text-primary-foreground mb-6 leading-tight">
              Transform Your Hotel Into a{' '}
              <span className="text-accent">Guest Experience Powerhouse</span>
            </h1>

            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Increase revenue by <span className="font-body-semibold text-accent">35%</span> while reducing operational costs through our proven digital ecosystem and strategic consulting.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                onClick={handleDemoBooking}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-cta text-lg px-8 py-4"
                iconName="Calendar"
                iconPosition="left"
              >
                Book Free Strategy Session
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleLiveDemo}
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-body-semibold text-lg px-8 py-4"
                iconName="Play"
                iconPosition="left"
              >
                See Live Demo
              </Button>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-heading font-heading-bold text-accent mb-1">
                    {index === 0 && `${animatedNumbers.hotels}+`}
                    {index === 1 && `${animatedNumbers.revenue}%`}
                    {index === 2 && `${animatedNumbers.costs}%`}
                  </div>
                  <div className="text-sm text-primary-foreground/80 font-body-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Hero Image/Demo Preview */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-card rounded-2xl shadow-testimonial p-6 lg:p-8 border border-border/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                      <Icon name="Smartphone" size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-heading-bold text-card-foreground">
                        Sheraton Special
                      </h3>
                      <p className="text-sm text-text-secondary">
                        Guest Experience App
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-error rounded-full"></div>
                    <div className="w-3 h-3 bg-warning rounded-full"></div>
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-muted rounded-lg">
                    <Icon name="CheckCircle" size={20} className="text-success mr-3" />
                    <span className="text-card-foreground font-body-medium">
                      Mobile Check-in Complete
                    </span>
                  </div>
                  <div className="flex items-center p-4 bg-muted rounded-lg">
                    <Icon name="Bell" size={20} className="text-accent mr-3" />
                    <span className="text-card-foreground font-body-medium">
                      Room Ready Notification
                    </span>
                  </div>
                  <div className="flex items-center p-4 bg-muted rounded-lg">
                    <Icon name="Star" size={20} className="text-warning mr-3" />
                    <span className="text-card-foreground font-body-medium">
                      Personalized Recommendations
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Guest Satisfaction</span>
                    <span className="font-body-semibold text-success">98.5%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: '98.5%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default HeroSection;