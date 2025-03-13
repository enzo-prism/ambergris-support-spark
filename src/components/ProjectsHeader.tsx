
import React from "react";
import { Separator } from "@/components/ui/separator";

const ProjectsHeader: React.FC = () => {
  return (
    <div className="pt-28 pb-14 bg-white">
      <div className="container-custom max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-belize-green mb-3">Our Projects</h1>
        <Separator className="w-24 bg-belize-blue h-1 mb-6" />
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Follow our journey as we work to improve the lives of children in Belize through 
          investments in schools, parks, healthcare, and scholarships — with complete transparency.
        </p>
      </div>
    </div>
  );
};

export default ProjectsHeader;
