
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Activity, Bell, Users, Globe, Heart, CreditCard, Handshake, Megaphone, UserPlus } from "lucide-react";

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
      title: "Member Community",
      description: "Join a community of like-minded members dedicated to transforming lives of Belizean children."
    },
    {
      icon: Globe,
      title: "Annual Impact Report",
      description: "Receive a detailed annual report showing the collective impact of our membership community."
    },
    {
      icon: Heart,
      title: "100% Investment Model",
      description: "Every dollar of your membership goes directly to programs, not administrative costs."
    }
  ];

  const waysToHelp = [
    {
      icon: <CreditCard className="h-6 w-6 text-white" />,
      title: "Monthly Donations",
      description: "Financial contributions fund scholarships, medical equipment, and construction projects.",
      color: "bg-belize-green"
    },
    {
      icon: <Handshake className="h-6 w-6 text-white" />,
      title: "Volunteer",
      description: "Share your expertise in medical services, teaching, or other professional skills.",
      color: "bg-belize-teal"
    },
    {
      icon: <Megaphone className="h-6 w-6 text-white" />,
      title: "Advocacy",
      description: "Raise awareness about our work to encourage broader support from donors and partners.",
      color: "bg-belize-coral"
    },
    {
      icon: <UserPlus className="h-6 w-6 text-white" />,
      title: "Sponsorships",
      description: "Sponsor specific projects like classroom construction or healthcare initiatives.",
      color: "bg-belize-blue"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-belize-blue/10 px-4 py-2 rounded-full mb-4">
            <CreditCard className="h-5 w-5 text-belize-blue" />
            <span className="text-belize-blue font-semibold">Membership Program</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-belize-blue mb-4">Member Benefits</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            When you become a monthly member, you're joining an exclusive community investing in the future of Belizean children through consistent, long-term support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-belize-blue/10 p-3 rounded-full w-fit mb-4">
                  <benefit.icon className="h-6 w-6 text-belize-blue" />
                </div>
                <h3 className="text-xl font-bold text-belize-blue mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-belize-green mb-4">Four Ways You Can Help</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              There are multiple ways to contribute to BelizeKids.org's mission of improving education and healthcare for children in Belize.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {waysToHelp.map((way, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden">
                <div className={`${way.color} p-6 flex justify-center`}>
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    {way.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-belize-green mb-2">{way.title}</h3>
                  <p className="text-gray-700">{way.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipBenefits;
