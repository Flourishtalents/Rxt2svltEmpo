import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'Mobile Check-in', href: '#app-demo' },
        { name: 'Guest Services', href: '#solutions' },
        { name: 'Revenue Optimization', href: '#roi-calculator' },
        { name: 'Analytics Dashboard', href: '#solutions' },
        { name: 'Staff Management', href: '#solutions' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '#success-stories' },
        { name: 'ROI Calculator', href: '#roi-calculator' },
        { name: 'Implementation Guide', href: '#contact' },
        { name: 'API Documentation', href: '#contact' },
        { name: 'Support Center', href: '#contact' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#contact' },
        { name: 'Careers', href: '#contact' },
        { name: 'Partners', href: '#contact' },
        { name: 'Press & Media', href: '#contact' },
        { name: 'Investor Relations', href: '#contact' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '#contact' },
        { name: 'Help Center', href: '#contact' },
        { name: 'System Status', href: '#contact' },
        { name: 'Security', href: '#contact' },
        { name: 'Privacy Policy', href: '#contact' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com/company/empolands' },
    { name: 'Twitter', icon: 'Twitter', href: 'https://twitter.com/empolands' },
    { name: 'Facebook', icon: 'Facebook', href: 'https://facebook.com/empolands' },
    { name: 'YouTube', icon: 'Youtube', href: 'https://youtube.com/empolands' }
  ];

  const certifications = [
    { name: 'SOC 2 Compliant', icon: 'Shield' },
    { name: 'GDPR Compliant', icon: 'Lock' },
    { name: 'ISO 27001', icon: 'Award' },
    { name: 'PCI DSS', icon: 'CreditCard' }
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      alert(`Thank you for subscribing with email: ${email}`);
      e.target.reset();
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-7 h-7 text-accent-foreground"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <span className="text-2xl font-heading font-heading-bold">
                EmpoLands
              </span>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Transforming hospitality through innovative technology solutions. 
              We help hotels increase revenue, reduce costs, and deliver exceptional guest experiences.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-heading font-heading-bold mb-3">
                Stay Updated
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors duration-250"
                  required
                />
                <Button
                  type="submit"
                  variant="default"
                  size="sm"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                  iconName="Send"
                />
              </form>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  onClick={() => handleLinkClick(social.href)}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-250"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-heading font-heading-bold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-250 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges & Certifications */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h4 className="font-heading font-heading-bold mb-4">
                Security & Compliance
              </h4>
              <div className="flex flex-wrap gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center px-3 py-2 bg-primary-foreground/10 rounded-lg"
                  >
                    <Icon name={cert.icon} size={16} className="text-accent mr-2" />
                    <span className="text-sm text-primary-foreground/80">
                      {cert.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="text-2xl font-heading font-heading-bold text-accent mb-1">
                247+
              </div>
              <div className="text-sm text-primary-foreground/80">
                Hotels Transformed
              </div>
              <div className="text-xs text-primary-foreground/60 mt-1">
                Trusted worldwide
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-primary-foreground/80">
              <div>
                © {currentYear} Pro Empo Consults. All rights reserved.
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleLinkClick('#contact')}
                  className="hover:text-accent transition-colors duration-250"
                >
                  Terms of Service
                </button>
                <span className="text-primary-foreground/40">•</span>
                <button
                  onClick={() => handleLinkClick('#contact')}
                  className="hover:text-accent transition-colors duration-250"
                >
                  Privacy Policy
                </button>
                <span className="text-primary-foreground/40">•</span>
                <button
                  onClick={() => handleLinkClick('#contact')}
                  className="hover:text-accent transition-colors duration-250"
                >
                  Cookie Policy
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-primary-foreground/80">
              <div className="flex items-center">
                <Icon name="Globe" size={16} className="mr-2" />
                <span>Available Worldwide</span>
              </div>
              <span className="text-primary-foreground/40">•</span>
              <div className="flex items-center">
                <Icon name="Phone" size={16} className="mr-2" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Strip */}
      <div className="bg-accent text-accent-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center text-sm font-body-medium">
            <Icon name="AlertCircle" size={16} className="mr-2" />
            <span>
              Need immediate assistance? Call our 24/7 hotline: 
              <button
                onClick={() => window.open('tel:+18003676526', '_self')}
                className="ml-2 font-body-bold hover:underline"
              >
                +1 (800) EMPOLANDS
              </button>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;