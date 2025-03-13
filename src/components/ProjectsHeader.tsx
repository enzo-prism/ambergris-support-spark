
import React from "react";

const ProjectsHeader: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-gradient-to-b from-belize-light to-white">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-bold text-belize-blue mb-4">Our Projects</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Follow our journey as we work to improve the lives of children in Belize.
          Here you'll find updates on our latest initiatives, events, and success stories.
        </p>
      </div>
    </div>
  );
};

export default ProjectsHeader;
