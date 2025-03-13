
import React from "react";
import { BookOpen, HeartPulse, Home, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProgramsSection: React.FC = () => {
  const programs = [
    {
      icon: <GraduationCap className="h-10 w-10 text-belize-green" />,
      title: "School Support",
      description: "Investing in educational infrastructure, supplies, and resources to help schools provide better learning environments for children.",
      color: "bg-belize-light"
    },
    {
      icon: <HeartPulse className="h-10 w-10 text-belize-teal" />,
      title: "Healthcare Expansion",
      description: "Supporting and expanding healthcare services to ensure children receive the medical attention they need to thrive.",
      color: "bg-green-50"
    },
    {
      icon: <Home className="h-10 w-10 text-belize-yellow" />,
      title: "Parks & Playgrounds",
      description: "Building and maintaining safe recreational spaces where children can play, exercise, and develop social skills.",
      color: "bg-yellow-50"
    },
    {
      icon: <BookOpen className="h-10 w-10 text-belize-green" />,
      title: "Scholarship Programs",
      description: "Providing educational scholarships to help talented students overcome financial barriers and achieve their potential.",
      color: "bg-blue-50"
    }
  ];

  return (
    <section id="programs" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Programs</h2>
          <p className="text-lg text-gray-700">
            Through our targeted programs, we address the diverse needs of children in Belize, 
            focusing on education, healthcare, and community development.
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
            Our programs continually evolve to meet the changing needs of children across Belize, 
            with a focus on sustainable, community-driven solutions.
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
