import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  User, 
  ArrowRight,
  Grid,
  LayoutList,
  FileText,
  BookOpen,
  Heart,
  Leaf
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const projectPosts = [
  {
    id: 1,
    title: "October Vision Clinic is a Huge Success",
    author: "Rebecca Coutant",
    date: "October 30, 2017",
    excerpt: "BelizeKids.org, in conjunction with BCVI (the Belize Council for the Visually Impaired) and the San Pedro Lions Den, just completed another very successful free clinic for San Pedro. Kids and adults came for examinations with doctors from Stanford Medicine in the brand new office installed and operated by BelizeKids.",
    slug: "october-vision-clinic",
    category: "healthcare",
    icon: Heart,
    color: "bg-rose-500"
  },
  {
    id: 3,
    title: "Belize Kids Donates a Second Vision Screening Machine To San Pedro's Lions Club",
    author: "Rebecca Coutant",
    date: "August 27, 2022",
    excerpt: "Belize Kids.org was so proud to donate a 2nd Vision Screening Device to San Pedro's Lions Club last week. The organization donated the first Plus Optix machine in July of this year.",
    slug: "second-vision-screening-machine",
    category: "healthcare",
    icon: Heart,
    color: "bg-rose-500"
  },
  {
    id: 4,
    title: "Belize Kids and Finn & Martini Sponsor Week Four of Camp Basil Jones",
    author: "Rebecca Coutant",
    date: "August 7, 2022",
    excerpt: "Summer camp on North Ambergris Caye's Camp Basil Jones has officially come to an end. Four successful weeks with the final week sponsored by the joint fundraising effort between Belize Kids.Org and Finn & Martini Lounge and Restaurant.",
    slug: "camp-basil-jones",
    category: "education",
    icon: BookOpen,
    color: "bg-blue-500"
  },
  {
    id: 5,
    title: "Belize Kids Donates Eye Screening Equipment to the Lions' Den in San Pedro",
    author: "Rebecca Coutant",
    date: "July 20, 2022",
    excerpt: "Just last week Belize Kids.org answered the request of Melanie Paz and Jan Brown of the Lions' Den in San Pedro. They have been working since November 2021 to screen and diagnose eye-sight issues for the children on the island.",
    slug: "eye-screening-equipment",
    category: "healthcare",
    icon: Heart,
    color: "bg-rose-500"
  },
  {
    id: 6,
    title: "Belize Kids and Finn & Martini Raise Money for Ambergris Caye's Camp Basil Jones",
    author: "Rebecca Coutant",
    date: "July 9, 2022",
    excerpt: "Each year, Mito Paz seeks grants and raises money to make Camp Basil Jones happen. It is a 4 week summer camp where kids from around Belize come to learn about our ocean, our reef and how important it is to us in Belize and to the world.",
    slug: "fundraising-camp-basil-jones",
    category: "education",
    icon: BookOpen,
    color: "bg-blue-500"
  },
  {
    id: 7,
    title: "Working with SPRC Primary, San Pedro, Belize's Largest Public School",
    author: "Rebecca Coutant",
    date: "June 14, 2022",
    excerpt: "San Pedro Roman Catholic Primary School is the largest on the island with over 700 kids ranging from Kindergarten to Standard 6 (or the US equivalent of 8th grade). To say that the school is 'bursting at the seams' is an understatement.",
    slug: "sprc-primary-school",
    category: "education",
    icon: BookOpen,
    color: "bg-blue-500"
  },
  {
    id: 8,
    title: "Canary Cove Donates Equipment to San Pedro Tour Guide Association & Hol Chan Marine Reserve",
    author: "Rebecca Coutant",
    date: "October 1, 2021",
    excerpt: "In October of 2021, after the expansion of the Hol Chan Marine Reserve, Canary Cove donated 20 mooring buoys to the San Pedro Tour Guide Association. The buoys were donated and presented to Hol Chan for use at Mexico Rocks snorkel and dive site.",
    slug: "equipment-donation-hol-chan",
    category: "environment",
    icon: Leaf,
    color: "bg-green-500"
  },
];

interface ProjectsListProps {
  initialTab?: string;
  onTabChange?: (tab: string) => void;
}

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
    if (initialTab && ['healthcare', 'education', 'environment', 'fundraising', 'all'].includes(initialTab)) {
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

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "healthcare":
        return <Heart className="h-5 w-5 text-white" />;
      case "education":
        return <BookOpen className="h-5 w-5 text-white" />;
      case "environment":
        return <Leaf className="h-5 w-5 text-white" />;
      case "fundraising":
        return <FileText className="h-5 w-5 text-white" />;
      default:
        return <FileText className="h-5 w-5 text-white" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "healthcare":
        return "bg-rose-500";
      case "education":
        return "bg-blue-500";
      case "environment":
        return "bg-green-500";
      case "fundraising":
        return "bg-amber-500";
      default:
        return "bg-gray-500";
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
                <motion.div key={post.id} variants={item}>
                  <Card className="overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-gray-200 bg-white h-full">
                    <div className="h-12 flex items-center px-4 border-b border-gray-100">
                      <div className={`${getCategoryColor(post.category)} p-1.5 rounded-md mr-3`}>
                        {getCategoryIcon(post.category)}
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
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link to={`/projects/${post.slug}`} className="text-belize-blue hover:underline inline-flex items-center text-sm font-medium mt-auto">
                        Read More <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </CardContent>
                  </Card>
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
                <motion.div key={post.id} variants={item}>
                  <Card className="overflow-hidden border border-gray-100 transition-all hover:shadow-md hover:border-gray-200 bg-white">
                    <div className="flex flex-row">
                      <div className="w-16 h-auto flex items-center justify-center p-3 bg-gray-50 border-r border-gray-100">
                        <div className={`${getCategoryColor(post.category)} p-2 rounded-md`}>
                          {getCategoryIcon(post.category)}
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
                          {post.title}
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
