
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import ProjectsPreview from "@/components/ProjectsPreview";
import DonationForm from "@/components/DonationForm";
import ImpactSection from "@/components/ImpactSection";
import TransparencySection from "@/components/TransparencySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>BelizeKids.org - Improving the Lives of Children in Belize</title>
        <meta name="description" content="We invest in schools, parks, healthcare, and scholarships to improve the lives of Belizean children with complete transparency." />
        <meta property="og:title" content="BelizeKids.org - Improving the Lives of Children in Belize" />
        <meta property="og:description" content="We invest in schools, parks, healthcare, and scholarships to improve the lives of Belizean children with complete transparency." />
        <meta property="og:image" content="/lovable-uploads/6ef870a1-f17b-4286-b5a3-24f461ec46de.png" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <Hero />
      <AboutSection />
      <ProgramsSection />
      <ProjectsPreview />
      <DonationForm />
      <ImpactSection />
      <TransparencySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
