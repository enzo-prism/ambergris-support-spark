
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsHeader from "@/components/ProjectsHeader";
import ProjectsList from "@/components/ProjectsList";
import MembershipPromo from "@/components/MembershipPromo";
import TransparencySection from "@/components/TransparencySection";
import { useSearchParams } from "react-router-dom";

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
        <title>Our Projects | BelizeKids.org</title>
        <meta name="description" content="Explore our ongoing projects improving schools, parks, healthcare, and scholarships for children in Belize with complete transparency." />
        <meta property="og:title" content="Our Projects | BelizeKids.org" />
        <meta property="og:description" content="Explore our ongoing projects improving schools, parks, healthcare, and scholarships for children in Belize with complete transparency." />
        <meta property="og:type" content="website" />
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
