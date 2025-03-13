
import React from "react";

const ProjectsHeader: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-gradient-to-b from-belize-light to-white">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-bold text-belize-green mb-4">Our Projects</h1>
        <div className="h-1 w-24 bg-belize-yellow mb-6"></div>
        <p className="text-lg text-gray-700 max-w-3xl">
          Follow our journey as we work to improve the lives of children in Belize through investments in schools, 
          parks, healthcare, and scholarships. With complete transparency, we share the impact of your 
          contributions and the progress of our initiatives.
        </p>
      </div>
    </div>
  );
};

export default ProjectsHeader;
