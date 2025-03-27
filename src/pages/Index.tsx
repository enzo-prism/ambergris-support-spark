
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
import MembershipPromo from "@/components/MembershipPromo";
import MembershipBenefits from "@/components/MembershipBenefits";
import MembershipTestimonials from "@/components/MembershipTestimonials";
import ClassroomDrive from "@/components/ClassroomDrive";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden overflow-fix">
      <Helmet>
        <title>Belize Kids</title>
        <meta name="description" content="We invest in schools, parks, healthcare, and scholarships to improve the lives of Belizean children with complete transparency." />
        <meta property="og:title" content="Belize Kids" />
        <meta property="og:description" content="We invest in schools, parks, healthcare, and scholarships to improve the lives of Belizean children with complete transparency." />
        <meta property="og:image" content="/lovable-uploads/6ef870a1-f17b-4286-b5a3-24f461ec46de.png" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#3CB371" />
      </Helmet>
      <Navbar />
      <main className="relative">
        <Hero />
        <AboutSection />
        <ProgramsSection />
        <ClassroomDrive />
        <ProjectsPreview />
        <ImpactSection />
        <MembershipPromo />
        <DonationForm />
        <MembershipBenefits />
        <MembershipTestimonials />
        <TransparencySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
