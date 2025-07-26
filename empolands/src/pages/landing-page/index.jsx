import React from 'react';
import Header from '../../components/ui/Header';
import ScrollProgressIndicator from '../../components/ui/ScrollProgressIndicator';
import FloatingCTA from '../../components/ui/FloatingCTA';
import QuickContactWidget from '../../components/ui/QuickContactWidget';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionShowcase from './components/SolutionShowcase';
import InteractiveAppDemo from './components/InteractiveAppDemo';
import ROICalculator from './components/ROICalculator';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation & Progress */}
      <Header />
      <ScrollProgressIndicator />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionShowcase />
        <InteractiveAppDemo />
        <ROICalculator />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Elements */}
      <FloatingCTA />
      <QuickContactWidget />
    </div>
  );
};

export default LandingPage;