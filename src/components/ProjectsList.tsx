
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  User, 
  ArrowRight 
} from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Link } from "react-router-dom";

// Mock data for projects/blog posts
const projectPosts = [
  {
    id: 1,
    title: "October Vision Clinic is a Huge Success",
    author: "Rebecca Coutant",
    date: "October 30, 2023",
    excerpt: "Our recent vision clinic in San Pedro provided free eye exams and glasses to over 200 children. Many of these children had never had their vision checked before.",
    imageSrc: "/lovable-uploads/57ae58c7-c275-4a3f-b33d-6f120282c94f.png",
    slug: "october-vision-clinic",
  },
  {
    id: 2,
    title: "New School Supplies for San Mateo",
    author: "Michael Torres",
    date: "September 15, 2023",
    excerpt: "Thanks to generous donations, we were able to provide backpacks, notebooks, and other essential school supplies to 150 children in the San Mateo area.",
    imageSrc: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    slug: "school-supplies-san-mateo",
  },
  {
    id: 3,
    title: "Summer Health Camp Reaches Record Attendance",
    author: "Dr. James Wilson",
    date: "August 5, 2023",
    excerpt: "Our annual summer health camp welcomed over 300 children this year, offering dental checkups, nutritional guidance, and fun health education activities.",
    imageSrc: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    slug: "summer-health-camp",
  },
  {
    id: 4,
    title: "New Computer Lab Opens at Holy Cross School",
    author: "Maria Johnson",
    date: "July 10, 2023",
    excerpt: "We're excited to announce the opening of a new computer lab at Holy Cross School in San Pedro. The lab features 20 new computers and will provide vital technology education.",
    imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    slug: "computer-lab-holy-cross",
  },
];

const ProjectsList: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projectPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={post.imageSrc} 
                  alt={post.title} 
                  className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                />
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
                <h3 className="text-2xl font-bold text-belize-blue mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link to={`/projects/${post.slug}`}>
                  <Button variant="outline" className="text-belize-blue border-belize-blue hover:bg-belize-blue hover:text-white">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default ProjectsList;
