import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui/reveal";
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

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <Reveal className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <span className="section-eyebrow mb-3">Featured Work</span>
            <h2 className="mb-2 text-3xl font-bold text-belize-blue md:text-4xl">Featured Projects</h2>
            <p className="max-w-2xl text-lg text-gray-700">
              Explore selected Belize Kids initiatives and project updates
            </p>
          </div>
          <Button asChild variant="belizeBlue" className="shrink-0">
            <Link to="/projects">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredProjects.map((post, index) => {
            const categoryConfig = projectCategoryConfig[post.category];
            const CategoryIcon = categoryConfig.icon;

            return (
              <Reveal key={post.slug} delay={index * 120} className="h-full">
                <Card className="card-hover h-full overflow-hidden border-none shadow-soft">
                  <div className={`h-2 w-full ${categoryConfig.color}`} />
                  <CardContent className="pt-5">
                    <div className="mb-4 flex items-center">
                      <div className={`${categoryConfig.color} mr-3 rounded-lg p-1.5`}>
                        <CategoryIcon className="h-5 w-5 text-white" />
                      </div>
                      <Badge variant="outline" className="border-gray-200 capitalize text-gray-700">
                        {post.category}
                      </Badge>
                    </div>

                    <div className="mb-2 flex items-center gap-3 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-belize-blue">
                      {post.previewTitle ?? post.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-700">
                      {post.previewExcerpt ?? post.excerpt}
                    </p>
                    <Link
                      to={`/projects/${post.slug}`}
                      className="inline-flex items-center font-medium text-belize-blue hover:underline"
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
