
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsHeader from "@/components/ProjectsHeader";
import ProjectsList from "@/components/ProjectsList";
import MembershipPromo from "@/components/MembershipPromo";
import TransparencySection from "@/components/TransparencySection";
import { useSearchParams } from "react-router-dom";

// Import the Image component so it's available throughout the app
import "@/components/ui/image";

const Projects: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'all';

  const handleTabChange = (tab: string) => {
    setSearchParams(params => {
      params.set('tab', tab);
      return params;
    });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>Our Impact Projects - Schools, Healthcare & Education in Belize | Belize Kids</title>
        <meta name="description" content="Discover our transparent community projects in Belize: school improvements, Stanford Vision Clinic, scholarships, and park development. See exactly how donations create lasting change for children." />
        <meta property="og:title" content="Our Impact Projects - Schools, Healthcare & Education in Belize | Belize Kids" />
        <meta property="og:description" content="Discover our transparent community projects in Belize: school improvements, Stanford Vision Clinic, scholarships, and park development. See exactly how donations create lasting change for children." />
        <meta property="og:image" content="/lovable-uploads/6ef870a1-f17b-4286-b5a3-24f461ec46de.png" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Belize charity projects, school improvement Belize, children healthcare Belize, education programs, transparent charity, community development" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Helmet>
      <Navbar />
      <main>
        <ProjectsHeader />
        <ProjectsList initialTab={initialTab} onTabChange={handleTabChange} />
        <TransparencySection />
        <MembershipPromo />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
