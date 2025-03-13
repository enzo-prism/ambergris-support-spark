import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  User, 
  ArrowRight,
  Grid,
  LayoutList
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const projectPosts = [
  {
    id: 1,
    title: "October Vision Clinic is a Huge Success",
    author: "Rebecca Coutant",
    date: "October 30, 2023",
    excerpt: "Belize Kids.org, in conjunction with BCVI (the Belize Council for the Visually Impaired) and the San Pedro Lions Den, just completed another very successful free clinic for San Pedro. Kids and adults came for examinations with doctors from Stanford Medicine in the brand new office installed and operated by Belize Kids.",
    imageSrc: "/lovable-uploads/20afad96-a69a-4127-822c-f95dc36b74e3.png",
    slug: "october-vision-clinic",
    category: "healthcare",
  },
  {
    id: 2,
    title: "Belize Kids is Excited to Announce Our #DollaADive Program",
    author: "Rebecca Coutant",
    date: "November 22, 2022",
    excerpt: "If you have visited, you know that no single activity has been more important to tourism on Ambergris Caye than scuba diving. This has been true since the very beginning of tourism, the days of the Paradise and Holiday Hotels in the early 70's.",
    imageSrc: "/lovable-uploads/ca21c85a-e8be-48b2-8f9d-89e3983435ca.png",
    slug: "dollar-a-dive-program",
    category: "fundraising",
  },
  {
    id: 3,
    title: "Belize Kids Donates a Second Vision Screening Machine To San Pedro's Lions Club",
    author: "Rebecca Coutant",
    date: "August 27, 2022",
    excerpt: "Belize Kids.org was so proud to donate a 2nd Vision Screening Device to San Pedro's Lions Club last week. The organization donated the first Plus Optix machine in July of this year.",
    imageSrc: "/lovable-uploads/f755368c-b8ff-40b1-aca5-54aa6838d570.png",
    slug: "second-vision-screening-machine",
    category: "healthcare",
  },
  {
    id: 4,
    title: "Belize Kids and Finn & Martini Sponsor Week Four of Camp Basil Jones",
    author: "Rebecca Coutant",
    date: "August 7, 2022",
    excerpt: "Summer camp on North Ambergris Caye's Camp Basil Jones has officially come to an end. Four successful weeks with the final week sponsored by the joint fundraising effort between Belize Kids.Org and Finn & Martini Lounge and Restaurant.",
    imageSrc: "/lovable-uploads/d0cf5c69-dc26-4c5e-9ebe-18ea1a2d19d5.png",
    slug: "camp-basil-jones",
    category: "education",
  },
  {
    id: 5,
    title: "Belize Kids Donates Eye Screening Equipment to the Lions' Den in San Pedro",
    author: "Rebecca Coutant",
    date: "July 20, 2022",
    excerpt: "Just last week Belize Kids.org answered the request of Melanie Paz and Jan Brown of the Lions' Den in San Pedro. They have been working since November 2021 to screen and diagnose eye-sight issues for the children on the island.",
    imageSrc: "/lovable-uploads/ef657229-fafe-4b76-83f7-88bce76133af.png",
    slug: "eye-screening-equipment",
    category: "healthcare",
  },
  {
    id: 6,
    title: "Belize Kids and Finn & Martini Raise Money for Ambergris Caye's Camp Basil Jones",
    author: "Rebecca Coutant",
    date: "July 9, 2022",
    excerpt: "Each year, Mito Paz seeks grants and raises money to make Camp Basil Jones happen. It is a 4 week summer camp where kids from around Belize come to learn about our ocean, our reef and how important it is to us in Belize and to the world.",
    imageSrc: "/lovable-uploads/66bc1aad-e548-47ce-b19f-13f78397aa0c.png",
    slug: "fundraising-camp-basil-jones",
    category: "education",
  },
  {
    id: 7,
    title: "Working with SPRC Primary, San Pedro, Belize's Largest Public School",
    author: "Rebecca Coutant",
    date: "June 14, 2022",
    excerpt: "San Pedro Roman Catholic Primary School is the largest on the island with over 700 kids ranging from Kindergarten to Standard 6 (or the US equivalent of 8th grade). To say that the school is 'bursting at the seams' is an understatement.",
    imageSrc: "/lovable-uploads/5c98d9b7-c36a-4f65-a62f-e9a9f52e87f0.png",
    slug: "sprc-primary-school",
    category: "education",
  },
  {
    id: 8,
    title: "Canary Cove Donates Equipment to San Pedro Tour Guide Association & Hol Chan Marine Reserve",
    author: "Rebecca Coutant",
    date: "October 1, 2021",
    excerpt: "In October of 2021, after the expansion of the Hol Chan Marine Reserve, Canary Cove donated 20 mooring buoys to the San Pedro Tour Guide Association. The buoys were donated and presented to Hol Chan for use at Mexico Rocks snorkel and dive site.",
    imageSrc: "/lovable-uploads/378a9d5e-a28f-46e3-b7b3-548b5d1bc855.png",
    slug: "equipment-donation-hol-chan",
    category: "environment",
  },
];

const ProjectsList: React.FC = () => {
  const location = useLocation();
  const [activeView, setActiveView] = useState<"grid" | "list">("grid");
  const [activeTab, setActiveTab] = useState<string>("all");
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get('tab');
    if (tabParam && ['healthcare', 'education', 'environment', 'fundraising', 'all'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [location.search]);

  const filteredProjects = activeTab === "all" 
    ? projectPosts 
    : projectPosts.filter(project => project.category === activeTab);

  return (
    <div className="py-16 bg-gray-50">
      <div className="container-custom max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <Tabs 
            value={activeTab} 
            className="w-full max-w-md" 
            onValueChange={(value) => setActiveTab(value)}
          >
            <TabsList className="w-full bg-white border">
              <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
              <TabsTrigger value="healthcare" className="flex-1">Healthcare</TabsTrigger>
              <TabsTrigger value="education" className="flex-1">Education</TabsTrigger>
              <TabsTrigger value="environment" className="flex-1">Environment</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="flex gap-2 mt-4 md:mt-0">
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
              Grid
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
              List
            </Button>
          </div>
        </div>
        
        {activeView === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {filteredProjects.map((post) => (
              <Card key={post.id} className="overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-gray-200 bg-white">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.imageSrc} 
                    alt={post.title} 
                    className="object-cover w-full h-full transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-belize-blue/90 text-white text-xs font-medium px-2 py-1 rounded capitalize">
                    {post.category}
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-belize-green mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link to={`/projects/${post.slug}`} className="text-belize-blue hover:underline inline-flex items-center font-medium">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4 mb-12">
            {filteredProjects.map((post) => (
              <Card key={post.id} className="overflow-hidden border border-gray-100 transition-all hover:shadow-md hover:border-gray-200 bg-white">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 aspect-video md:aspect-square relative overflow-hidden">
                    <img 
                      src={post.imageSrc} 
                      alt={post.title} 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-3 right-3 bg-belize-blue/90 text-white text-xs font-medium px-2 py-1 rounded capitalize">
                      {post.category}
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2 gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-belize-green mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link to={`/projects/${post.slug}`} className="text-belize-blue hover:underline inline-flex items-center font-medium">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
        
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className="border border-gray-200" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive className="bg-belize-blue text-white border-belize-blue">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border border-gray-200">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" className="border border-gray-200" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default ProjectsList;
