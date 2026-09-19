import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, BookOpen, GraduationCap, Building } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
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
      image: "/lovable-uploads/5c98d9b7-c36a-4f65-a62f-e9a9f52e87f0.png",
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

  const partnerships = [
    {
      name: "Stanford University",
      tag: "Medical Expertise",
      note: "Provides medical expertise for the Vision Clinic",
    },
    {
      name: "Belize Council for the Visually Impaired",
      tag: "Care Continuity",
      note: "Ensures ongoing eye care through subsidized eyewear",
    },
    {
      name: "San Pedro Lions Club",
      tag: "Logistical Support",
      note: "Assists with community-based projects and clinic operations",
    },
    {
      name: "Local Schools",
      tag: "Educational Integration",
      note: "Facilitates scholarship programs and educational initiatives",
    },
  ];

  return (
    <section id="impact" className="section-padding overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <span className="section-eyebrow mb-4">Making a Difference</span>
          <h2 className="mb-5 text-3xl font-bold text-gray-900 md:text-4xl">Our Impact</h2>
          <p className="text-lg text-gray-700">
            With complete transparency, we show how your investments directly improve the lives of children across Belize.
          </p>
        </Reveal>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {impactStats.map((stat, index) => (
            <Reveal key={index} delay={index * 120}>
              <Card className="card-hover h-full overflow-hidden border-none shadow-soft">
                <CardContent className="p-0">
                  <div className="flex h-full flex-col">
                    <div className={`${stat.color} flex items-center justify-center p-8`}>
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="mb-2 text-4xl font-extrabold text-belize-green">{stat.count}</h3>
                      <p className="font-medium text-gray-700">{stat.label}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mb-16 rounded-3xl bg-white p-6 shadow-soft sm:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-2xl font-bold text-belize-green">Key Partnerships</h3>
            <Badge variant="outline" className="gap-2 rounded-full border-belize-green/20 bg-belize-light px-3 py-1 text-belize-green">
              <TrendingUp className="h-4 w-4 text-belize-green" />
              <span className="text-sm font-medium">Strategic Collaboration</span>
            </Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {partnerships.map((partner) => (
              <div
                key={partner.name}
                className="rounded-2xl border border-belize-green/10 bg-belize-light/40 p-4"
              >
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-semibold text-gray-900">{partner.name}</span>
                  <span className="text-sm font-medium text-belize-green">{partner.tag}</span>
                </div>
                <p className="text-sm text-gray-600">{partner.note}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div>
          <div className="mb-10 flex flex-col items-center justify-between md:flex-row">
            <h3 className="text-2xl font-bold text-belize-green">Success Stories</h3>
            <p className="mt-2 max-w-md text-gray-600 md:mt-0">
              See how our initiatives are creating positive change in the lives of children across Belize.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {impactStories.map((story, index) => (
              <Reveal key={index} delay={index * 120}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:shadow-glow">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={story.image}
                      alt={`${story.name}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-grow p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-belize-green"></div>
                      <h4 className="text-xl font-bold text-belize-green">{story.name}{story.age ? `, ${story.age}` : ''}</h4>
                    </div>
                    <p className="text-gray-700">{story.story}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
