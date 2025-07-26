import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SolutionShowcase = () => {
  const [activeView, setActiveView] = useState('traditional');

  const traditionalOperations = [
    {
      process: 'Guest Check-in',
      time: '15 minutes',
      issues: ['Long queues', 'Manual paperwork', 'Staff bottlenecks'],
      icon: 'Clock'
    },
    {
      process: 'Service Requests',
      time: '25 minutes',
      issues: ['Phone calls', 'Manual dispatch', 'No tracking'],
      icon: 'Phone'
    },
    {
      process: 'Feedback Collection',
      time: 'Post-stay',
      issues: ['Low response rates', 'Delayed insights', 'No real-time action'],
      icon: 'MessageSquare'
    },
    {
      process: 'Revenue Management',
      time: 'Weekly',
      issues: ['Static pricing', 'Limited data', 'Reactive decisions'],
      icon: 'DollarSign'
    }
  ];

  const digitalOperations = [
    {
      process: 'Mobile Check-in',
      time: '2 minutes',
      benefits: ['Contactless process', 'Automated verification', 'Instant room access'],
      icon: 'Smartphone',
      improvement: '87% faster'
    },
    {
      process: 'AI-Powered Requests',
      time: '3 minutes',
      benefits: ['Instant routing', 'Predictive service', 'Real-time tracking'],
      icon: 'Zap',
      improvement: '88% faster'
    },
    {
      process: 'Real-time Feedback',
      time: 'Instant',
      benefits: ['In-moment capture', 'Immediate alerts', 'Proactive resolution'],
      icon: 'Heart',
      improvement: '95% response rate'
    },
    {
      process: 'Dynamic Pricing',
      time: 'Real-time',
      benefits: ['AI optimization', 'Market intelligence', 'Automated adjustments'],
      icon: 'TrendingUp',
      improvement: '35% revenue increase'
    }
  ];

  const appFeatures = [
    {
      title: 'Mobile Check-in/Out',
      description: 'Seamless arrival and departure experience',
      icon: 'Smartphone'
    },
    {
      title: 'Digital Room Key',
      description: 'Secure, contactless room access',
      icon: 'Key'
    },
    {
      title: 'Concierge Services',
      description: 'AI-powered recommendations and bookings',
      icon: 'Users'
    },
    {
      title: 'Real-time Communication',
      description: 'Instant guest-staff messaging',
      icon: 'MessageCircle'
    },
    {
      title: 'Personalized Offers',
      description: 'Targeted upselling and experiences',
      icon: 'Gift'
    },
    {
      title: 'Feedback System',
      description: 'Continuous improvement insights',
      icon: 'Star'
    }
  ];

  return (
    <section id="solutions" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-heading-bold text-text-primary mb-6">
            From <span className="text-error">Outdated</span> to{' '}
            <span className="text-success">Optimized</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            See the dramatic transformation possible with Pro Empo's integrated digital ecosystem
          </p>
          
          {/* View Toggle */}
          <div className="inline-flex bg-muted rounded-lg p-1">
            <button
              onClick={() => setActiveView('traditional')}
              className={`px-6 py-3 rounded-md font-body-medium transition-all duration-250 ${
                activeView === 'traditional' ?'bg-error text-error-foreground shadow-sm' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              Traditional Operations
            </button>
            <button
              onClick={() => setActiveView('digital')}
              className={`px-6 py-3 rounded-md font-body-medium transition-all duration-250 ${
                activeView === 'digital' ?'bg-success text-success-foreground shadow-sm' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              Pro Empo Digital Ecosystem
            </button>
          </div>
        </div>

        {/* Comparison View */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Traditional Operations */}
          <div className={`transition-all duration-500 ${
            activeView === 'traditional' ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
          }`}>
            <div className="bg-card border-2 border-error/20 rounded-2xl shadow-testimonial p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="AlertTriangle" size={24} className="text-error" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-heading-bold text-card-foreground">
                    Traditional Hotel Operations
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Current industry standard
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {traditionalOperations.map((operation, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Icon name={operation.icon} size={20} className="text-error mr-3" />
                        <span className="font-body-semibold text-card-foreground">
                          {operation.process}
                        </span>
                      </div>
                      <span className="text-sm font-body-bold text-error">
                        {operation.time}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {operation.issues.map((issue, issueIndex) => (
                        <span
                          key={issueIndex}
                          className="px-2 py-1 bg-error/10 text-error text-xs rounded-md"
                        >
                          {issue}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Overall Efficiency</span>
                  <span className="font-body-bold text-error">32%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div className="bg-error h-2 rounded-full" style={{ width: '32%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Operations */}
          <div className={`transition-all duration-500 ${
            activeView === 'digital' ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
          }`}>
            <div className="bg-card border-2 border-success/20 rounded-2xl shadow-testimonial p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="CheckCircle" size={24} className="text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-heading-bold text-card-foreground">
                    Pro Empo Digital Ecosystem
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Next-generation hospitality
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {digitalOperations.map((operation, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Icon name={operation.icon} size={20} className="text-success mr-3" />
                        <span className="font-body-semibold text-card-foreground">
                          {operation.process}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-body-bold text-success">
                          {operation.time}
                        </div>
                        <div className="text-xs text-accent font-body-medium">
                          {operation.improvement}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {operation.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="px-2 py-1 bg-success/10 text-success text-xs rounded-md"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Overall Efficiency</span>
                  <span className="font-body-bold text-success">94%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Features Grid */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-heading font-heading-bold text-text-primary mb-4">
              Sheraton Special App Features
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Every feature designed to enhance guest experience while optimizing your operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {appFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-testimonial p-6 border border-border hover:border-accent/50 transition-all duration-250 group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-250">
                  <Icon name={feature.icon} size={24} className="text-accent" />
                </div>
                <h4 className="font-heading font-heading-bold text-card-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="default"
              size="lg"
              onClick={() => {
                const demoSection = document.getElementById('app-demo');
                if (demoSection) {
                  demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-cta"
              iconName="Play"
              iconPosition="left"
            >
              Experience Interactive Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionShowcase;