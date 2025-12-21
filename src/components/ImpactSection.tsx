import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Book, User, School, TrendingUp, Award, BookOpen, GraduationCap, Building } from "lucide-react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { Badge } from "@/components/ui/badge";

const ImpactSection: React.FC = () => {
  const impactStats = [
    {
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      count: "3,266+",
      label: "Scholarships Awarded",
      color: "bg-gradient-to-br from-belize-green to-belize-green/80",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-white" />,
      count: "$887K",
      label: "School Supplies Investment",
      color: "bg-gradient-to-br from-belize-teal to-belize-teal/80",
    },
    {
      icon: <Building className="h-8 w-8 text-white" />,
      count: "2",
      label: "Major Facilities Built",
      color: "bg-gradient-to-br from-belize-coral to-belize-coral/80",
    },
  ];

  const impactStories = [
    {
      name: "Vision Clinic",
      age: "",
      story: "Our Stanford Belize Vision Clinic provides free eye screenings and subsidized eyewear for families in need, significantly improving children's ability to learn.",
      image: "https://imgur.com/0Qjoc64",
    },
    {
      name: "ACB School Classroom",
      age: "",
      story: "We've built a new classroom at ACB School, allowing more students to receive quality education. When classrooms are available, the federal government funds the teachers, creating sustainable educational opportunities.",
      image: "https://imgur.com/44skZfu",
    },
    {
      name: "Boca Del Rio Playground",
      age: "",
      story: "By the end of 2013, the park at Boca Del Rio – one of the most beautiful locations on the island – was in sorry shape. The heavily used basketball court was in need of maintenance, the swing sets and playground were falling apart and Canary Cove stepped in to help. The entrance was blocked to golf carts so that kids could now play freely, under the renovation supervised by Gil Nunez.",
      image: "https://imgur.com/r8J764N",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-belize-green/20 bg-belize-light px-4 py-1 text-sm font-medium text-belize-green"
          >
            Making A Difference
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact</h2>
          <p className="text-lg text-gray-700">
            With complete transparency, we show how your investments directly improve the lives of children across Belize.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {impactStats.map((stat, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full">
                <CardContent className="p-0">
                  <div className="flex flex-col h-full">
                    <div className={`${stat.color} p-6 flex items-center justify-center`}>
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-4xl font-bold mb-2 text-belize-green">{stat.count}</h3>
                      <p className="text-gray-700 font-medium">{stat.label}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-belize-green">Key Partnerships</h3>
            <Badge variant="outline" className="gap-2 rounded-full border-belize-green/20 bg-belize-light px-3 py-1 text-belize-green">
              <TrendingUp className="h-4 w-4 text-belize-green" />
              <span className="text-sm font-medium">Strategic Collaboration</span>
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Stanford University</span>
                  <span className="font-medium text-belize-green">Medical Expertise</span>
                </div>
                <Progress value={100} className="h-3 bg-gray-100" />
                <p className="text-sm text-gray-500 mt-1">Provides medical expertise for the Vision Clinic</p>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Belize Council for the Visually Impaired</span>
                  <span className="font-medium text-belize-green">Care Continuity</span>
                </div>
                <Progress value={100} className="h-3 bg-gray-100" />
                <p className="text-sm text-gray-500 mt-1">Ensures ongoing eye care through subsidized eyewear</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">San Pedro Lions Club</span>
                  <span className="font-medium text-belize-green">Logistical Support</span>
                </div>
                <Progress value={100} className="h-3 bg-gray-100" />
                <p className="text-sm text-gray-500 mt-1">Assists with community-based projects and clinic operations</p>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Local Schools</span>
                  <span className="font-medium text-belize-green">Educational Integration</span>
                </div>
                <Progress value={100} className="h-3 bg-gray-100" />
                <p className="text-sm text-gray-500 mt-1">Facilitates scholarship programs and educational initiatives</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h3 className="text-2xl font-bold text-belize-green">Success Stories</h3>
            <p className="text-gray-600 max-w-md mt-2 md:mt-0">
              See how our initiatives are creating positive change in the lives of children across Belize.
            </p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {impactStories.map((story, index) => (
              <motion.div key={index} variants={item}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  <div className="overflow-hidden">
                    <Image 
                      src={story.image} 
                      alt={`${story.name}`} 
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-belize-green"></div>
                      <h4 className="font-bold text-xl text-belize-green">{story.name}{story.age ? `, ${story.age}` : ''}</h4>
                    </div>
                    <p className="text-gray-700">{story.story}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
