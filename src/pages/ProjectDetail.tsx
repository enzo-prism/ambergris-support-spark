
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";

// This would come from a database or API in a real application
const projects = [
  {
    slug: "october-vision-clinic",
    title: "October Vision Clinic is a Huge Success",
    author: "Rebecca Coutant",
    date: "October 30, 2023",
    imageSrc: "/lovable-uploads/57ae58c7-c275-4a3f-b33d-6f120282c94f.png",
    content: `
      <p>Our recent vision clinic in San Pedro provided free eye exams and glasses to over 200 children. Many of these children had never had their vision checked before.</p>
      <p>The clinic was held over three days at the San Pedro Community Center, with volunteer optometrists from the United States and Belize working tirelessly to serve as many children as possible.</p>
      <p>One of the most rewarding moments was seeing the expressions on children's faces when they put on their new glasses for the first time and could see clearly. For many, it was a life-changing experience that will significantly improve their ability to learn and participate in school.</p>
      <p>We'd like to extend a special thank you to Dr. James Wilson and his team for donating their time and expertise, as well as to our donors who made this event possible by funding the equipment and glasses.</p>
      <p>Based on the success of this clinic, we're planning to expand this program to other communities in Belize in the coming year.</p>
    `
  },
  {
    slug: "school-supplies-san-mateo",
    title: "New School Supplies for San Mateo",
    author: "Michael Torres",
    date: "September 15, 2023",
    imageSrc: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>Thanks to generous donations, we were able to provide backpacks, notebooks, and other essential school supplies to 150 children in the San Mateo area of Ambergris Caye.</p>
      <p>Education is one of the most powerful tools for breaking the cycle of poverty, but many children in Belize face barriers to education due to a lack of basic supplies. Our back-to-school program aims to remove these barriers by ensuring that every child has what they need to succeed in school.</p>
      <p>The distribution event took place at San Mateo Primary School, where children and their families lined up to receive their new supplies. The joy on their faces was evident as they explored their new backpacks filled with notebooks, pencils, rulers, and other essentials.</p>
      <p>We're grateful to everyone who contributed to this initiative, particularly the staff at Canary Cove who organized the collection and distribution effort.</p>
    `
  },
  // Additional project details would be included here
];

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container-custom py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-8">The project you're looking for doesn't exist or has been moved.</p>
          <Link to="/projects">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <Link to="/projects" className="inline-flex items-center text-belize-blue hover:underline mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all projects
          </Link>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-belize-blue mb-4">
            {project.title}
          </h1>
          
          <div className="flex items-center text-gray-600 mb-8 gap-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>By {project.author}</span>
            </div>
          </div>
          
          <div className="aspect-video mb-10 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={project.imageSrc} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </div>
          
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold mb-4">Help Support Our Work</h3>
            <p className="mb-6">Your donations allow us to continue providing essential services to children in Belize.</p>
            <Button 
              className="bg-belize-coral hover:bg-opacity-90 text-white"
              onClick={() => {
                const donateElement = document.getElementById("donate");
                if (donateElement) {
                  donateElement.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/#donate";
                }
              }}
            >
              Donate Now
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
