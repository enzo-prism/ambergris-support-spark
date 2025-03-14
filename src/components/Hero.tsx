
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToDonate = () => {
    const donateElement = document.getElementById("donate");
    if (donateElement) {
      donateElement.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return <div className="relative min-h-[90vh] sm:min-h-screen flex items-center pt-24 md:pt-16 pb-16 md:pb-8 px-6 md:px-0 bg-gradient-to-b from-belize-light via-white to-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-belize-blue rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-belize-teal rounded-full blur-3xl translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-belize-coral rounded-full blur-3xl -translate-y-1/2"></div>
      </div>
      
      <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-relaxed mb-4 md:mb-6 lg:text-5xl">
            Empowering Belizean Children to Build a <span className="text-belize-green">Brighter Future</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
            Investing in Belizean children's education, health, and well-being with complete transparency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
            <Button onClick={scrollToDonate} className="bg-belize-green hover:bg-belize-green/90 text-white text-base sm:text-lg px-6 py-2 sm:px-8 sm:py-6 w-full sm:w-auto">
              Invest Today
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="outline" className="border-belize-green text-belize-green hover:bg-belize-green hover:text-white text-base sm:text-lg px-6 py-2 sm:px-8 sm:py-6 w-full sm:w-auto mt-2 sm:mt-0" onClick={() => {
            const aboutElement = document.getElementById("about");
            if (aboutElement) {
              aboutElement.scrollIntoView({
                behavior: "smooth"
              });
            }
          }}>
              Our Impact
            </Button>
          </div>
        </div>
        <div className="flex-1 relative mt-8 lg:mt-0">
          <div className="relative w-full max-w-sm mx-auto animate-float">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl border border-belize-green/10">
              <img src="/lovable-uploads/b627ac31-d9fd-4dbb-bb4d-8a4881b3813d.png" alt="A Belizean child receives compassionate care from a dedicated healthcare professional in a well-equipped clinic, surrounded by tools that transform lives." className="object-cover w-full h-full" />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg border-l-4 border-belize-green">
              <p className="font-bold text-belize-green text-sm sm:text-base">100% of Investment</p>
              <p className="text-xs sm:text-sm">Directly to programs</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default Hero;
