
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsHeader from "@/components/ProjectsHeader";
import ProjectsList from "@/components/ProjectsList";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProjectsHeader />
      <ProjectsList />
      <Footer />
    </div>
  );
};

export default Projects;
