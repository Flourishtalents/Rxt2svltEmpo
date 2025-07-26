import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProblemSection = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const painPoints = [
    {
      id: 'satisfaction',
      title: 'Guest Satisfaction Decline',
      position: { top: '20%', left: '15%' },
      impact: '$125K',
      description: 'Poor guest experiences lead to negative reviews and reduced bookings',
      details: [
        'Average rating drop of 0.8 stars',
        '23% decrease in repeat bookings',
        'Lost revenue from negative word-of-mouth'
      ]
    },
    {
      id: 'operations',
      title: 'Operational Inefficiencies',
      position: { top: '45%', right: '20%' },
      impact: '$89K',
      description: 'Manual processes waste time and increase operational costs',
      details: [
        '40% of staff time on repetitive tasks',
        'Average 15-minute check-in process',
        'High staff turnover due to burnout'
      ]
    },
    {
      id: 'revenue',
      title: 'Revenue Leakage',
      position: { bottom: '25%', left: '25%' },
      impact: '$156K',
      description: 'Missed opportunities and inefficient pricing strategies',
      details: [
        'Suboptimal room pricing strategies',
        'Underutilized amenities and services',
        'Poor upselling and cross-selling'
      ]
    },
    {
      id: 'competition',
      title: 'Competitive Disadvantage',
      position: { top: '30%', right: '15%' },
      impact: '$203K',
      description: 'Falling behind tech-savvy competitors in the market',
      details: [
        'Outdated booking systems',
        'Limited digital guest services',
        'Poor online presence and reviews'
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-heading-bold text-text-primary mb-6">
            The Hidden Costs of{' '}
            <span className="text-error">Outdated Operations</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Traditional hotel management is costing you more than you realize. 
            Explore the interactive visualization below to see the real impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Interactive Visualization */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-testimonial p-8 border border-border">
              <h3 className="text-xl font-heading font-heading-bold text-card-foreground mb-6 text-center">
                Annual Revenue Impact Visualization
              </h3>
              
              {/* Hotel Illustration */}
              <div className="relative h-80 bg-gradient-to-b from-muted to-muted/50 rounded-lg overflow-hidden">
                {/* Hotel Building */}
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-gray-600 to-gray-500 rounded-lg">
                  {/* Windows */}
                  <div className="grid grid-cols-6 gap-2 p-4 h-full">
                    {Array.from({ length: 24 }).map((_, index) => (
                      <div
                        key={index}
                        className={`bg-yellow-200 rounded-sm ${
                          Math.random() > 0.3 ? 'opacity-80' : 'opacity-20'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Pain Point Hotspots */}
                {painPoints.map((point) => (
                  <div
                    key={point.id}
                    className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                    style={point.position}
                    onMouseEnter={() => setActiveHotspot(point.id)}
                    onMouseLeave={() => setActiveHotspot(null)}
                  >
                    <div className={`relative ${activeHotspot === point.id ? 'z-20' : 'z-10'}`}>
                      <div className={`w-6 h-6 rounded-full border-4 border-error bg-error/20 animate-pulse ${
                        activeHotspot === point.id ? 'scale-150' : 'scale-100'
                      } transition-transform duration-250`}>
                        <div className="absolute inset-0 rounded-full bg-error animate-ping opacity-75"></div>
                      </div>
                      
                      {/* Tooltip */}
                      {activeHotspot === point.id && (
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 bg-card border border-border rounded-lg shadow-testimonial p-4 animation-reveal">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-body-semibold text-card-foreground text-sm">
                              {point.title}
                            </h4>
                            <span className="text-error font-body-bold text-sm">
                              -{point.impact}
                            </span>
                          </div>
                          <p className="text-xs text-text-secondary mb-3">
                            {point.description}
                          </p>
                          <ul className="space-y-1">
                            {point.details.map((detail, index) => (
                              <li key={index} className="flex items-start text-xs text-text-secondary">
                                <Icon name="AlertTriangle" size={12} className="text-warning mr-2 mt-0.5 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                          {/* Arrow */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-card"></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-text-secondary mb-2">
                  Hover over the red indicators to explore each pain point
                </p>
                <div className="flex items-center justify-center text-error font-body-bold">
                  <Icon name="TrendingDown" size={20} className="mr-2" />
                  <span className="text-lg">
                    Total Annual Loss: $573K+
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Problem Statistics */}
          <div className="space-y-8">
            <div className="bg-card rounded-xl shadow-testimonial p-6 border border-border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="TrendingDown" size={24} className="text-error" />
                </div>
                <div>
                  <h3 className="font-heading font-heading-bold text-card-foreground">
                    Industry Crisis
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Current hospitality challenges
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-heading font-heading-bold text-error mb-1">
                    73%
                  </div>
                  <div className="text-xs text-text-secondary">
                    Hotels report declining guest satisfaction
                  </div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-heading font-heading-bold text-error mb-1">
                    45%
                  </div>
                  <div className="text-xs text-text-secondary">
                    Revenue loss from operational inefficiencies
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl shadow-testimonial p-6 border border-border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="Clock" size={24} className="text-warning" />
                </div>
                <div>
                  <h3 className="font-heading font-heading-bold text-card-foreground">
                    Time is Running Out
                  </h3>
                  <p className="text-sm text-text-secondary">
                    The cost of inaction
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">
                    Monthly revenue loss
                  </span>
                  <span className="font-body-bold text-error">
                    $47,750
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">
                    Guest retention decline
                  </span>
                  <span className="font-body-bold text-error">
                    -2.3% monthly
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">
                    Competitive disadvantage
                  </span>
                  <span className="font-body-bold text-error">
                    Increasing
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-6 border border-accent/20">
              <div className="flex items-center mb-4">
                <Icon name="Lightbulb" size={24} className="text-accent mr-3" />
                <h3 className="font-heading font-heading-bold text-text-primary">
                  The Solution Exists
                </h3>
              </div>
              <p className="text-text-secondary mb-4">
                Leading hotels are already transforming their operations and seeing remarkable results. 
                Don't let your competition get further ahead.
              </p>
              <div className="flex items-center text-accent font-body-semibold">
                <Icon name="ArrowRight" size={16} className="mr-2" />
                <span>Discover how below</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;