
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, CreditCard } from "lucide-react";

const MembershipHero: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("membership-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-[80vh] flex items-center pt-24 sm:pt-28 pb-16 sm:pb-10 px-6 md:px-0 bg-gradient-to-b from-belize-blue/20 via-white to-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-belize-blue rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-belize-teal rounded-full blur-3xl translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-belize-coral rounded-full blur-3xl -translate-y-1/2"></div>
      </div>
      
      <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-belize-blue/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-belize-blue text-sm sm:text-base font-medium mb-3 sm:mb-4">
            <CreditCard className="h-4 w-4 sm:h-5 sm:w-5" />
            Monthly Membership Program
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            Become a <span className="text-belize-blue">Monthly Member</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
            Join our exclusive membership community helping to create lasting change for children in Belize through consistent monthly support and engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
            <Button 
              onClick={scrollToForm}
              className="bg-belize-blue hover:bg-belize-blue/90 text-white text-base sm:text-lg px-6 py-2 sm:px-8 sm:py-6 w-full sm:w-auto"
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
              <img 
                src="/lovable-uploads/51bfd02f-aeef-4c84-8b6c-2d1110b8ab28.png" 
                alt="Group of smiling Belizean children in school uniforms representing the beneficiaries of the monthly investment program" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg border-l-4 border-belize-green">
              <p className="font-bold text-belize-green text-sm sm:text-base">Monthly</p>
              <p className="text-xs sm:text-sm">Sustainable impact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipHero;
