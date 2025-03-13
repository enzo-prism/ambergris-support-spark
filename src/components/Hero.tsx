
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToDonate = () => {
    const donateElement = document.getElementById("donate");
    if (donateElement) {
      donateElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center pt-16 bg-gradient-to-b from-belize-light to-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-belize-blue rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-belize-teal rounded-full blur-3xl translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-belize-coral rounded-full blur-3xl -translate-y-1/2"></div>
      </div>
      
      <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Helping <span className="text-belize-blue">Children</span> in Belize
            <br />Build a <span className="text-belize-coral">Brighter Future</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
            100% of your donation goes directly to supporting children in Belize through education, healthcare, and community programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Button 
              onClick={scrollToDonate}
              className="button-donate text-lg px-8 py-6"
            >
              Donate Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-belize-blue text-belize-blue hover:bg-belize-blue hover:text-white text-lg px-8 py-6"
              onClick={() => {
                const aboutElement = document.getElementById("about");
                if (aboutElement) {
                  aboutElement.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative w-full max-w-md mx-auto animate-float">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/b627ac31-d9fd-4dbb-bb4d-8a4881b3813d.png" 
                alt="Children in Belize at vision clinic" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="font-bold text-belize-blue">100%</p>
              <p className="text-sm">Directly to programs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
