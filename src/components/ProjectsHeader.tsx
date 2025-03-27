
import React from "react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const ProjectsHeader: React.FC = () => {
  return (
    <div className="pt-16 md:pt-28 pb-8 md:pb-14 bg-white">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-belize-green mb-3">Our Projects</h1>
          <Separator className="w-24 bg-belize-blue h-1 mb-4 md:mb-6" />
          <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Follow our journey as we work to improve the lives of children in Belize through 
            investments in schools, parks, healthcare, and scholarships — with complete transparency.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsHeader;
