import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveAppDemo = () => {
  const [activeScreen, setActiveScreen] = useState('checkin');
  const [demoStep, setDemoStep] = useState(0);

  const demoScreens = {
    checkin: {
      title: 'Mobile Check-in',
      description: 'Seamless arrival experience',
      steps: [
        {
          title: 'Reservation Lookup',
          content: 'Guest enters confirmation number',
          metrics: { time: '30 seconds', satisfaction: '98%' }
        },
        {
          title: 'Identity Verification',
          content: 'Automated ID scanning and verification',
          metrics: { time: '45 seconds', accuracy: '99.8%' }
        },
        {
          title: 'Room Assignment',
          content: 'AI-optimized room selection based on preferences',
          metrics: { time: '15 seconds', upgrade: '35%' }
        },
        {
          title: 'Digital Key Delivery',
          content: 'Instant room access via mobile app',
          metrics: { time: '10 seconds', success: '99.9%' }
        }
      ]
    },
    services: {
      title: 'Guest Services',
      description: 'Personalized concierge experience',
      steps: [
        {
          title: 'Service Request',
          content: 'Voice or text-based service requests',
          metrics: { response: '2 minutes', satisfaction: '96%' }
        },
        {
          title: 'AI Recommendations',
          content: 'Personalized dining and activity suggestions',
          metrics: { engagement: '78%', bookings: '45%' }
        },
        {
          title: 'Real-time Updates',
          content: 'Live status tracking for all requests',
          metrics: { transparency: '100%', efficiency: '85%' }
        },
        {
          title: 'Upsell Opportunities',
          content: 'Contextual premium service offers',
          metrics: { conversion: '28%', revenue: '+$89' }
        }
      ]
    },
    feedback: {
      title: 'Real-time Feedback',
      description: 'Continuous improvement insights',
      steps: [
        {
          title: 'In-moment Capture',
          content: 'Feedback collection during guest journey',
          metrics: { response: '89%', timing: 'Real-time' }
        },
        {
          title: 'Sentiment Analysis',
          content: 'AI-powered emotion and satisfaction tracking',
          metrics: { accuracy: '94%', insights: 'Instant' }
        },
        {
          title: 'Alert System',
          content: 'Immediate notifications for service recovery',
          metrics: { speed: '< 5 minutes', resolution: '92%' }
        },
        {
          title: 'Trend Analysis',
          content: 'Predictive insights for service improvement',
          metrics: { prediction: '87%', prevention: '73%' }
        }
      ]
    }
  };

  const currentDemo = demoScreens[activeScreen];

  const handleNextStep = () => {
    if (demoStep < currentDemo.steps.length - 1) {
      setDemoStep(demoStep + 1);
    } else {
      setDemoStep(0);
    }
  };

  const handlePrevStep = () => {
    if (demoStep > 0) {
      setDemoStep(demoStep - 1);
    } else {
      setDemoStep(currentDemo.steps.length - 1);
    }
  };

  const handleScreenChange = (screen) => {
    setActiveScreen(screen);
    setDemoStep(0);
  };

  return (
    <section id="app-demo" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-heading-bold text-text-primary mb-6">
            Experience the{' '}
            <span className="text-accent">Sheraton Special</span> App
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Take an interactive tour through our guest experience platform and see the operational benefits in real-time
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Demo Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl shadow-testimonial p-6 border border-border sticky top-8">
              <h3 className="font-heading font-heading-bold text-card-foreground mb-6">
                Demo Sections
              </h3>
              
              <div className="space-y-3">
                {Object.entries(demoScreens).map(([key, screen]) => (
                  <button
                    key={key}
                    onClick={() => handleScreenChange(key)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-250 ${
                      activeScreen === key
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-muted hover:bg-muted/80 text-card-foreground'
                    }`}
                  >
                    <div className="font-body-semibold mb-1">
                      {screen.title}
                    </div>
                    <div className={`text-sm ${
                      activeScreen === key ? 'text-accent-foreground/80' : 'text-text-secondary'
                    }`}>
                      {screen.description}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-heading font-heading-bold text-success mb-1">
                    98.5%
                  </div>
                  <div className="text-sm text-text-secondary">
                    Average Guest Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl shadow-testimonial border border-border overflow-hidden">
              {/* Phone Mockup Header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-6">
                <div className="flex items-center justify-between text-primary-foreground">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center mr-3">
                      <Icon name="Smartphone" size={18} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-heading-bold">
                        {currentDemo.title}
                      </h3>
                      <p className="text-sm text-primary-foreground/80">
                        {currentDemo.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-body-medium">
                      Step {demoStep + 1} of {currentDemo.steps.length}
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-8">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-heading font-heading-bold text-card-foreground">
                      {currentDemo.steps[demoStep].title}
                    </h4>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handlePrevStep}
                        iconName="ChevronLeft"
                        className="w-10 h-10"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleNextStep}
                        iconName="ChevronRight"
                        className="w-10 h-10"
                      />
                    </div>
                  </div>
                  
                  <p className="text-text-secondary mb-6">
                    {currentDemo.steps[demoStep].content}
                  </p>

                  {/* Visual Demo Area */}
                  <div className="bg-muted rounded-xl p-8 mb-6 min-h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <Icon 
                          name={activeScreen === 'checkin' ? 'Key' : activeScreen === 'services' ? 'Users' : 'MessageSquare'} 
                          size={32} 
                          className="text-accent" 
                        />
                      </div>
                      <div className="text-lg font-body-semibold text-card-foreground mb-2">
                        {currentDemo.steps[demoStep].title} Demo
                      </div>
                      <div className="text-text-secondary">
                        Interactive demonstration of {currentDemo.steps[demoStep].title.toLowerCase()}
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(currentDemo.steps[demoStep].metrics).map(([key, value]) => (
                      <div key={key} className="bg-card border border-border rounded-lg p-4 text-center">
                        <div className="text-lg font-heading font-heading-bold text-accent mb-1">
                          {value}
                        </div>
                        <div className="text-sm text-text-secondary capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {currentDemo.steps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors duration-250 ${
                          index === demoStep ? 'bg-accent' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <Button
                    variant="default"
                    size="sm"
                    onClick={handleNextStep}
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                    iconName="Play"
                    iconPosition="left"
                  >
                    {demoStep === currentDemo.steps.length - 1 ? 'Restart Demo' : 'Next Step'}
                  </Button>
                </div>
              </div>
            </div>

            {/* Operational Benefits */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl shadow-testimonial p-6 border border-border text-center">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={24} className="text-success" />
                </div>
                <div className="text-2xl font-heading font-heading-bold text-success mb-1">
                  87%
                </div>
                <div className="text-sm text-text-secondary">
                  Faster Check-in Process
                </div>
              </div>

              <div className="bg-card rounded-xl shadow-testimonial p-6 border border-border text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="DollarSign" size={24} className="text-accent" />
                </div>
                <div className="text-2xl font-heading font-heading-bold text-accent mb-1">
                  35%
                </div>
                <div className="text-sm text-text-secondary">
                  Revenue Increase
                </div>
              </div>

              <div className="bg-card rounded-xl shadow-testimonial p-6 border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <div className="text-2xl font-heading font-heading-bold text-primary mb-1">
                  28%
                </div>
                <div className="text-sm text-text-secondary">
                  Staff Efficiency Gain
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAppDemo;