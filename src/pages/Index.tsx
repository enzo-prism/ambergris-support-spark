
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import DonationForm from "@/components/DonationForm";
import ImpactSection from "@/components/ImpactSection";
import TransparencySection from "@/components/TransparencySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProgramsSection />
      <DonationForm />
      <ImpactSection />
      <TransparencySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
