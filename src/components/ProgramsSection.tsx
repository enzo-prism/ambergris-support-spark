
import React from "react";
import { BookOpen, HeartPulse, Home, GraduationCap, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProgramsSection: React.FC = () => {
  const programs = [
    {
      icon: <GraduationCap className="h-12 w-12 text-white" />,
      title: "School Support",
      description: "Investing in educational infrastructure, supplies, and resources to help schools provide better learning environments for children.",
      color: "bg-belize-green",
      hoverColor: "hover:bg-belize-green/90",
      category: "education"
    },
    {
      icon: <HeartPulse className="h-12 w-12 text-white" />,
      title: "Healthcare Expansion",
      description: "Supporting and expanding healthcare services to ensure children receive the medical attention they need to thrive.",
      color: "bg-belize-teal",
      hoverColor: "hover:bg-belize-teal/90",
      category: "healthcare"
    },
    {
      icon: <Home className="h-12 w-12 text-white" />,
      title: "Parks & Playgrounds",
      description: "Building and maintaining safe recreational spaces where children can play, exercise, and develop social skills.",
      color: "bg-belize-coral",
      hoverColor: "hover:bg-belize-coral/90",
      category: "environment"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-white" />,
      title: "Scholarship Programs",
      description: "Providing educational scholarships to help talented students overcome financial barriers and achieve their potential.",
      color: "bg-belize-blue",
      hoverColor: "hover:bg-belize-blue/90",
      category: "education"
    }
  ];

  return (
    <section id="programs" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 bg-belize-light text-belize-green rounded-full text-sm font-medium mb-4">Our Focus Areas</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Making a Difference Through Our Programs</h2>
          <p className="text-lg text-gray-700">
            Through our targeted programs, we address the diverse needs of children in Belize, 
            focusing on education, healthcare, and community development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <CardHeader className={`${program.color} rounded-t-lg px-6 py-8 flex justify-center`}>
                <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
                  {program.icon}
                </div>
              </CardHeader>
              <CardContent className="pt-6 pb-4 px-6">
                <CardTitle className="text-xl mb-3 text-belize-green">{program.title}</CardTitle>
                <CardDescription className="text-gray-700 text-base">
                  {program.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Link to={`/projects?tab=${program.category}`}>
                  <Button variant="ghost" className="p-0 h-auto text-belize-green hover:text-belize-blue hover:bg-transparent">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-lg p-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-belize-green">Evolving to Meet Changing Needs</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our programs continually evolve to meet the changing needs of children across Belize, 
              with a focus on sustainable, community-driven solutions.
            </p>
            <Link to="/projects">
              <Button className="bg-belize-green hover:bg-belize-green/90">
                View Our Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://belizekids.org/wp-content/uploads/2016/06/San-Pedro-RC-School-2.jpg" 
              alt="San Pedro RC School students" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
              onError={(e) => {
                console.error("Error loading image");
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f0f0'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='18' text-anchor='middle' dominant-baseline='middle' fill='%23999999'%3EImage not available%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
