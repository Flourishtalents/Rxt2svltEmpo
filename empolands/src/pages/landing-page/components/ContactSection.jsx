import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    hotelSize: '',
    currentChallenges: '',
    preferredTime: '',
    urgency: 'medium'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const hotelSizeOptions = [
    { value: '25-50', label: '25-50 rooms (Boutique)' },
    { value: '51-100', label: '51-100 rooms (Mid-size)' },
    { value: '101-200', label: '101-200 rooms (Large)' },
    { value: '201-500', label: '201-500 rooms (Resort)' },
    { value: '500+', label: '500+ rooms (Enterprise)' }
  ];

  const urgencyOptions = [
    { value: 'immediate', label: 'Immediate (Within 30 days)', color: 'text-error' },
    { value: 'high', label: 'High Priority (1-3 months)', color: 'text-warning' },
    { value: 'medium', label: 'Medium Priority (3-6 months)', color: 'text-accent' },
    { value: 'low', label: 'Planning Phase (6+ months)', color: 'text-primary' }
  ];

  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Call Us',
      description: 'Speak with an expert',
      contact: '+1 (800) EMPOLANDS',
      action: () => window.open('tel:+18003676526', '_self')
    },
    {
      icon: 'Mail',
      title: 'Email Us',
      description: 'Send us a message',
      contact: 'hello@empolands.com',
      action: () => window.open('mailto:hello@empolands.com', '_self')
    },
    {
      icon: 'MessageCircle',
      title: 'Live Chat',
      description: 'Chat with our team',
      contact: 'Available 24/7',
      action: () => {
        // Simulate opening chat widget
        alert('Live chat feature would open here');
      }
    },
    {
      icon: 'MapPin',
      title: 'Visit Us',
      description: 'Our headquarters',
      contact: 'New York, NY',
      action: () => window.open('https://maps.google.com/?q=New+York+NY', '_blank')
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        hotelSize: '',
        currentChallenges: '',
        preferredTime: '',
        urgency: 'medium'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getUrgencyColor = (urgency) => {
    const option = urgencyOptions.find(opt => opt.value === urgency);
    return option ? option.color : 'text-primary';
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-heading-bold text-text-primary mb-6">
            Ready to{' '}
            <span className="text-accent">Transform Your Hotel?</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Book your free strategy consultation and discover how Pro Empo can revolutionize your hotel operations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl shadow-testimonial p-8 border border-border">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                <Icon name="Calendar" size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-heading-bold text-card-foreground">
                  Book Your Strategy Session
                </h3>
                <p className="text-sm text-text-secondary">
                  Free consultation • No commitment required
                </p>
              </div>
            </div>

            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCircle" size={32} className="text-success" />
                </div>
                <h4 className="text-xl font-heading font-heading-bold text-success mb-4">
                  Consultation Booked Successfully!
                </h4>
                <p className="text-text-secondary mb-6">
                  Thank you for your interest. Our team will contact you within 24 hours to schedule your strategy session.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitStatus(null)}
                  className="font-body-medium"
                >
                  Book Another Session
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="First Name"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="John"
                    required
                  />
                  <Input
                    label="Last Name"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Smith"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john@hotel.com"
                    required
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>

                <Input
                  label="Hotel/Company Name"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="Grand Plaza Hotel"
                  required
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-body-medium text-text-primary mb-2">
                      Hotel Size
                    </label>
                    <select
                      value={formData.hotelSize}
                      onChange={(e) => handleInputChange('hotelSize', e.target.value)}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-input text-text-primary focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors duration-250"
                      required
                    >
                      <option value="">Select hotel size</option>
                      {hotelSizeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-body-medium text-text-primary mb-2">
                      Implementation Urgency
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => handleInputChange('urgency', e.target.value)}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-input text-text-primary focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors duration-250"
                    >
                      {urgencyOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-body-medium text-text-primary mb-2">
                    Current Challenges
                  </label>
                  <textarea
                    value={formData.currentChallenges}
                    onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                    placeholder="Tell us about your current operational challenges, guest satisfaction issues, or revenue optimization goals..."
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-input text-text-primary focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors duration-250 resize-none"
                  />
                </div>

                <Input
                  label="Preferred Consultation Time"
                  type="text"
                  value={formData.preferredTime}
                  onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                  placeholder="e.g., Weekday mornings, Tuesday afternoons"
                  description="We'll do our best to accommodate your schedule"
                />

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-text-secondary">
                      Priority Level: 
                      <span className={`ml-2 font-body-semibold ${getUrgencyColor(formData.urgency)}`}>
                        {urgencyOptions.find(opt => opt.value === formData.urgency)?.label}
                      </span>
                    </div>
                    <div className="text-sm text-text-secondary">
                      Response time: 
                      <span className="ml-1 font-body-semibold text-success">
                        {formData.urgency === 'immediate' ? '< 4 hours' : '< 24 hours'}
                      </span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    loading={isSubmitting}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-cta"
                    iconName="Calendar"
                    iconPosition="left"
                  >
                    {isSubmitting ? 'Booking Consultation...' : 'Book Free Consultation'}
                  </Button>
                </div>

                <div className="text-center text-xs text-text-secondary">
                  By submitting this form, you agree to receive communications from Pro Empo Consults. 
                  We respect your privacy and will never share your information.
                </div>
              </form>
            )}
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <button
                  key={index}
                  onClick={method.action}
                  className="bg-card rounded-xl shadow-testimonial p-6 border border-border hover:border-accent/50 transition-all duration-250 text-left group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-250">
                    <Icon name={method.icon} size={24} className="text-accent" />
                  </div>
                  <h4 className="font-heading font-heading-bold text-card-foreground mb-1">
                    {method.title}
                  </h4>
                  <p className="text-sm text-text-secondary mb-2">
                    {method.description}
                  </p>
                  <p className="text-sm font-body-semibold text-accent">
                    {method.contact}
                  </p>
                </button>
              ))}
            </div>

            {/* Office Location */}
            <div className="bg-card rounded-2xl shadow-testimonial border border-border overflow-hidden">
              <div className="p-6 border-b border-border">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-heading-bold text-card-foreground">
                      Pro Empo Consults Headquarters
                    </h3>
                    <p className="text-sm text-text-secondary">
                      New York, NY • Available Worldwide
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="h-64 bg-muted relative">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Pro Empo Consults Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=40.7128,-74.0060&z=14&output=embed"
                  className="border-0"
                />
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-text-secondary mb-1">Business Hours</div>
                    <div className="font-body-semibold text-card-foreground">
                      Mon-Fri: 8AM-8PM EST
                    </div>
                  </div>
                  <div>
                    <div className="text-text-secondary mb-1">Emergency Support</div>
                    <div className="font-body-semibold text-card-foreground">
                      24/7 Available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Benefits */}
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-6 border border-accent/20">
              <h3 className="font-heading font-heading-bold text-text-primary mb-4">
                What to Expect in Your Consultation
              </h3>
              <ul className="space-y-3">
                {[
                  'Comprehensive operational assessment',
                  'Custom ROI projection for your hotel',
                  'Technology roadmap and implementation plan',
                  'Competitive analysis and market positioning',
                  'Risk-free trial period discussion'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-primary">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;