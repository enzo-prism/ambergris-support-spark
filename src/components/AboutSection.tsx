import React from "react";
import { HeartHandshake, Globe, Sparkles, ArrowRight, CheckCircle2, Award, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui/reveal";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { trackInvestmentClick } from "@/lib/analytics";

const AboutSection: React.FC = () => {
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
    <section id="about" className="section-padding overflow-hidden bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-10 text-center md:mb-16">
          <span className="section-eyebrow mb-4">Our Mission</span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">About Belize Kids</h2>
          <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-lg">
            Founded by Don Listwin, Belize Kids is dedicated to improving the lives of children in Belize through strategic investments in healthcare, education, and community infrastructure.
          </p>
        </Reveal>

        {/* Hero Image Section */}
        <Reveal className="mb-12 md:mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-gray-100 shadow-glow">
            <div className="flex h-64 w-full items-center justify-center md:h-96">
              <img
                src="/lovable-uploads/bc7854c3-5f34-4095-955a-566d30b2ad86.png"
                alt="Belize Kids Vision Clinic event with children and volunteers from San Pedro Lions Club"
                className="max-h-full max-w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium md:text-base">
                Community partners working together at a Belize Kids Vision Clinic event, supporting children&apos;s healthcare needs in San Pedro.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-5">
            <Card className="h-full border-l-4 border-belize-green p-5 shadow-soft sm:p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900 sm:mb-4 sm:text-2xl">Transforming Lives in Belize</h3>
              <p className="mb-4 text-sm text-gray-600 sm:mb-6 sm:text-base">
                Belize Kids emerged from Don Listwin&apos;s desire to create sustainable solutions for underserved communities in Belize.
                We focus on projects that create lasting positive impact for the next generation.
              </p>

              <h4 className="mb-2 text-sm font-semibold text-gray-800 sm:mb-3 sm:text-base">Our Impact Areas:</h4>
              <ul className="mb-4 space-y-2 sm:mb-6">
                {impactPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-belize-green sm:h-5 sm:w-5" />
                    <span className="text-sm text-gray-600 sm:text-base">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-4 grid grid-cols-3 gap-2 sm:mb-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="rounded-xl bg-belize-light/60 p-2 text-center">
                    <div className="mb-1 flex justify-center">{achievement.icon}</div>
                    <p className="text-sm font-bold text-belize-green sm:text-base">{achievement.count}</p>
                    <p className="text-xs text-gray-600">{achievement.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-2">
                <Button asChild variant="outlineBelize" className="group w-full sm:w-auto">
                  <Link to="/leadership">
                    Meet Our Team
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Card>
          </Reveal>

          <div className="space-y-4 sm:space-y-6 md:col-span-7">
            {features.map((feature, index) => (
              <Reveal
                key={index}
                delay={index * 120}
                className="card-hover rounded-2xl border-l-4 border-belize-green bg-white p-5 shadow-soft sm:p-6"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                  <div className="mx-auto rounded-2xl bg-belize-green/10 p-3 text-belize-green sm:mx-0 sm:mt-1">
                    {feature.icon}
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="mb-1 text-lg font-bold text-gray-900 sm:mb-2 sm:text-xl">{feature.title}</h4>
                    <p className="text-sm text-gray-600 sm:text-base">{feature.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Separator className="my-12 bg-gray-100 md:my-16" />

        <Reveal className="rounded-3xl bg-gradient-to-r from-belize-light to-white p-6 shadow-soft sm:p-10">
          <div className="flex flex-col items-center gap-6 md:flex-row sm:gap-8">
            <div className="md:w-8/12">
              <h3 className="mb-2 text-center text-xl font-bold text-gray-900 sm:mb-3 md:text-left md:text-2xl">Four Ways You Can Help</h3>
              <p className="text-center text-sm text-gray-600 sm:text-base md:text-left">
                Join our community by donating, volunteering your skills, spreading awareness,
                or sponsoring specific projects. Your support directly improves education and healthcare
                for children in Belize.
              </p>
            </div>
            <div className="flex w-full justify-center md:w-4/12 md:justify-end">
              <Button asChild variant="belizeGreen" className="group w-full md:w-auto">
                <Link
                  to="/monthly-investment"
                  onClick={() => trackInvestmentClick("about_section", "monthly_investment")}
                >
                  Become an Investor
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;
