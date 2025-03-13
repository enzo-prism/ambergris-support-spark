
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsHeader from "@/components/ProjectsHeader";
import ProjectsList from "@/components/ProjectsList";
import MembershipPromo from "@/components/MembershipPromo";
import TransparencySection from "@/components/TransparencySection";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>Our Projects</title>
        <meta name="description" content="Explore our ongoing projects improving schools, parks, healthcare, and scholarships for children in Belize with complete transparency." />
        <meta property="og:title" content="Our Projects" />
        <meta property="og:description" content="Explore our ongoing projects improving schools, parks, healthcare, and scholarships for children in Belize with complete transparency." />
        <meta property="og:image" content="/lovable-uploads/57ae58c7-c275-4a3f-b33d-6f120282c94f.png" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Helmet>
      <Navbar />
      <main>
        <ProjectsHeader />
        <ProjectsList />
        <TransparencySection />
        <MembershipPromo />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
