import React from "react";
import { BookOpen, HeartPulse, Home, GraduationCap, ArrowRight, Eye, Calendar, MapPin, Laptop, User, Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Image } from "@/components/ui/image";
import { trackDoctorAppointmentClick } from "@/lib/analytics";

const ProgramsSection: React.FC = () => {
  const programs = [
    {
      icon: <GraduationCap className="h-12 w-12 text-white" />,
      title: "School Support",
      description: "Investing in educational infrastructure, textbooks, uniforms, and supplies to help schools provide better learning environments for children.",
      color: "bg-belize-green",
      hoverColor: "hover:bg-belize-green/90",
      category: "education"
    },
    {
      icon: <HeartPulse className="h-12 w-12 text-white" />,
      title: "Healthcare Expansion",
      description: "Supporting healthcare services like the Stanford Belize Vision Clinic to ensure children receive the medical attention they need to thrive.",
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
      icon: <Laptop className="h-12 w-12 text-white" />,
      title: "Community Development",
      description: "Constructing facilities such as internet centers in remote villages to bridge the digital divide and provide access to technology.",
      color: "bg-belize-blue",
      hoverColor: "hover:bg-belize-blue/90",
      category: "all"
    }
  ];

  return (
    <section id="programs" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-belize-green/20 bg-belize-light px-4 py-1 text-sm font-medium text-belize-green"
          >
            Our Focus Areas
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Making a Difference Through Our Programs</h2>
          <p className="text-lg text-gray-700">
            Founded by Don Listwin, BelizeKids.org addresses the diverse needs of children in Belize, 
            focusing on healthcare, education, and community development through strategic partnerships.
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
        
        <div className="mt-16 mb-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-belize-green text-center">Featured Initiative: Stanford Belize Vision Clinic</h3>
          <Card className="border-none shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-belize-blue/10 p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-belize-blue/20 mr-4">
                    <Eye className="h-6 w-6 text-belize-blue" />
                  </div>
                  <h4 className="text-xl font-bold text-belize-green">Established in 2017</h4>
                </div>
                <p className="text-gray-700 mb-4">
                  Following a hurricane that damaged San Pedro, Don Listwin (founder of BelizeKids.org) worked with 
                  Dr. Caroline Fisher from Stanford to establish the first eye clinic in the area, providing free eye screenings 
                  and subsidized eyewear for families in need.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-belize-coral mr-2 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium">Location</span>
                      <span className="text-xs block text-gray-600">San Pedro Lions Den, 2nd Floor</span>
                      <span className="text-xs block text-gray-600">Barrier Reef Drive, Ambergris Caye</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-belize-coral mr-2 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium">Operating Since</span>
                      <span className="text-xs block text-gray-600">Regular clinics since 2017</span>
                      <span className="text-xs block text-gray-600">Intermittent schedule</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Building2 className="h-5 w-5 text-belize-coral mr-2 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium">Partners</span>
                      <span className="text-xs block text-gray-600">Stanford University</span>
                      <span className="text-xs block text-gray-600">San Pedro Lions Club</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="rounded-full bg-belize-green/20 p-0.5 mr-3 mt-1">
                      <svg className="h-3 w-3 text-belize-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Only dedicated eye clinic on the island</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-belize-green/20 p-0.5 mr-3 mt-1">
                      <svg className="h-3 w-3 text-belize-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Partnership with Stanford Medicine ophthalmologists</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-belize-green/20 p-0.5 mr-3 mt-1">
                      <svg className="h-3 w-3 text-belize-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Collaboration with Belize Council for the Visually Impaired (BCVI)</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/projects/october-vision-clinic">
                    <Button variant="belizeBlue">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/doctors">
                    <Button
                      variant="belizeTeal"
                      onClick={() =>
                        trackDoctorAppointmentClick(
                          "programs_featured_initiative",
                          "doctors",
                        )
                      }
                    >
                      <User className="mr-2 h-4 w-4" />
                      Available Doctors
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="h-full">
                <img 
                  src="https://med.stanford.edu/ophthalmology/news-and-media/annual-reports/annualreport_2021/Belize-update/_jcr_content/main/panel_builder/panel_1/image_771439370.img.476.high.jpeg/Natacha_Villegas_SBVC.jpeg" 
                  alt="Dr. Natacha Villegas performing an eye examination at the Stanford Belize Vision Clinic" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f0f0'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='18' text-anchor='middle' dominant-baseline='middle' fill='%23999999'%3EImage not available%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>
          </Card>
          <div className="text-center mt-6 text-sm text-gray-600">
            <p>
              "Seeing how corrective lenses could impact a student's entire learning experience was impactful." 
              <span className="italic block mt-1">— Dr. Natacha Villegas, Chief Ophthalmology Resident at Stanford</span>
            </p>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-lg p-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-belize-green">Notable Achievements</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="rounded-full bg-belize-green p-1 mr-3 mt-1 flex-shrink-0">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Awarded over 3,266 scholarships for high school and university students</span>
              </li>
              <li className="flex items-start">
                <div className="rounded-full bg-belize-green p-1 mr-3 mt-1 flex-shrink-0">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Invested nearly $887,000 in textbooks, uniforms, and school supplies</span>
              </li>
              <li className="flex items-start">
                <div className="rounded-full bg-belize-green p-1 mr-3 mt-1 flex-shrink-0">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Built Student Center at Julian Cho Technical High School (2018)</span>
              </li>
              <li className="flex items-start">
                <div className="rounded-full bg-belize-green p-1 mr-3 mt-1 flex-shrink-0">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Constructed Internet Center in San Lucas Village (2022)</span>
              </li>
            </ul>
            <Link to="/projects">
              <Button variant="belizeGreen">
                View Our Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="https://imgur.com/TmGauI4" 
              alt="Belizean students in a classroom" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
