import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      position: "General Manager",
      company: "Grand Plaza Hotel",
      location: "New York, NY",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: `Pro Empo transformed our operations completely. We saw a 42% increase in revenue within the first quarter and our guest satisfaction scores jumped from 3.2 to 4.8 stars. The mobile check-in alone reduced our front desk workload by 60%.`,
      metrics: {
        revenue: "+42%",
        satisfaction: "4.8/5",
        efficiency: "+60%"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      verified: true
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "Operations Director",
      company: "Oceanview Resort & Spa",
      location: "Miami, FL",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: `The ROI was incredible. We recovered our investment in just 4 months and have saved over $180K annually in operational costs. The AI-powered guest services have revolutionized how we interact with our guests.`,
      metrics: {
        roi: "4 months",
        savings: "$180K",
        automation: "85%"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      verified: true
    },
    {
      id: 3,
      name: "Jennifer Chen",
      position: "Hotel Owner",
      company: "Boutique Suites Collection",
      location: "San Francisco, CA",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: `As a boutique hotel owner, I was skeptical about digital transformation. Pro Empo's personalized approach and ongoing support made all the difference. Our occupancy rate increased by 28% and we're now competing with major chains.`,
      metrics: {
        occupancy: "+28%",
        competition: "Major chains",
        support: "24/7"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
      verified: true
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Regional Manager",
      company: "Heritage Hotels Group",
      location: "Chicago, IL",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: `We implemented Pro Empo across 12 properties. The consistency and scalability of their solution is remarkable. Staff productivity increased by 35% and we've reduced guest complaints by 78%. Best investment we've made.`,
      metrics: {
        properties: "12",
        productivity: "+35%",
        complaints: "-78%"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      verified: true
    }
  ];

  const successStats = [
    { label: "Hotels Transformed", value: "247+", icon: "Building" },
    { label: "Average Revenue Increase", value: "35%", icon: "TrendingUp" },
    { label: "Guest Satisfaction Improvement", value: "1.6 stars", icon: "Star" },
    { label: "Operational Cost Reduction", value: "28%", icon: "DollarSign" }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handleTestimonialChange = (index) => {
    setActiveTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section id="success-stories" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-heading-bold text-text-primary mb-6">
            Real Results from{' '}
            <span className="text-success">Real Hotels</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See how leading hotels have transformed their operations and achieved remarkable ROI with Pro Empo's solutions
          </p>
        </div>

        {/* Success Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {successStats.map((stat, index) => (
            <div key={index} className="bg-card rounded-xl shadow-testimonial p-6 border border-border text-center">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon} size={24} className="text-success" />
              </div>
              <div className="text-2xl lg:text-3xl font-heading font-heading-bold text-success mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Testimonial Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Testimonial Content */}
          <div className="bg-card rounded-2xl shadow-testimonial p-8 border border-border">
            <div className="flex items-center mb-6">
              <div className="relative">
                <Image
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                {currentTestimonial.verified && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Check" size={12} className="text-success-foreground" />
                  </div>
                )}
              </div>
              <div className="ml-4">
                <h3 className="font-heading font-heading-bold text-card-foreground">
                  {currentTestimonial.name}
                </h3>
                <p className="text-sm text-text-secondary">
                  {currentTestimonial.position}
                </p>
                <p className="text-sm text-accent font-body-medium">
                  {currentTestimonial.company}
                </p>
              </div>
              <div className="ml-auto">
                <div className="flex items-center">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                  ))}
                </div>
                <div className="text-xs text-text-secondary mt-1">
                  {currentTestimonial.location}
                </div>
              </div>
            </div>

            <blockquote className="text-lg text-card-foreground leading-relaxed mb-6">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              {Object.entries(currentTestimonial.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-xl font-heading font-heading-bold text-success mb-1">
                    {value}
                  </div>
                  <div className="text-xs text-text-secondary capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Testimonial */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-testimonial overflow-hidden border border-border">
              <div className="relative">
                <Image
                  src={currentTestimonial.videoThumbnail}
                  alt={`${currentTestimonial.name} video testimonial`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="w-16 h-16 bg-accent rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors duration-250 group">
                    <Icon name="Play" size={24} className="text-accent-foreground ml-1 group-hover:scale-110 transition-transform duration-250" />
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="flex items-center text-sm">
                    <Icon name="Video" size={14} className="text-accent mr-1" />
                    <span className="text-card-foreground font-body-medium">2:34</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-heading font-heading-bold text-card-foreground mb-2">
                  Watch {currentTestimonial.name}'s Story
                </h4>
                <p className="text-sm text-text-secondary">
                  Learn how {currentTestimonial.company} achieved remarkable results with Pro Empo's digital transformation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => handleTestimonialChange(index)}
              className={`flex items-center p-4 rounded-lg border transition-all duration-250 ${
                activeTestimonial === index
                  ? 'bg-accent text-accent-foreground border-accent'
                  : 'bg-card text-card-foreground border-border hover:border-accent/50'
              }`}
            >
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div className="text-left">
                <div className={`text-sm font-body-semibold ${
                  activeTestimonial === index ? 'text-accent-foreground' : 'text-card-foreground'
                }`}>
                  {testimonial.name}
                </div>
                <div className={`text-xs ${
                  activeTestimonial === index ? 'text-accent-foreground/80' : 'text-text-secondary'
                }`}>
                  {testimonial.company}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Client Logos */}
        <div className="bg-card rounded-2xl shadow-testimonial p-8 border border-border">
          <h3 className="text-center text-lg font-heading font-heading-bold text-card-foreground mb-8">
            Trusted by Leading Hotels Worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              "Grand Plaza Hotel",
              "Oceanview Resort",
              "Boutique Suites",
              "Heritage Hotels",
              "Metropolitan Inn",
              "Luxury Resorts"
            ].map((hotel, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Icon name="Building" size={24} className="text-text-secondary" />
                </div>
                <div className="text-xs text-text-secondary font-body-medium">
                  {hotel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;