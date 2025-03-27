
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    id: 2,
    title: "Belize Kids is Excited to Announce Our #DollaADive Program",
    author: "Rebecca Coutant",
    date: "November 22, 2022",
    excerpt: "If you have visited, you know that no single activity has been more important to tourism on Ambergris Caye than scuba diving. This has been true since the very beginning of tourism, the days of the Paradise and Holiday Hotels in the early 70's.",
    slug: "dollar-a-dive-program",
    category: "fundraising",
    icon: FileText,
    color: "bg-amber-500"
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
    setCurrentPage(1); // Reset to first page when changing tabs
    if (onTabChange) {
      onTabChange(value);
    }
  };

  const filteredProjects = activeTab === "all" 
    ? projectPosts 
    : projectPosts.filter(project => project.category === activeTab);

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredProjects.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredProjects.length / postsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Scroll to top of the list when page changes
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
    <div id="projects-list" className="py-10 md:py-16 bg-gray-50 px-4 md:px-6 lg:px-0">
      <div className="container-custom max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center mb-6 md:mb-10"
        >
          <Tabs 
            value={activeTab} 
            className="w-full max-w-full overflow-x-auto md:max-w-md no-scrollbar" 
            onValueChange={handleTabChange}
            defaultValue={initialTab}
          >
            <TabsList className="w-full bg-white border grid grid-cols-5">
              <TabsTrigger value="all" className="text-xs md:text-sm">All</TabsTrigger>
              <TabsTrigger value="healthcare" className="text-xs md:text-sm">Healthcare</TabsTrigger>
              <TabsTrigger value="education" className="text-xs md:text-sm">Education</TabsTrigger>
              <TabsTrigger value="environment" className="text-xs md:text-sm">Environment</TabsTrigger>
              <TabsTrigger value="fundraising" className="text-xs md:text-sm">Fundraising</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="flex gap-2 justify-end">
            <Button 
              variant="outline" 
              size="sm" 
              className={cn(
                "px-3 py-1 h-9", 
                activeView === "grid" && "bg-belize-blue text-white border-belize-blue hover:bg-belize-blue/90"
              )}
              onClick={() => setActiveView("grid")}
            >
              <Grid size={16} className="mr-1" />
              <span className="sr-only md:not-sr-only">Grid</span>
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className={cn(
                "px-3 py-1 h-9", 
                activeView === "list" && "bg-belize-blue text-white border-belize-blue hover:bg-belize-blue/90"
              )}
              onClick={() => setActiveView("list")}
            >
              <LayoutList size={16} className="mr-1" />
              <span className="sr-only md:not-sr-only">List</span>
            </Button>
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
                  <Card className="overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-gray-200 bg-white">
                    <div className="h-12 flex items-center px-4 border-b border-gray-100">
                      <div className={`${getCategoryColor(post.category)} p-1.5 rounded-md mr-3`}>
                        {getCategoryIcon(post.category)}
                      </div>
                      <span className="text-sm font-medium capitalize">{post.category}</span>
                    </div>
                    <CardContent className="pt-5 px-4 md:px-6 md:pt-6 pb-4 md:pb-6">
                      <div className="flex items-center text-xs md:text-sm text-gray-500 mb-2 md:mb-3 gap-2 md:gap-4 flex-wrap">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-belize-green mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link to={`/projects/${post.slug}`} className="text-belize-blue hover:underline inline-flex items-center text-sm md:text-base font-medium">
                        Read More <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
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
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-20 h-16 md:h-auto bg-gray-50 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
                        <div className={`${getCategoryColor(post.category)} p-2 rounded-md`}>
                          {getCategoryIcon(post.category)}
                        </div>
                      </div>
                      <div className="p-4 md:p-6">
                        <div className="flex items-center text-xs md:text-sm text-gray-500 mb-2 gap-2 md:gap-4 flex-wrap">
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full capitalize bg-gray-100">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                            <span>{post.author}</span>
                          </div>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-belize-green mb-1 md:mb-2">
                          {post.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <Link to={`/projects/${post.slug}`} className="text-belize-blue hover:underline inline-flex items-center text-sm md:text-base font-medium">
                          Read More <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                        </Link>
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
        
        {filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Pagination>
              <PaginationContent className="flex-wrap justify-center">
                <PaginationItem className="mx-1">
                  <PaginationPrevious 
                    className={cn(
                      "border border-gray-200 h-8 md:h-9 w-8 md:w-auto px-1 md:px-3 text-xs md:text-sm",
                      currentPage === 1 && "opacity-50 pointer-events-none"
                    )}
                    onClick={() => handlePageChange(currentPage - 1)}
                  />
                </PaginationItem>
                
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i} className="mx-1">
                    <PaginationLink 
                      isActive={currentPage === i + 1}
                      className={cn(
                        "h-8 md:h-9 w-8 md:w-9 text-xs md:text-sm",
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
                
                <PaginationItem className="mx-1">
                  <PaginationNext 
                    className={cn(
                      "border border-gray-200 h-8 md:h-9 w-8 md:w-auto px-1 md:px-3 text-xs md:text-sm",
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
