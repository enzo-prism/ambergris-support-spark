
import React from "react";
import { Helmet } from "react-helmet-async";
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
import ClassroomDrive from "@/components/ClassroomDrive";
import { buildSiteUrl, SITE_OG_IMAGE_URL } from "@/lib/site";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden overflow-fix">
      <Helmet>
        <title>Belize Kids - Transparent Charity Supporting Children's Education & Healthcare in Belize</title>
        <meta name="description" content="BelizeKids.org invests in schools, parks, healthcare, and scholarships to improve the lives of Belizean children with complete transparency. Join our mission to create lasting change through education and community development." />
        <meta property="og:title" content="Belize Kids - Transparent Charity Supporting Children's Education & Healthcare in Belize" />
        <meta property="og:description" content="BelizeKids.org invests in schools, parks, healthcare, and scholarships to improve the lives of Belizean children with complete transparency. Join our mission to create lasting change through education and community development." />
        <meta property="og:image" content={SITE_OG_IMAGE_URL} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#16784C" />
        <meta name="keywords" content="Belize children charity, education support Belize, healthcare programs, transparent nonprofit, child welfare, community development, scholarships, school improvement" />
        <link rel="canonical" href={buildSiteUrl("/")} />
      </Helmet>
      <Navbar />
      <main className="relative">
        <Hero />
        <AboutSection />
        <ProgramsSection />
        <ClassroomDrive />
        <ProjectsPreview />
        <ImpactSection />
        <DonationForm />
        <TransparencySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
