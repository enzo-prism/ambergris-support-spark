
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import RouteAnalytics from "./components/RouteAnalytics";
import ScrollDepthAnalytics from "./components/ScrollDepthAnalytics";
import SectionViewAnalytics from "./components/SectionViewAnalytics";

import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Leadership from "./pages/Leadership";
import DoctorsAvailability from "./pages/DoctorsAvailability";
import Membership from "./pages/Membership";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <RouteAnalytics />
      <ScrollDepthAnalytics />
      <SectionViewAnalytics />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/doctors" element={<DoctorsAvailability />} />
        <Route
          path="/membership"
          element={<Navigate replace to="/monthly-investment" />}
        />
        <Route path="/monthly-investment" element={<Membership />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  );
};

export default App;
