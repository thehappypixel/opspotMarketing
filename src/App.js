import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import HomeScreen from "./screens/home/Home";
import MobileGuardScreen from "./screens/guard/MobileGuard";
import IncidentManagementScreen from "./screens/incidentManagement/IncidentManagement";
import SecurityReportingScreen from "./screens/securityReporting/SecurityReporting";
import SchedulingScreen from "./screens/scheduling/Scheduling";
import PricingScreen from "./screens/pricing/Pricing";
import AboutScreen from "./screens/About";
import ContactScreen from "./screens/contact/Contact";
import GuidesScreen from "./screens/resources/Guides";
import WhatToConsiderWhenAdopting from "./screens/resources/guides/WhatToConsiderWhenAdopting";
import HowToArticlesScreen from "./screens/resources/HowToArticles";
import WalkthroughsScreen from "./screens/resources/Walkthroughs";
import { trackPageView } from "./utils/analytics";

// Component to track page views on route changes
function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page view when route changes
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <PageViewTracker />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/pricing" element={<PricingScreen />} />
          <Route path="/mobile-guard" element={<MobileGuardScreen />} />
          <Route
            path="/incident-management"
            element={<IncidentManagementScreen />}
          />
          <Route
            path="/security-reporting"
            element={<SecurityReportingScreen />}
          />
          <Route path="/scheduling" element={<SchedulingScreen />} />
          <Route path="/resources/security-operations-guides" element={<GuidesScreen />} />
          <Route
            path="/resources/security-operations-guides/what-to-consider-when-adopting-security-guard-management-software"
            element={<WhatToConsiderWhenAdopting />}
          />
          <Route
            path="/resources/how-to-articles"
            element={<HowToArticlesScreen />}
          />
          <Route
            path="/resources/walkthroughs"
            element={<WalkthroughsScreen />}
          />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
