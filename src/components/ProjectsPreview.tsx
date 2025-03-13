
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsPreview: React.FC = () => {
  // Recent project posts for preview (just showing the latest 3)
  const recentPosts = [
    {
      id: 1,
      title: "October Vision Clinic is a Huge Success",
      author: "Rebecca Coutant",
      date: "October 30, 2023",
      excerpt: "BelizeKids.org, in conjunction with BCVI and the San Pedro Lions Den, just completed another very successful free clinic for San Pedro.",
      imageSrc: "/lovable-uploads/57ae58c7-c275-4a3f-b33d-6f120282c94f.png",
      slug: "october-vision-clinic",
    },
    {
      id: 2,
      title: "BelizeKids is Excited to Announce Our #DollaADive Program",
      author: "Rebecca Coutant",
      date: "November 22, 2022",
      excerpt: "If you have visited, you know that no single activity has been more important to tourism on Ambergris Caye than scuba diving.",
      imageSrc: "https://images.unsplash.com/photo-1482275548304-a58859dc31b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      slug: "dollar-a-dive-program",
    },
    {
      id: 3,
      title: "BelizeKids.Org Donates a Second Vision Screening Machine",
      author: "Rebecca Coutant",
      date: "August 27, 2022",
      excerpt: "BelizeKids.org was so proud to donate a 2nd Vision Screening Device to San Pedro's Lions Club last week.",
      imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      slug: "second-vision-screening-machine",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-belize-blue mb-3">Recent Projects</h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              Stay updated with our latest initiatives and success stories from Belize
            </p>
          </div>
          <Link to="/projects">
            <Button className="mt-4 md:mt-0 bg-belize-blue hover:bg-belize-blue/90">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={post.imageSrc} 
                  alt={post.title} 
                  className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardContent className="pt-5">
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
                <h3 className="text-xl font-bold text-belize-blue mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4 text-sm">{post.excerpt}</p>
                <Link to={`/projects/${post.slug}`} className="text-belize-blue font-medium hover:underline inline-flex items-center">
                  Read More <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
