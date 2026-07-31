
import React from "react";
import { Separator } from "@/components/ui/separator";

const ProjectsHeader: React.FC = () => {
  return (
    <div className="pt-16 md:pt-28 pb-8 md:pb-14 bg-white">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-belize-green mb-3">Our Projects</h1>
          <Separator className="w-24 bg-belize-blue h-1 mb-4 md:mb-6" />
          <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Follow our journey as we work to improve the lives of children in Belize through 
            investments in education, vision care, environmental learning, and marine conservation with complete transparency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHeader;
