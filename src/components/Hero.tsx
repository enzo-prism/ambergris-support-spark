
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  
  const scrollToDonate = () => {
    const donateElement = document.getElementById("donate");
    if (donateElement) {
      donateElement.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative min-h-[90vh] sm:min-h-screen flex items-center pt-20 md:pt-16 pb-12 md:pb-8 px-4 sm:px-6 md:px-0 bg-gradient-to-b from-belize-light via-white to-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="/lovable-uploads/2020/06/belize-trees.jpg" 
          alt="Belize background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 md:mb-6">
            Empowering Belizean Children to Build a <span className="text-belize-green">Brighter Future</span>
          </h1>
          <p className="text-base md:text-xl text-gray-700 mb-4 md:mb-8 max-w-2xl mx-auto lg:mx-0">
            Investing in Belizean children's education, health, and well-being with complete transparency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
            <Button 
              onClick={scrollToDonate} 
              className="bg-belize-green hover:bg-belize-green/90 text-white text-base sm:text-lg px-4 py-2 sm:px-6 sm:py-2.5 h-auto w-full sm:w-auto"
            >
              Invest Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="border-belize-green text-belize-green hover:bg-belize-green hover:text-white text-base sm:text-lg px-4 py-2 sm:px-6 sm:py-2.5 h-auto w-full sm:w-auto mt-2 sm:mt-0" 
              onClick={() => {
                const aboutElement = document.getElementById("about");
                if (aboutElement) {
                  aboutElement.scrollIntoView({
                    behavior: "smooth"
                  });
                }
              }}
            >
              Our Impact
            </Button>
            <Link to="/doctors" className="w-full sm:w-auto mt-2 sm:mt-0">
              <Button 
                variant="outline" 
                className="border-belize-teal text-belize-teal hover:bg-belize-teal hover:text-white text-base sm:text-lg px-4 py-2 sm:px-6 sm:py-2.5 h-auto w-full"
              >
                <Clock className="mr-2 h-4 w-4" />
                Find Doctors
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 relative mt-8 lg:mt-0">
          <div className="relative w-full max-w-xs mx-auto sm:max-w-sm animate-float">
            <div className="aspect-w-4 aspect-h-3 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-belize-green/10">
              <img 
                src="/lovable-uploads/2016/07/belize-kids-donates-to-lions-den.jpg" 
                alt="BelizeKids donation to Lions Den" 
                className="object-cover w-full h-full" 
              />
            </div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-white p-2 sm:p-4 rounded-lg shadow-lg border-l-4 border-belize-green">
              <p className="font-bold text-belize-green text-xs sm:text-base">100% of Investment</p>
              <p className="text-xs sm:text-sm">Directly to programs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
