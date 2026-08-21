import React from "react";

const ProjectsHeader: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-belize-light via-white to-white pb-10 pt-28 md:pb-14 md:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-grid-belize opacity-60" aria-hidden="true" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <span className="section-eyebrow mb-4">Our Work</span>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
          <span className="text-gradient-belize">Our Projects</span>
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
          Follow our journey as we work to improve the lives of children in Belize through
          investments in education, vision care, environmental learning, and marine conservation with complete transparency.
        </p>
      </div>
    </div>
  );
};

export default ProjectsHeader;
