
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsHeader from "@/components/ProjectsHeader";
import ProjectsList from "@/components/ProjectsList";
import MembershipPromo from "@/components/MembershipPromo";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Our Projects - BelizeKids.org</title>
        <meta name="description" content="Explore our ongoing projects improving schools, parks, healthcare, and scholarships for children in Belize with complete transparency." />
        <meta property="og:title" content="Our Projects - BelizeKids.org" />
        <meta property="og:description" content="Explore our ongoing projects improving schools, parks, healthcare, and scholarships for children in Belize with complete transparency." />
        <meta property="og:image" content="/lovable-uploads/57ae58c7-c275-4a3f-b33d-6f120282c94f.png" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <ProjectsHeader />
      <ProjectsList />
      <MembershipPromo />
      <Footer />
    </div>
  );
};

export default Projects;
