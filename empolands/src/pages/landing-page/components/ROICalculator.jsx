import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    rooms: 100,
    occupancy: 75,
    adr: 150,
    operationalCosts: 50000
  });

  const [results, setResults] = useState({
    currentRevenue: 0,
    projectedRevenue: 0,
    savings: 0,
    roi: 0,
    paybackPeriod: 0
  });

  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const { rooms, occupancy, adr, operationalCosts } = inputs;
      
      // Current annual revenue calculation
      const currentAnnualRevenue = rooms * (occupancy / 100) * adr * 365;
      
      // Projected improvements with Pro Empo solution
      const revenueIncrease = 0.35; // 35% average increase
      const costReduction = 0.28; // 28% operational cost reduction
      const implementationCost = rooms * 500; // $500 per room implementation
      
      const projectedAnnualRevenue = currentAnnualRevenue * (1 + revenueIncrease);
      const annualSavings = (operationalCosts * 12) * costReduction;
      const totalAnnualBenefit = (projectedAnnualRevenue - currentAnnualRevenue) + annualSavings;
      const roi = ((totalAnnualBenefit - implementationCost) / implementationCost) * 100;
      const paybackPeriod = implementationCost / (totalAnnualBenefit / 12);

      setResults({
        currentRevenue: Math.round(currentAnnualRevenue),
        projectedRevenue: Math.round(projectedAnnualRevenue),
        savings: Math.round(totalAnnualBenefit),
        roi: Math.round(roi),
        paybackPeriod: Math.round(paybackPeriod * 10) / 10
      });
      
      setIsCalculating(false);
    }, 500);
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleConsultationBooking = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="roi-calculator" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-heading-bold text-text-primary mb-6">
            Calculate Your{' '}
            <span className="text-accent">ROI Potential</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See exactly how much revenue you could generate and costs you could save with Pro Empo's digital transformation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-card rounded-2xl shadow-testimonial p-8 border border-border">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                <Icon name="Calculator" size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-heading-bold text-card-foreground">
                  Hotel Information
                </h3>
                <p className="text-sm text-text-secondary">
                  Enter your current operational data
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Input
                label="Number of Rooms"
                type="number"
                value={inputs.rooms}
                onChange={(e) => handleInputChange('rooms', e.target.value)}
                placeholder="100"
                description="Total number of available rooms"
                min="1"
                max="2000"
              />

              <Input
                label="Average Occupancy Rate (%)"
                type="number"
                value={inputs.occupancy}
                onChange={(e) => handleInputChange('occupancy', e.target.value)}
                placeholder="75"
                description="Current average occupancy percentage"
                min="1"
                max="100"
              />

              <Input
                label="Average Daily Rate (ADR)"
                type="number"
                value={inputs.adr}
                onChange={(e) => handleInputChange('adr', e.target.value)}
                placeholder="150"
                description="Average room rate in USD"
                min="50"
                max="1000"
              />

              <Input
                label="Monthly Operational Costs"
                type="number"
                value={inputs.operationalCosts}
                onChange={(e) => handleInputChange('operationalCosts', e.target.value)}
                placeholder="50000"
                description="Current monthly operational expenses"
                min="10000"
                max="500000"
              />
            </div>

            <div className="mt-8 p-4 bg-muted rounded-lg">
              <div className="flex items-center text-sm text-text-secondary">
                <Icon name="Shield" size={16} className="mr-2" />
                <span>Your data is secure and not stored on our servers</span>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Current vs Projected Revenue */}
            <div className="bg-card rounded-2xl shadow-testimonial p-8 border border-border">
              <h3 className="text-xl font-heading font-heading-bold text-card-foreground mb-6">
                Revenue Projection
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-error/5 rounded-lg border border-error/20">
                  <div>
                    <div className="text-sm text-text-secondary mb-1">Current Annual Revenue</div>
                    <div className="text-2xl font-heading font-heading-bold text-error">
                      {isCalculating ? '...' : formatCurrency(results.currentRevenue)}
                    </div>
                  </div>
                  <Icon name="TrendingDown" size={32} className="text-error" />
                </div>

                <div className="flex items-center justify-center">
                  <Icon name="ArrowDown" size={24} className="text-accent" />
                </div>

                <div className="flex items-center justify-between p-4 bg-success/5 rounded-lg border border-success/20">
                  <div>
                    <div className="text-sm text-text-secondary mb-1">Projected Annual Revenue</div>
                    <div className="text-2xl font-heading font-heading-bold text-success">
                      {isCalculating ? '...' : formatCurrency(results.projectedRevenue)}
                    </div>
                  </div>
                  <Icon name="TrendingUp" size={32} className="text-success" />
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl shadow-testimonial p-6 border border-border text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="DollarSign" size={24} className="text-accent" />
                </div>
                <div className="text-2xl font-heading font-heading-bold text-accent mb-1">
                  {isCalculating ? '...' : formatCurrency(results.savings)}
                </div>
                <div className="text-sm text-text-secondary">
                  Annual Benefit
                </div>
              </div>

              <div className="bg-card rounded-xl shadow-testimonial p-6 border border-border text-center">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Percent" size={24} className="text-success" />
                </div>
                <div className="text-2xl font-heading font-heading-bold text-success mb-1">
                  {isCalculating ? '...' : `${results.roi}%`}
                </div>
                <div className="text-sm text-text-secondary">
                  Return on Investment
                </div>
              </div>
            </div>

            {/* Payback Period */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border border-accent/20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-text-secondary mb-1">Payback Period</div>
                  <div className="text-3xl font-heading font-heading-bold text-primary">
                    {isCalculating ? '...' : `${results.paybackPeriod} months`}
                  </div>
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
              </div>
            </div>

            {/* Implementation Timeline */}
            <div className="bg-card rounded-xl shadow-testimonial p-6 border border-border">
              <h4 className="font-heading font-heading-bold text-card-foreground mb-4">
                Implementation Timeline
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3 text-accent-foreground text-sm font-body-bold">
                    1
                  </div>
                  <div>
                    <div className="font-body-semibold text-card-foreground">Strategy & Planning</div>
                    <div className="text-sm text-text-secondary">2-3 weeks</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3 text-accent-foreground text-sm font-body-bold">
                    2
                  </div>
                  <div>
                    <div className="font-body-semibold text-card-foreground">System Integration</div>
                    <div className="text-sm text-text-secondary">4-6 weeks</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3 text-accent-foreground text-sm font-body-bold">
                    3
                  </div>
                  <div>
                    <div className="font-body-semibold text-card-foreground">Staff Training & Launch</div>
                    <div className="text-sm text-text-secondary">1-2 weeks</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                variant="default"
                size="lg"
                onClick={handleConsultationBooking}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-cta w-full"
                iconName="Calendar"
                iconPosition="left"
              >
                Book Strategy Consultation
              </Button>
              <p className="text-sm text-text-secondary mt-3">
                Get a detailed ROI analysis tailored to your specific hotel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;