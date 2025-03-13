
import React from "react";
import { Heart, Users, Globe, Award } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About BelizeKids</h2>
          <p className="text-lg text-gray-700">
            BelizeKids.org is dedicated to improving the lives of children in Belize through strategic investments in education, healthcare, and community infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="/lovable-uploads/6ef870a1-f17b-4286-b5a3-24f461ec46de.png" 
              alt="Children at San Pedro Lions Club" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-belize-green">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              Our mission is to improve the lives of kids in Belize. We invest in projects to help schools, build and maintain parks and playgrounds, support and expand healthcare, and provide scholarships.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-belize-light p-3 rounded-full">
                  <Heart className="h-6 w-6 text-belize-green" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">100% Donation Model</h4>
                  <p className="text-gray-600">All administrative costs are covered by the owners of Canary Cove, ensuring 100% of donations directly support children.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-belize-light p-3 rounded-full">
                  <Globe className="h-6 w-6 text-belize-green" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Community Partnerships</h4>
                  <p className="text-gray-600">We build a framework to identify community goals and cement local relationships, enabling individuals and businesses to donate with confidence.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-belize-light p-3 rounded-full">
                  <Award className="h-6 w-6 text-belize-green" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Complete Transparency</h4>
                  <p className="text-gray-600">We operate with complete transparency, publishing detailed reports on fundraising, spending, and program impact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
