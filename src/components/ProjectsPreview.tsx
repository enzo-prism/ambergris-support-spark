
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectsPreview: React.FC = () => {
  // Recent project posts for preview (just showing the latest 3)
  const recentPosts = [
    {
      id: 1,
      title: "October Vision Clinic is a Huge Success",
      author: "Rebecca Coutant",
      date: "October 30, 2017",
      excerpt: "BelizeKids.org, in conjunction with BCVI and the San Pedro Lions Den, just completed another very successful free clinic for San Pedro.",
      imageSrc: "/lovable-uploads/20afad96-a69a-4127-822c-f95dc36b74e3.png",
      slug: "october-vision-clinic",
    },
    {
      id: 2,
      title: "Belize Kids is Excited to Announce Our #DollaADive Program",
      author: "Rebecca Coutant",
      date: "November 22, 2022",
      excerpt: "If you have visited, you know that no single activity has been more important to tourism on Ambergris Caye than scuba diving.",
      imageSrc: "/lovable-uploads/ca21c85a-e8be-48b2-8f9d-89e3983435ca.png",
      slug: "dollar-a-dive-program",
    },
    {
      id: 3,
      title: "Belize Kids.Org Donates a Second Vision Screening Machine",
      author: "Rebecca Coutant",
      date: "August 27, 2022",
      excerpt: "Belize Kids.org was so proud to donate a 2nd Vision Screening Device to San Pedro's Lions Club last week.",
      imageSrc: "/lovable-uploads/f755368c-b8ff-40b1-aca5-54aa6838d570.png",
      slug: "second-vision-screening-machine",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-belize-blue mb-3">Recent Projects</h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              Stay updated with our latest initiatives and success stories from Belize
            </p>
          </div>
          <Link to="/projects">
            <Button className="mt-4 md:mt-0 bg-belize-blue hover:bg-belize-blue/90">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {recentPosts.map((post) => (
            <motion.div key={post.id} variants={item}>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.imageSrc} 
                    alt={post.title} 
                    className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardContent className="pt-5">
                  <div className="flex items-center text-sm text-gray-500 mb-2 gap-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-belize-blue mb-2">{post.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{post.excerpt}</p>
                  <Link to={`/projects/${post.slug}`} className="text-belize-blue font-medium hover:underline inline-flex items-center">
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
