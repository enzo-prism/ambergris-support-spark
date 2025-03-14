
import React from "react";
import { HeartHandshake, Users, Globe, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <HeartHandshake className="h-5 w-5 text-belize-coral" />,
      title: "100% Investment Model",
      description: "All administrative costs are covered by the owners of Canary Cove, ensuring 100% of investments directly support children."
    },
    {
      icon: <Globe className="h-5 w-5 text-belize-teal" />,
      title: "Community Partnerships",
      description: "We build a framework to identify community goals and cement local relationships, enabling individuals and businesses to invest with confidence."
    },
    {
      icon: <Sparkles className="h-5 w-5 text-belize-blue" />,
      title: "Complete Transparency",
      description: "We operate with complete transparency, publishing detailed reports on fundraising, investments, and program impact."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-belize-green tracking-wider uppercase">Our Mission</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-gray-900">About Belize Kids</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg">
              BelizeKids.org is dedicated to improving the lives of children in Belize through strategic investments in education, healthcare, and community infrastructure.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Transforming Lives in Belize</h3>
                <p className="text-gray-600">
                  Our mission is to improve the lives of kids in Belize through strategic investments. We invest in projects to help schools, build and maintain parks and playgrounds, support and expand healthcare, and provide scholarships for the next generation of leaders.
                </p>
              </div>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <div className="flex items-start gap-4 group">
                      <div className="mt-1 flex-shrink-0 rounded-full p-2 bg-gray-50 group-hover:bg-belize-light transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="mt-1 text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <Link to="/leadership">
                  <Button variant="outline" className="group border-belize-green text-belize-green hover:bg-belize-green hover:text-white transition-all duration-300">
                    Meet Our Team
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <AspectRatio ratio={16/9} className="bg-muted">
                <img 
                  src="/lovable-uploads/e4781a43-9e9c-44e8-8d45-98a4595afa8a.png" 
                  alt="San Pedro Lions Club community meeting" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-transparent mix-blend-overlay"></div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg border-l-4 border-yellow-500 z-20"
              >
                <p className="font-bold text-belize-green text-xl">100%</p>
                <p className="text-sm text-gray-600">Direct Investment</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <Separator className="my-20 bg-gray-100" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-8/12">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Join Our Community of Investors</h3>
              <p className="text-gray-600">
                Become a part of our community dedicated to investing in the futures of children in Belize. Your strategic investment makes a direct impact on education, healthcare, and community development.
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
