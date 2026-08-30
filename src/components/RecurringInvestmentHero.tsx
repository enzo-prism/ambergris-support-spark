
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CreditCard } from "lucide-react";
import { Image } from "@/components/ui/image";
import { trackInvestmentClick } from "@/lib/analytics";

const RecurringInvestmentHero: React.FC = () => {

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
            Monthly Recurring Investment
          </Badge>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Invest <span className="text-belize-blue">Monthly</span> in Belize's Future
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
            Create lasting change for children in Belize through consistent monthly support. Your recurring investment helps provide sustainable healthcare and education.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
            <Button
              asChild
              variant="belizeBlue"
              className="text-base sm:text-lg px-6 py-2 sm:px-8 sm:py-6 w-full sm:w-auto"
            >
              <a
                href="/monthly-investment#investment-form"
                onClick={() =>
                  trackInvestmentClick(
                    "recurring_investment_hero",
                    "investment_form",
                  )
                }
              >
                <CreditCard className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Start Monthly Investment
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative mt-8 w-full flex-1 lg:mt-0">
          <div className="relative mx-auto w-full max-w-sm px-2 sm:px-6">
            <div className="relative animate-float">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-belize-green/10 shadow-2xl">
                <Image 
                  src="https://imgur.com/jbbWRFj" 
                  alt="Group of smiling Belizean children representing the beneficiaries of the monthly investment program" 
                  className="h-full w-full object-cover"
                  fallbackSrc="/placeholder.svg"
                />
              </div>
              <div className="absolute bottom-3 right-3 rounded-lg border-l-4 border-belize-green bg-white p-3 shadow-lg sm:bottom-4 sm:right-4 sm:p-4">
                <p className="text-sm font-bold text-belize-green sm:text-base">Monthly</p>
                <p className="text-xs sm:text-sm">Sustainable impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecurringInvestmentHero;
