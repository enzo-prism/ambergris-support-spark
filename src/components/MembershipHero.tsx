
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MembershipHero: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("membership-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-[80vh] flex items-center pt-20 pb-10 bg-gradient-to-b from-belize-light via-white to-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-belize-blue rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-belize-teal rounded-full blur-3xl translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-belize-coral rounded-full blur-3xl -translate-y-1/2"></div>
      </div>
      
      <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block bg-belize-green/10 px-4 py-2 rounded-full text-belize-green font-medium mb-4">
            Monthly Giving Program
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Become a <span className="text-belize-green">Monthly Member</span> for $20
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
            Join our community of monthly supporters helping to create lasting change for children in Belize through education and healthcare initiatives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Button 
              onClick={scrollToForm}
              className="bg-belize-green hover:bg-belize-green/90 text-white text-lg px-8 py-6"
            >
              Become a Member Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative w-full max-w-md mx-auto animate-float">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl border border-belize-green/10">
              <img 
                src="/lovable-uploads/66bc1aad-e548-47ce-b19f-13f78397aa0c.png" 
                alt="Children in Belize benefiting from education and healthcare initiatives supported by monthly members" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border-l-4 border-belize-green">
              <p className="font-bold text-belize-green">$20</p>
              <p className="text-sm">Monthly impact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipHero;
