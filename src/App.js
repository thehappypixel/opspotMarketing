import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/home/Home";
import MobileGuardScreen from "./screens/guard/MobileGuard";
import IncidentManagementScreen from "./screens/incidentManagement/IncidentManagement";
import SecurityReportingScreen from "./screens/securityReporting/SecurityReporting";
import PricingScreen from "./screens/pricing/Pricing";
import AboutScreen from "./screens/About";
import ContactScreen from "./screens/contact/Contact";

function App() {
  return (
    <Router>
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
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
