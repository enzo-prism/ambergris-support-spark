
import React from "react";
import { Building2, CheckCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const ClinicInfo: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size={isMobile ? "sm" : undefined} className="mb-4">
          <Building2 className="h-4 w-4 mr-2" />
          About SBVC
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="text-left mb-4">
          <SheetTitle>Stanford Belize Vision Clinic</SheetTitle>
        </SheetHeader>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-2">About the Clinic</h3>
            <p className="text-sm text-gray-600 mb-3">
              The Stanford Belize Vision Clinic (SBVC) operates through a partnership with Stanford University's 
              Department of Ophthalmology, providing essential eye care services to the San Pedro community and 
              surrounding areas.
            </p>
            <p className="text-sm text-gray-600">
              The clinic was established with the support of Belize Kids following hurricane damage to San Pedro, 
              and operates on an intermittent schedule based on visiting specialists.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">Partnership</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge className="bg-belize-green/10 text-belize-green hover:bg-belize-green/20 px-3 py-1">
                Stanford University Partnership
              </Badge>
              <Badge className="bg-belize-teal/10 text-belize-teal hover:bg-belize-teal/20 px-3 py-1">
                Belize Kids Support
              </Badge>
              <Badge className="bg-belize-blue/10 text-belize-blue hover:bg-belize-blue/20 px-3 py-1">
                Belize Council for the Visually Impaired
              </Badge>
              <Badge className="bg-belize-coral/10 text-belize-coral hover:bg-belize-coral/20 px-3 py-1">
                San Pedro Lions Club
              </Badge>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">Services Provided</h3>
            <ul className="space-y-1">
              <li className="flex items-start">
                <CheckCircle className="h-3.5 w-3.5 text-belize-green mr-2 mt-0.5" />
                <span className="text-sm text-gray-600">Primary eye examinations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-3.5 w-3.5 text-belize-green mr-2 mt-0.5" />
                <span className="text-sm text-gray-600">Pediatric eye screenings</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-3.5 w-3.5 text-belize-green mr-2 mt-0.5" />
                <span className="text-sm text-gray-600">Vision testing and prescriptions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-3.5 w-3.5 text-belize-green mr-2 mt-0.5" />
                <span className="text-sm text-gray-600">Subsidized eyewear for families in need</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-3.5 w-3.5 text-belize-green mr-2 mt-0.5" />
                <span className="text-sm text-gray-600">Specialized consultations with visiting doctors</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">Contact</h3>
            <div className="flex items-start">
              <MapPin className="h-4 w-4 text-belize-blue mr-2 mt-0.5" />
              <div>
                <p className="text-sm text-gray-700">
                  For inquiries about the clinic, please visit the San Pedro Lions Club.
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-2">
            <Button variant="outline" className="w-full" asChild>
              <a href="/projects" className="flex justify-center">
                Learn More About Our Projects
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ClinicInfo;
