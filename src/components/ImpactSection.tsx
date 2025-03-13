
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Book, User, School } from "lucide-react";

const ImpactSection: React.FC = () => {
  const impactStats = [
    {
      icon: <User className="h-8 w-8 text-belize-blue" />,
      count: "500+",
      label: "Children Supported",
      color: "bg-belize-light",
    },
    {
      icon: <Book className="h-8 w-8 text-belize-teal" />,
      count: "25",
      label: "Active Programs",
      color: "bg-green-50",
    },
    {
      icon: <School className="h-8 w-8 text-belize-coral" />,
      count: "12",
      label: "Schools Partnered With",
      color: "bg-orange-50",
    },
  ];

  const impactStories = [
    {
      name: "Maria",
      age: 10,
      story: "Maria received a scholarship that allowed her to continue her education. She excels in mathematics and dreams of becoming an engineer.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Carlos",
      age: 8,
      story: "Carlos joined our after-school program where he discovered his passion for art. His paintings have been featured in local exhibitions.",
      image: "https://images.unsplash.com/photo-1548187669-7b58fdd9e591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Sofia",
      age: 12,
      story: "Sofia's health improved dramatically after joining our nutrition program. She's now an active participant in our sports initiatives.",
      image: "https://images.unsplash.com/photo-1592850923600-970e0e5f0fea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section id="impact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact</h2>
          <p className="text-lg text-gray-700">
            Every donation makes a real difference in the lives of children across Belize. 
            Here's how your support is changing lives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className={`mx-auto w-20 h-20 rounded-full ${stat.color} flex items-center justify-center mb-6`}>
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.count}</h3>
                <p className="text-gray-700">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">2023 Program Funding</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Education Initiatives</span>
                <span className="font-medium">45%</span>
              </div>
              <Progress value={45} className="h-3" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Health & Nutrition</span>
                <span className="font-medium">30%</span>
              </div>
              <Progress value={30} className="h-3" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Community Development</span>
                <span className="font-medium">15%</span>
              </div>
              <Progress value={15} className="h-3" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Enrichment Programs</span>
                <span className="font-medium">10%</span>
              </div>
              <Progress value={10} className="h-3" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={story.image} 
                  alt={`${story.name}'s story`} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="font-bold text-xl mb-1">{story.name}, {story.age}</h4>
                  <p className="text-gray-700">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
