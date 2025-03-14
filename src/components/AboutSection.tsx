
import React from "react";
import { HeartHandshake, Users, Globe, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <HeartHandshake className="h-6 w-6 text-belize-green" />,
      title: "100% Investment Model",
      description: "All administrative costs are covered by the owners of Canary Cove, ensuring 100% of investments directly support children."
    },
    {
      icon: <Globe className="h-6 w-6 text-belize-green" />,
      title: "Community Partnerships",
      description: "We build a framework to identify community goals and cement local relationships, enabling individuals and businesses to invest with confidence."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-belize-green" />,
      title: "Complete Transparency",
      description: "We operate with complete transparency, publishing detailed reports on fundraising, investments, and program impact."
    }
  ];

  const impactPoints = [
    "Improving education infrastructure",
    "Building and maintaining parks and playgrounds",
    "Supporting healthcare initiatives",
    "Providing scholarships for future leaders"
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-belize-green tracking-wider uppercase">Our Mission</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-gray-900">About Belize Kids</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg">
              BelizeKids.org is dedicated to improving the lives of children in Belize through strategic 
              investments in education, healthcare, and community infrastructure.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left side with mission and impact card */}
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="p-6 shadow-md border-l-4 border-belize-green h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transforming Lives in Belize</h3>
              <p className="text-gray-600 mb-6">
                Our mission is to improve the lives of kids in Belize through strategic investments. 
                We focus on projects that create lasting positive impact for the next generation.
              </p>
              
              <h4 className="font-semibold text-gray-800 mb-3">Our Impact Areas:</h4>
              <ul className="space-y-2 mb-6">
                {impactPoints.map((point, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="h-5 w-5 text-belize-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{point}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="pt-2 mt-auto">
                <Link to="/leadership">
                  <Button variant="outline" className="group border-belize-green text-belize-green hover:bg-belize-green hover:text-white transition-all duration-300">
                    Meet Our Team
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>

          {/* Right side with features */}
          <motion.div 
            className="md:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-lg p-6 shadow-md border-l-4 border-belize-green hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 rounded-full bg-gray-50 text-belize-green">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <Separator className="my-16 bg-gray-100" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-belize-light to-white rounded-2xl p-8 md:p-10 shadow-md"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-8/12">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Join Our Community of Investors</h3>
              <p className="text-gray-600">
                Become a part of our community dedicated to investing in the futures of children in Belize. 
                Your strategic investment makes a direct impact on education, healthcare, and community development.
              </p>
            </div>
            <div className="md:w-4/12 flex justify-center md:justify-end w-full">
              <Link to="/membership" className="w-full md:w-auto">
                <Button className="bg-belize-green hover:bg-belize-green/90 text-white w-full md:w-auto group transition-all duration-300">
                  Become an Investor
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
