import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import LandingPage from "pages/landing-page";
import PremiumHospitalityConsultancyLandingPage from "pages/premium-hospitality-consultancy-landing-page";
import ProEmpoConsultsPremiumHospitalityTransformationHub from "pages/pro-empo-consults-premium-hospitality-transformation-hub";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/premium-hospitality-consultancy-landing-page" element={<PremiumHospitalityConsultancyLandingPage />} />
        <Route path="/pro-empo-consults-premium-hospitality-transformation-hub" element={<ProEmpoConsultsPremiumHospitalityTransformationHub />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;