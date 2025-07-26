import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('annual');
  const [selectedTier, setSelectedTier] = useState('enterprise');

  const pricingTiers = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for boutique hotels getting started with digital transformation',
      price: {
        monthly: 299,
        annual: 2390
      },
      roomLimit: '25-50 rooms',
      features: [
        'Mobile check-in/out',
        'Basic guest services',
        'Real-time feedback',
        'Standard analytics',
        'Email support',
        'Basic integrations',
        'Guest communication portal',
        'Standard reporting'
      ],
      limitations: [
        'Limited customization',
        'Basic support hours',
        'Standard implementation'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Comprehensive solution for mid-size hotels seeking operational excellence',
      price: {
        monthly: 599,
        annual: 4790
      },
      roomLimit: '51-150 rooms',
      features: [
        'Everything in Starter',
        'Advanced AI recommendations',
        'Dynamic pricing optimization',
        'Advanced analytics dashboard',
        'Priority support',
        'Custom integrations',
        'Staff productivity tools',
        'Revenue management',
        'Guest preference tracking',
        'Automated upselling'
      ],
      limitations: [
        'Limited white-labeling',
        'Standard training hours'
      ],
      popular: true,
      cta: 'Schedule Demo'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete digital ecosystem for large hotels and hotel chains',
      price: {
        monthly: 1299,
        annual: 10390
      },
      roomLimit: '150+ rooms',
      features: [
        'Everything in Professional',
        'Full white-label solution',
        'Multi-property management',
        'Advanced AI & machine learning',
        'Custom development',
        '24/7 dedicated support',
        'On-site implementation',
        'Comprehensive training',
        'API access',
        'Custom reporting',
        'Enterprise integrations',
        'Dedicated account manager'
      ],
      limitations: [],
      popular: false,
      cta: 'Book Consultation'
    }
  ];

  const comparisonFeatures = [
    {
      category: 'Core Features',
      features: [
        { name: 'Mobile Check-in/Out', starter: true, professional: true, enterprise: true },
        { name: 'Guest Services Portal', starter: true, professional: true, enterprise: true },
        { name: 'Real-time Feedback', starter: true, professional: true, enterprise: true },
        { name: 'Basic Analytics', starter: true, professional: false, enterprise: false },
        { name: 'Advanced Analytics', starter: false, professional: true, enterprise: true },
        { name: 'AI Recommendations', starter: false, professional: true, enterprise: true }
      ]
    },
    {
      category: 'Revenue Optimization',
      features: [
        { name: 'Dynamic Pricing', starter: false, professional: true, enterprise: true },
        { name: 'Automated Upselling', starter: false, professional: true, enterprise: true },
        { name: 'Revenue Management', starter: false, professional: true, enterprise: true },
        { name: 'Custom Pricing Rules', starter: false, professional: false, enterprise: true }
      ]
    },
    {
      category: 'Support & Implementation',
      features: [
        { name: 'Email Support', starter: true, professional: false, enterprise: false },
        { name: 'Priority Support', starter: false, professional: true, enterprise: false },
        { name: '24/7 Dedicated Support', starter: false, professional: false, enterprise: true },
        { name: 'On-site Implementation', starter: false, professional: false, enterprise: true },
        { name: 'Dedicated Account Manager', starter: false, professional: false, enterprise: true }
      ]
    }
  ];

  const handleConsultationBooking = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const getMonthlyPrice = (tier) => {
    return billingCycle === 'annual' ? Math.round(tier.price.annual / 12) : tier.price.monthly;
  };

  const getSavings = (tier) => {
    const annualMonthly = tier.price.annual / 12;
    const monthlySavings = tier.price.monthly - annualMonthly;
    const annualSavings = monthlySavings * 12;
    return Math.round((annualSavings / (tier.price.monthly * 12)) * 100);
  };

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-heading-bold text-text-primary mb-6">
            Choose Your{' '}
            <span className="text-accent">Transformation Plan</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Flexible licensing options designed to scale with your hotel's growth and deliver immediate ROI
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex bg-muted rounded-lg p-1 mb-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-md font-body-medium transition-all duration-250 ${
                billingCycle === 'monthly' ?'bg-card text-card-foreground shadow-sm' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-3 rounded-md font-body-medium transition-all duration-250 relative ${
                billingCycle === 'annual' ?'bg-card text-card-foreground shadow-sm' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-success text-success-foreground text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-card rounded-2xl shadow-testimonial border-2 transition-all duration-250 ${
                tier.popular
                  ? 'border-accent scale-105'
                  : selectedTier === tier.id
                  ? 'border-primary' :'border-border hover:border-accent/50'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-body-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-heading-bold text-card-foreground mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-text-secondary mb-6">
                    {tier.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-heading font-heading-bold text-primary mb-1">
                      {formatPrice(getMonthlyPrice(tier))}
                      <span className="text-lg text-text-secondary font-body-medium">/month</span>
                    </div>
                    {billingCycle === 'annual' && (
                      <div className="text-sm text-success">
                        Save {getSavings(tier)}% with annual billing
                      </div>
                    )}
                  </div>

                  <div className="text-sm text-text-secondary mb-6">
                    {tier.roomLimit}
                  </div>

                  <Button
                    variant={tier.popular ? "default" : "outline"}
                    size="lg"
                    onClick={handleConsultationBooking}
                    className={`w-full font-cta ${
                      tier.popular 
                        ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                        : ''
                    }`}
                    iconName={tier.id === 'starter' ? 'Play' : 'Calendar'}
                    iconPosition="left"
                  >
                    {tier.cta}
                  </Button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading font-heading-bold text-card-foreground">
                    What's Included:
                  </h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="Check" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {tier.limitations.length > 0 && (
                    <div className="pt-4 border-t border-border">
                      <h5 className="font-body-semibold text-text-secondary text-sm mb-2">
                        Limitations:
                      </h5>
                      <ul className="space-y-2">
                        {tier.limitations.map((limitation, index) => (
                          <li key={index} className="flex items-start">
                            <Icon name="Minus" size={14} className="text-text-secondary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-text-secondary">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-card rounded-2xl shadow-testimonial border border-border overflow-hidden">
          <div className="p-8 border-b border-border">
            <h3 className="text-2xl font-heading font-heading-bold text-card-foreground text-center">
              Detailed Feature Comparison
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 font-heading font-heading-bold text-card-foreground">
                    Features
                  </th>
                  {pricingTiers.map((tier) => (
                    <th key={tier.id} className="text-center p-6">
                      <div className="font-heading font-heading-bold text-card-foreground">
                        {tier.name}
                      </div>
                      <div className="text-sm text-text-secondary mt-1">
                        {formatPrice(getMonthlyPrice(tier))}/month
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <tr className="bg-muted/50">
                      <td colSpan={4} className="p-4 font-body-semibold text-text-primary">
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr key={featureIndex} className="border-b border-border hover:bg-muted/20">
                        <td className="p-4 text-card-foreground">
                          {feature.name}
                        </td>
                        <td className="p-4 text-center">
                          {feature.starter ? (
                            <Icon name="Check" size={20} className="text-success mx-auto" />
                          ) : (
                            <Icon name="X" size={20} className="text-text-secondary mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {feature.professional ? (
                            <Icon name="Check" size={20} className="text-success mx-auto" />
                          ) : (
                            <Icon name="X" size={20} className="text-text-secondary mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {feature.enterprise ? (
                            <Icon name="Check" size={20} className="text-success mx-auto" />
                          ) : (
                            <Icon name="X" size={20} className="text-text-secondary mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl shadow-testimonial p-6 border border-border text-center">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={24} className="text-success" />
            </div>
            <h4 className="font-heading font-heading-bold text-card-foreground mb-2">
              30-Day Money Back
            </h4>
            <p className="text-sm text-text-secondary">
              Not satisfied? Get a full refund within 30 days, no questions asked.
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-testimonial p-6 border border-border text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={24} className="text-accent" />
            </div>
            <h4 className="font-heading font-heading-bold text-card-foreground mb-2">
              Quick Implementation
            </h4>
            <p className="text-sm text-text-secondary">
              Get up and running in 2-8 weeks with our proven implementation process.
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-testimonial p-6 border border-border text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-primary" />
            </div>
            <h4 className="font-heading font-heading-bold text-card-foreground mb-2">
              Dedicated Support
            </h4>
            <p className="text-sm text-text-secondary">
              Expert support team available to ensure your success every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;