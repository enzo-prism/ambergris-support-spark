
import React from "react";
import { BookOpen, HeartPulse, Home, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProgramsSection: React.FC = () => {
  const programs = [
    {
      icon: <GraduationCap className="h-10 w-10 text-belize-blue" />,
      title: "Education Support",
      description: "Providing school supplies, scholarships, and tutoring programs to ensure every child has access to quality education.",
      color: "bg-belize-light"
    },
    {
      icon: <HeartPulse className="h-10 w-10 text-belize-teal" />,
      title: "Healthcare Initiatives",
      description: "Supporting medical checkups, nutrition programs, and health education to keep children healthy and thriving.",
      color: "bg-green-50"
    },
    {
      icon: <Home className="h-10 w-10 text-belize-coral" />,
      title: "Community Development",
      description: "Building safe spaces for children to learn, play, and grow within their communities.",
      color: "bg-orange-50"
    },
    {
      icon: <BookOpen className="h-10 w-10 text-belize-green" />,
      title: "Enrichment Programs",
      description: "Offering arts, sports, and cultural programs that develop children's talents and broaden their horizons.",
      color: "bg-blue-50"
    }
  ];

  return (
    <section id="programs" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Programs</h2>
          <p className="text-lg text-gray-700">
            Through our various programs, we address the diverse needs of children in Belize, 
            focusing on education, health, and community development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className={`${program.color} rounded-t-lg px-6 py-8 flex justify-center`}>
                {program.icon}
              </CardHeader>
              <CardContent className="pt-6 pb-8 px-6">
                <CardTitle className="text-xl mb-3">{program.title}</CardTitle>
                <CardDescription className="text-gray-700 text-base">
                  {program.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-gray-700 mb-8">
            Our programs are constantly evolving to meet the changing needs of children across Belize, 
            with plans to expand nationwide.
          </p>
          <img 
            src="/lovable-uploads/ca21c85a-e8be-48b2-8f9d-89e3983435ca.png" 
            alt="Children participating in programs" 
            className="rounded-lg shadow-lg max-w-4xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
