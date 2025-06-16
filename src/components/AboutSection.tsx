import React from "react";
import { HeartHandshake, Users, Globe, Sparkles, ArrowRight, CheckCircle2, Award, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

const AboutSection: React.FC = () => {
  const isMobile = useIsMobile();
  
  const features = [{
    icon: <HeartHandshake className="h-6 w-6 text-belize-green" />,
    title: "100% Investment Model",
    description: "All administrative costs are covered by the owners of Canary Cove, ensuring 100% of investments directly support children."
  }, {
    icon: <Globe className="h-6 w-6 text-belize-green" />,
    title: "Strategic Partnerships",
    description: "We collaborate with Stanford University, BCVI, San Pedro Lions Club, and local schools to maximize our impact and reach."
  }, {
    icon: <Sparkles className="h-6 w-6 text-belize-green" />,
    title: "Complete Transparency",
    description: "We operate with complete transparency, publishing detailed reports on fundraising, investments, and program impact."
  }];
  
  const impactPoints = [
    "Improving education infrastructure",
    "Building and maintaining parks and playgrounds", 
    "Supporting healthcare initiatives like the Stanford Belize Vision Clinic", 
    "Providing scholarships for future leaders"
  ];

  const achievements = [
    { count: "3,266+", label: "Scholarships Awarded", icon: <GraduationCap className="h-4 w-4 text-belize-green" /> },
    { count: "$887,000", label: "Invested in School Supplies", icon: <BookOpen className="h-4 w-4 text-belize-green" /> },
    { count: "2", label: "Major Facilities Built", icon: <Award className="h-4 w-4 text-belize-green" /> }
  ];
  
  return (
    <section id="about" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div 
          className="text-center mb-8 md:mb-16" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-belize-green tracking-wider uppercase">Our Mission</span>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-4 md:mb-6 text-gray-900">About Belize Kids</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-base md:text-lg">Founded by Don Listwin, Belize Kids is dedicated to improving the lives of children in Belize through strategic investments in healthcare, education, and community infrastructure.</p>
          </div>
        </motion.div>

        {/* Hero Image Section */}
        <motion.div 
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
            <div className="w-full h-64 md:h-96 flex items-center justify-center">
              <img 
                src="/lovable-uploads/bc7854c3-5f34-4095-955a-566d30b2ad86.png" 
                alt="Belize Kids Vision Clinic event with children and volunteers from San Pedro Lions Club" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm md:text-base font-medium">
                Community partners working together at a Belize Kids Vision Clinic event, supporting children's healthcare needs in San Pedro.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
          <motion.div 
            className="md:col-span-5" 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="p-4 sm:p-6 shadow-md border-l-4 border-belize-green h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Transforming Lives in Belize</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Belize Kids emerged from Don Listwin's desire to create sustainable solutions for underserved communities in Belize. 
                We focus on projects that create lasting positive impact for the next generation.
              </p>
              
              <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Our Impact Areas:</h4>
              <ul className="space-y-2 mb-4 sm:mb-6">
                {impactPoints.map((point, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-belize-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base">{point}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="grid grid-cols-3 gap-2 mb-4 sm:mb-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-2 bg-belize-light/50 rounded-lg">
                    <div className="flex justify-center mb-1">{achievement.icon}</div>
                    <p className="font-bold text-belize-green text-sm sm:text-base">{achievement.count}</p>
                    <p className="text-xs sm:text-xs text-gray-600">{achievement.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-2 mt-auto">
                <Link to="/leadership" className="w-full sm:w-auto inline-block">
                  <Button variant="outline" className="group border-belize-green text-belize-green hover:bg-belize-green hover:text-white transition-all duration-300 w-full sm:w-auto">
                    Meet Our Team
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>

          <motion.div 
            className="md:col-span-7" 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-lg p-4 sm:p-6 shadow-md border-l-4 border-belize-green hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                    <div className="mt-0 sm:mt-1 p-2 sm:p-3 rounded-full bg-gray-50 text-belize-green mx-auto sm:mx-0">
                      {feature.icon}
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="font-bold text-lg sm:text-xl text-gray-900 mb-1 sm:mb-2">{feature.title}</h4>
                      <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <Separator className="my-10 md:my-16 bg-gray-100" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-belize-light to-white rounded-xl sm:rounded-2xl p-6 sm:p-10 shadow-md"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="md:w-8/12">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center md:text-left">Four Ways You Can Help</h3>
              <p className="text-gray-600 text-sm sm:text-base text-center md:text-left">
                Join our community by donating, volunteering your skills, spreading awareness, 
                or sponsoring specific projects. Your support directly improves education and healthcare 
                for children in Belize.
              </p>
            </div>
            <div className="md:w-4/12 flex justify-center md:justify-end w-full">
              <Link to="/monthly-investment" className="w-full md:w-auto">
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
