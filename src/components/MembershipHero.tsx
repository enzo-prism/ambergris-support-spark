
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, CreditCard, Award, CheckCircle2 } from "lucide-react";
import { Image } from "@/components/ui/image";
import { trackInvestmentClick } from "@/lib/analytics";

const MembershipHero: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("membership-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const memberBenefits = [
    "Be part of a community creating lasting change",
    "Track your impact with regular updates",
    "100% of your contribution goes to programs",
    "Join strategic partnerships with Stanford and local organizations"
  ];

  return (
    <div className="relative min-h-[80vh] flex items-center pt-24 sm:pt-28 pb-16 sm:pb-10 px-6 md:px-0 bg-gradient-to-b from-belize-blue/20 via-white to-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-belize-blue rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-belize-teal rounded-full blur-3xl translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-belize-coral rounded-full blur-3xl -translate-y-1/2"></div>
      </div>
      
      <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="flex-1 text-center lg:text-left">
          <Badge variant="blue" className="mb-3 gap-2 px-3 py-1.5 text-sm font-medium sm:mb-4 sm:px-4 sm:py-2 sm:text-base">
            <CreditCard className="h-4 w-4 sm:h-5 sm:w-5" />
            Monthly Membership Program
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            Become a <span className="text-belize-blue">Monthly Member</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
            Join our exclusive membership community helping to create lasting change for children in Belize through consistent monthly support and engagement.
          </p>
          
          <div className="mb-8 hidden lg:block">
            <h3 className="text-xl font-bold text-belize-green mb-4">Founded by Don Listwin to Create Sustainable Change</h3>
            <div className="grid grid-cols-2 gap-3">
              {memberBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-belize-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
            <Button 
              onClick={() => {
                trackInvestmentClick("membership_hero", "membership_form");
                scrollToForm();
              }}
              variant="belizeBlue"
              className="text-base sm:text-lg px-6 py-2 sm:px-8 sm:py-6 w-full sm:w-auto"
            >
              <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Become a Member
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
        <div className="flex-1 relative mt-8 lg:mt-0">
          <div className="relative w-full max-w-sm mx-auto animate-float">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl border border-belize-green/10">
              <Image 
                src="https://imgur.com/NVF6d3J" 
                alt="Belizean children representing the beneficiaries of the membership program" 
                className="object-cover w-full h-full"
                fallbackSrc="/placeholder.svg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg border-l-4 border-belize-green">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-belize-green" />
                <div>
                  <p className="font-bold text-belize-green text-sm sm:text-base">3,266+ Scholarships</p>
                  <p className="text-xs sm:text-sm">Awarded since founding</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-belize-light/50 p-4 rounded-lg border border-belize-blue/10 lg:hidden">
            <h3 className="font-bold text-belize-green mb-3">Founded by Don Listwin to Create Sustainable Change</h3>
            <div className="grid grid-cols-1 gap-2">
              {memberBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-belize-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipHero;
