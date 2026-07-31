
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarClock } from "lucide-react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import {
  trackDoctorAppointmentClick,
  trackInvestmentClick,
} from "@/lib/analytics";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] sm:min-h-screen flex items-center pt-20 md:pt-16 pb-12 md:pb-8 px-4 sm:px-6 md:px-0 bg-gradient-to-b from-belize-light via-white to-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image 
          src="https://imgur.com/r8J764N" 
          alt="Boca Del Rio Playground" 
          className="absolute inset-0 w-full h-full object-cover"
          fallbackSrc="/placeholder.svg"
        />
      </div>
      
      <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 md:mb-6">
            Empowering Belizean Children to Build a <span className="text-belize-green">Brighter Future</span>
          </h1>
          <p className="text-base md:text-xl text-gray-700 mb-4 md:mb-8 max-w-2xl mx-auto lg:mx-0">
            Investing in Belizean children's education, health, and well-being with complete transparency and care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
            <Button
              asChild
                variant="belizeCoral"
                className="text-base sm:text-lg px-4 py-2 sm:px-6 sm:py-2.5 h-auto w-full"
            >
              <Link
                to="/monthly-investment"
                className="w-full sm:w-auto"
                onClick={() => trackInvestmentClick("hero_primary", "monthly_investment")}
              >
                Invest Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outlineBelize"
              className="text-base sm:text-lg px-4 py-2 sm:px-6 sm:py-2.5 h-auto w-full sm:w-auto mt-2 sm:mt-0"
            >
              <a href="/#about">Our Impact</a>
            </Button>
            <Button
              asChild
                variant="outlineTeal" 
                className="text-base sm:text-lg px-4 py-2 sm:px-6 sm:py-2.5 h-auto w-full"
            >
              <Link
                to="/doctors"
                className="w-full sm:w-auto mt-2 sm:mt-0"
                onClick={() => trackDoctorAppointmentClick("hero_secondary", "doctors")}
              >
                <CalendarClock className="mr-2 h-4 w-4" />
                Vision Clinic Updates
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 relative mt-8 lg:mt-0">
          <div className="relative w-full max-w-xs mx-auto sm:max-w-sm animate-float">
            <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-belize-green/10">
              <Image 
                src="https://imgur.com/aFMdr3v" 
                alt="Belizean children at school" 
                className="object-cover w-full h-full"
                fallbackSrc="/placeholder.svg"
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
