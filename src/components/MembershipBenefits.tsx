
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Activity, Bell, Users, Globe, Heart } from "lucide-react";

const MembershipBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Mail,
      title: "Exclusive Updates",
      description: "Receive insider updates and special communications about your investment impact in Belize."
    },
    {
      icon: Activity,
      title: "Impact Tracking",
      description: "See exactly how your monthly investment is creating meaningful change on the ground."
    },
    {
      icon: Bell,
      title: "Priority Notifications",
      description: "Be the first to know about new investment opportunities and urgent needs in our communities."
    },
    {
      icon: Users,
      title: "Investor Community",
      description: "Join a community of like-minded investors dedicated to transforming lives of Belizean children."
    },
    {
      icon: Globe,
      title: "Annual Impact Report",
      description: "Receive a detailed annual report showing the collective impact of our investment community."
    },
    {
      icon: Heart,
      title: "100% Investment Model",
      description: "Every dollar of your investment goes directly to programs, not administrative costs."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-belize-blue mb-4">Investor Benefits</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            When you become a monthly investor at $20/month, you're not just giving - you're strategically investing in the future of Belizean children and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-belize-green/10 p-3 rounded-full w-fit mb-4">
                  <benefit.icon className="h-6 w-6 text-belize-green" />
                </div>
                <h3 className="text-xl font-bold text-belize-blue mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipBenefits;
