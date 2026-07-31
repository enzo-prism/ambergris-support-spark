import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  User, 
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { featuredProjects, projectCategoryConfig } from "@/content/projects";
import {
  trackProjectListView,
  trackProjectSelect,
} from "@/lib/analytics";

const ProjectsPreview: React.FC = () => {
  useEffect(() => {
    trackProjectListView(featuredProjects, {
      listId: "home_featured_projects",
      listName: "Featured Projects",
      source: "home_featured_projects",
    });
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-belize-blue mb-3">Featured Projects</h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              Explore selected Belize Kids initiatives and project updates
            </p>
          </div>
          <Button asChild variant="belizeBlue" className="mt-4 md:mt-0">
            <Link to="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuredProjects.map((post, index) => (
            <motion.div key={post.slug} variants={item}>
              {(() => {
                const categoryConfig = projectCategoryConfig[post.category];
                const CategoryIcon = categoryConfig.icon;

                return (
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className={`h-2 w-full ${categoryConfig.color}`} />
                <CardContent className="pt-5">
                <div className="flex items-center mb-4">
                  <div className={`${categoryConfig.color} p-1.5 rounded-md mr-3`}>
                    <CategoryIcon className="h-5 w-5 text-white" />
                  </div>
                  <Badge variant="outline" className="border-gray-200 text-gray-700 capitalize">
                    {post.category}
                  </Badge>
                </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-2 gap-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-belize-blue mb-2">
                    {post.previewTitle ?? post.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    {post.previewExcerpt ?? post.excerpt}
                  </p>
                  <Link
                    to={`/projects/${post.slug}`}
                    className="text-belize-blue font-medium hover:underline inline-flex items-center"
                    onClick={() =>
                      trackProjectSelect(post, {
                        listId: "home_featured_projects",
                        listName: "Featured Projects",
                        source: "home_featured_projects",
                        index: index + 1,
                      })
                    }
                  >
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
                );
              })()}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
