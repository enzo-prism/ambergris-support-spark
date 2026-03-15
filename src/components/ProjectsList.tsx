import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  User, 
  ArrowRight,
  Grid,
  LayoutList
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  projectCategories,
  projectCategoryConfig,
  projects as projectPosts,
} from "@/content/projects";

interface ProjectsListProps {
  initialTab?: string;
  onTabChange?: (tab: string) => void;
}

const supportedTabs = ["all", ...projectCategories];

const ProjectsList: React.FC<ProjectsListProps> = ({ 
  initialTab = "all", 
  onTabChange 
}) => {
  const [activeView, setActiveView] = useState<"grid" | "list">("grid");
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 6;
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (isMobile) {
      setActiveView("list");
    }
  }, [isMobile]);

  useEffect(() => {
    if (initialTab && supportedTabs.includes(initialTab as (typeof supportedTabs)[number])) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setCurrentPage(1);
    if (onTabChange) {
      onTabChange(value);
    }
  };

  const filteredProjects = activeTab === "all" 
    ? projectPosts 
    : projectPosts.filter(project => project.category === activeTab);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredProjects.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredProjects.length / postsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: document.getElementById('projects-list')?.offsetTop || 0, behavior: 'smooth' });
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div id="projects-list" className="py-8 md:py-16 bg-gray-50">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8"
        >
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-3 text-gray-800">Filter Projects</h2>
            <div className="overflow-x-auto -mx-4 px-4 scrollbar-hide pb-2">
              <Tabs 
                value={activeTab} 
                onValueChange={handleTabChange}
                defaultValue={initialTab}
              >
                <TabsList className="w-auto inline-flex h-12 p-1 bg-white border rounded-md">
                  <TabsTrigger 
                    value="all" 
                    className="px-4 py-2 text-sm font-medium min-w-[80px] data-[state=active]:bg-belize-blue data-[state=active]:text-white rounded-sm"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger 
                    value="healthcare" 
                    className="px-4 py-2 text-sm font-medium min-w-[100px] data-[state=active]:bg-belize-blue data-[state=active]:text-white rounded-sm"
                  >
                    Healthcare
                  </TabsTrigger>
                  <TabsTrigger 
                    value="education" 
                    className="px-4 py-2 text-sm font-medium min-w-[100px] data-[state=active]:bg-belize-blue data-[state=active]:text-white rounded-sm"
                  >
                    Education
                  </TabsTrigger>
                  <TabsTrigger 
                    value="environment" 
                    className="px-4 py-2 text-sm font-medium min-w-[110px] data-[state=active]:bg-belize-blue data-[state=active]:text-white rounded-sm"
                  >
                    Environment
                  </TabsTrigger>
                  <TabsTrigger 
                    value="fundraising" 
                    className="px-4 py-2 text-sm font-medium min-w-[100px] data-[state=active]:bg-belize-blue data-[state=active]:text-white rounded-sm"
                  >
                    Fundraising
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-600">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found
            </p>
            <ToggleGroup
              type="single"
              size="sm"
              variant="outline"
              value={activeView}
              onValueChange={(value) => {
                if (value) setActiveView(value as "grid" | "list");
              }}
              className="gap-2"
            >
              <ToggleGroupItem
                value="grid"
                aria-label="Grid view"
                className="data-[state=on]:bg-belize-blue data-[state=on]:text-white data-[state=on]:border-belize-blue"
              >
                <Grid size={16} className="mr-1" />
                <span className="sr-only md:not-sr-only">Grid</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="list"
                aria-label="List view"
                className="data-[state=on]:bg-belize-blue data-[state=on]:text-white data-[state=on]:border-belize-blue"
              >
                <LayoutList size={16} className="mr-1" />
                <span className="sr-only md:not-sr-only">List</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </motion.div>
        
        {activeView === "grid" ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            key={`grid-${activeTab}-${currentPage}`}
          >
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <motion.div key={post.slug} variants={item}>
                  {(() => {
                    const categoryConfig = projectCategoryConfig[post.category];
                    const CategoryIcon = categoryConfig.icon;

                    return (
                  <Card className="overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-gray-200 bg-white h-full">
                    <div className="h-12 flex items-center px-4 border-b border-gray-100">
                      <div className={`${categoryConfig.color} p-1.5 rounded-md mr-3`}>
                        <CategoryIcon className="h-5 w-5 text-white" />
                      </div>
                      <Badge variant="outline" className="border-gray-200 text-gray-700 capitalize">
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="pt-5 px-4 md:px-6 md:pt-6 pb-4 md:pb-6">
                      <div className="flex items-center text-xs md:text-sm text-gray-500 mb-3 gap-3 flex-wrap">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-3.5 w-3.5 flex-shrink-0" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-belize-green mb-2 line-clamp-2">
                        {post.previewTitle ?? post.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link to={`/projects/${post.slug}`} className="text-belize-blue hover:underline inline-flex items-center text-sm font-medium mt-auto">
                        Read More <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </CardContent>
                  </Card>
                    );
                  })()}
                </motion.div>
              ))
            ) : (
              <div className="col-span-2 py-8 text-center">
                <p className="text-gray-500">No projects found for this category.</p>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div 
            className="flex flex-col gap-4 mb-8 md:mb-12"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            key={`list-${activeTab}-${currentPage}`}
          >
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <motion.div key={post.slug} variants={item}>
                  {(() => {
                    const categoryConfig = projectCategoryConfig[post.category];
                    const CategoryIcon = categoryConfig.icon;

                    return (
                  <Card className="overflow-hidden border border-gray-100 transition-all hover:shadow-md hover:border-gray-200 bg-white">
                    <div className="flex flex-row">
                      <div className="w-16 h-auto flex items-center justify-center p-3 bg-gray-50 border-r border-gray-100">
                        <div className={`${categoryConfig.color} p-2 rounded-md`}>
                          <CategoryIcon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="p-4 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge variant="outline" className="border-gray-200 text-gray-700 capitalize text-xs">
                            {post.category}
                          </Badge>
                          <span className="text-xs text-gray-500 flex items-center">
                            <Calendar className="h-3 w-3 mr-1 flex-shrink-0" />
                            {post.date}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-belize-green mb-1.5">
                          {post.previewTitle ?? post.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 flex items-center">
                            <User className="h-3 w-3 mr-1 flex-shrink-0" />
                            {post.author}
                          </span>
                          <Link to={`/projects/${post.slug}`} className="text-belize-blue hover:underline inline-flex items-center text-sm font-medium">
                            Read More <ArrowRight className="ml-1 h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                    );
                  })()}
                </motion.div>
              ))
            ) : (
              <div className="py-8 text-center">
                <p className="text-gray-500">No projects found for this category.</p>
              </div>
            )}
          </motion.div>
        )}
        
        {filteredProjects.length > 0 && totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mt-6"
          >
            <Pagination>
              <PaginationContent className="flex-wrap justify-center gap-1">
                <PaginationItem>
                  <PaginationPrevious 
                    className={cn(
                      "border border-gray-200 h-10 w-auto px-3 text-sm",
                      currentPage === 1 && "opacity-50 pointer-events-none"
                    )}
                    onClick={() => handlePageChange(currentPage - 1)}
                  />
                </PaginationItem>
                
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink 
                      isActive={currentPage === i + 1}
                      className={cn(
                        "h-10 w-10 text-sm touch-target",
                        currentPage === i + 1 
                          ? "bg-belize-blue text-white border-belize-blue" 
                          : "border border-gray-200"
                      )}
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    className={cn(
                      "border border-gray-200 h-10 w-auto px-3 text-sm",
                      currentPage === totalPages && "opacity-50 pointer-events-none"
                    )}
                    onClick={() => handlePageChange(currentPage + 1)}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsList;
