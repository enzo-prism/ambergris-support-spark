
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Book, User, School, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const ImpactSection: React.FC = () => {
  const impactStats = [
    {
      icon: <User className="h-8 w-8 text-white" />,
      count: "500+",
      label: "Children Supported",
      color: "bg-gradient-to-br from-belize-green to-belize-green/80",
    },
    {
      icon: <Book className="h-8 w-8 text-white" />,
      count: "25",
      label: "Active Programs",
      color: "bg-gradient-to-br from-belize-teal to-belize-teal/80",
    },
    {
      icon: <School className="h-8 w-8 text-white" />,
      count: "12",
      label: "Schools Partnered With",
      color: "bg-gradient-to-br from-belize-coral to-belize-coral/80",
    },
  ];

  const impactStories = [
    {
      name: "Vision Clinic",
      age: "",
      story: "Our vision clinics provide hundreds of children with eye exams and glasses, significantly improving their ability to learn and participate in school activities.",
      image: "/lovable-uploads/812b0d25-46e7-4113-9dde-e057f9d49833.png",
    },
    {
      name: "Eye Testing",
      age: "",
      story: "By identifying vision problems early, we help ensure children have the foundation they need for academic success and future opportunities.",
      image: "/lovable-uploads/f755368c-b8ff-40b1-aca5-54aa6838d570.png",
    },
    {
      name: "Healthcare Access",
      age: "",
      story: "Our healthcare initiatives expand medical services to children who might otherwise go without proper care, improving their overall wellbeing and future prospects.",
      image: "/lovable-uploads/6ef870a1-f17b-4286-b5a3-24f461ec46de.png",
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
          <span className="inline-block px-4 py-1 bg-belize-light text-belize-green rounded-full text-sm font-medium mb-4">
            Making A Difference
          </span>
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
            <h3 className="text-2xl font-bold text-belize-green">2023 Program Funding</h3>
            <div className="flex items-center gap-2 px-3 py-1 bg-belize-light rounded-full">
              <TrendingUp className="h-4 w-4 text-belize-green" />
              <span className="text-sm font-medium text-belize-green">Transparent Allocation</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">School Support</span>
                  <span className="font-medium text-belize-green">45%</span>
                </div>
                <Progress value={45} className="h-3 bg-gray-100" />
                <p className="text-sm text-gray-500 mt-1">Investing in educational facilities and resources</p>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Healthcare Expansion</span>
                  <span className="font-medium text-belize-green">30%</span>
                </div>
                <Progress value={30} className="h-3 bg-gray-100" />
                <p className="text-sm text-gray-500 mt-1">Improving access to medical services</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Parks & Playgrounds</span>
                  <span className="font-medium text-belize-green">15%</span>
                </div>
                <Progress value={15} className="h-3 bg-gray-100" />
                <p className="text-sm text-gray-500 mt-1">Creating safe spaces for children to play</p>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Scholarship Programs</span>
                  <span className="font-medium text-belize-green">10%</span>
                </div>
                <Progress value={10} className="h-3 bg-gray-100" />
                <p className="text-sm text-gray-500 mt-1">Supporting talented students with financial needs</p>
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
                    <img 
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
