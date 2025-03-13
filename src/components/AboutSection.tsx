
import React from "react";
import { Heart, Users, Globe, Award } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About BelizeKids</h2>
          <p className="text-lg text-gray-700">
            BelizeKids.org is a non-profit organization dedicated to supporting children in Belize, 
            currently focusing on the island of Ambergris Caye with plans to expand nationwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1560367918-bed51f9dff43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Children in Belize" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-belize-blue">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              Belize, an English-speaking country in Central America, has a young and culturally diverse population, 
              but many children face economic and educational challenges. We're committed to providing resources, 
              support, and opportunities to help these children thrive.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-belize-light p-3 rounded-full">
                  <Heart className="h-6 w-6 text-belize-blue" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">100% Donation Model</h4>
                  <p className="text-gray-600">All administrative costs are covered by the owners of Canary Cove, ensuring 100% of donations directly support children.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-belize-light p-3 rounded-full">
                  <Globe className="h-6 w-6 text-belize-blue" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Local & International Support</h4>
                  <p className="text-gray-600">We raise funds through partnerships with local businesses and hotels, as well as through our U.S.-based 501(c)(3) non-profit.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-belize-light p-3 rounded-full">
                  <Award className="h-6 w-6 text-belize-blue" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Full Transparency</h4>
                  <p className="text-gray-600">We publish monthly reports on fundraising, spending, and program impact to maintain complete transparency.</p>
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
