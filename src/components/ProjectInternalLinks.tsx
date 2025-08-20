import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Project {
  slug: string;
  title: string;
  category: string;
  date: string;
}

interface ProjectInternalLinksProps {
  currentProject: Project;
  allProjects: Project[];
}

const ProjectInternalLinks: React.FC<ProjectInternalLinksProps> = ({ currentProject, allProjects }) => {
  const relatedProjects = allProjects
    .filter(p => p.slug !== currentProject.slug && p.category === currentProject.category)
    .slice(0, 3);

  const otherProjects = allProjects
    .filter(p => p.slug !== currentProject.slug && p.category !== currentProject.category)
    .slice(0, 2);

  return (
    <section className="mt-8 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-belize-green">Related Projects</h3>
      
      {relatedProjects.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 text-gray-800 capitalize">More {currentProject.category} Projects</h4>
          <div className="space-y-2">
            {relatedProjects.map((project, index) => (
              <Link 
                key={index}
                to={`/projects/${project.slug}`}
                className="flex items-center justify-between p-3 bg-white rounded-md hover:bg-belize-light transition-colors"
              >
                <div>
                  <h5 className="text-sm font-medium text-belize-green line-clamp-2">{project.title}</h5>
                  <span className="text-xs text-gray-500">{project.date}</span>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {otherProjects.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-800">Other Projects</h4>
          <div className="space-y-2">
            {otherProjects.map((project, index) => (
              <Link 
                key={index}
                to={`/projects/${project.slug}`}
                className="flex items-center justify-between p-3 bg-white rounded-md hover:bg-belize-light transition-colors"
              >
                <div>
                  <h5 className="text-sm font-medium text-belize-green line-clamp-2">{project.title}</h5>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="capitalize">{project.category}</span>
                    <span>•</span>
                    <span>{project.date}</span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-belize-blue hover:text-belize-coral font-medium"
        >
          View All Projects <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default ProjectInternalLinks;