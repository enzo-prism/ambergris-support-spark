import React from "react";
import { Heart, Users, Globe, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const AboutSection: React.FC = () => {
  return <section id="about" className="section-padding bg-gradient-to-b from-white to-belize-light/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 bg-belize-light text-belize-green rounded-full text-sm font-medium mb-4">Our Mission</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Belize Kids</h2>
          <p className="text-lg text-gray-700">BelizeKids.org is dedicated to improving the lives of children in Belize through strategic investments in education, healthcare, and community infrastructure.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-belize-green to-belize-teal rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <img src="/lovable-uploads/6ef870a1-f17b-4286-b5a3-24f461ec46de.png" alt="Children at San Pedro Lions Club" className="rounded-lg shadow-lg w-full h-auto object-cover" />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl border-l-4 border-belize-green animate-float">
                <p className="font-bold text-belize-green text-xl">100%</p>
                <p className="text-sm font-medium">Donation Model</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-belize-green">Transforming Lives in Belize</h3>
            <p className="text-gray-700 mb-6">
              Our mission is to improve the lives of kids in Belize. We invest in projects to help schools, build and maintain parks and playgrounds, support and expand healthcare, and provide scholarships.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 transform transition-all duration-300 hover:translate-x-2">
                <div className="flex-shrink-0 bg-belize-light p-3 rounded-full">
                  <Heart className="h-6 w-6 text-belize-green" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 flex items-center">
                    100% Donation Model
                    <CheckCircle2 className="h-4 w-4 ml-2 text-belize-coral" />
                  </h4>
                  <p className="text-gray-600">All administrative costs are covered by the owners of Canary Cove, ensuring 100% of donations directly support children.</p>
                </div>
              </div>
              
              <div className="flex gap-4 transform transition-all duration-300 hover:translate-x-2">
                <div className="flex-shrink-0 bg-belize-light p-3 rounded-full">
                  <Globe className="h-6 w-6 text-belize-green" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 flex items-center">
                    Community Partnerships
                    <CheckCircle2 className="h-4 w-4 ml-2 text-belize-coral" />
                  </h4>
                  <p className="text-gray-600">We build a framework to identify community goals and cement local relationships, enabling individuals and businesses to donate with confidence.</p>
                </div>
              </div>
              
              <div className="flex gap-4 transform transition-all duration-300 hover:translate-x-2">
                <div className="flex-shrink-0 bg-belize-light p-3 rounded-full">
                  <Award className="h-6 w-6 text-belize-green" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 flex items-center">
                    Complete Transparency
                    <CheckCircle2 className="h-4 w-4 ml-2 text-belize-coral" />
                  </h4>
                  <p className="text-gray-600">We operate with complete transparency, publishing detailed reports on fundraising, spending, and program impact.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link to="/leadership">
                <Button variant="outline" className="border-belize-green text-belize-green hover:bg-belize-green hover:text-white">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-20 bg-white p-8 rounded-xl shadow-lg border-t-4 border-belize-coral">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Users className="h-16 w-16 text-belize-coral" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Join Our Community of Supporters</h3>
              <p className="text-gray-700">
                Become a part of our community dedicated to improving the lives of children in Belize. Your support makes a direct impact on education, healthcare, and community development.
              </p>
            </div>
            <div className="md:ml-auto">
              <Link to="/membership">
                <Button className="bg-belize-coral hover:bg-belize-coral/90 text-white">
                  Become a Member
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;