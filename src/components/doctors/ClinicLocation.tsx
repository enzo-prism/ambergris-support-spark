
import React from "react";
import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog";

interface ClinicLocationProps {
  minimal?: boolean;
}

const ClinicLocation: React.FC<ClinicLocationProps> = ({ minimal = false }) => {
  const address = "Second Floor, San Pedro Lions Den, Barrier Reef Drive, San Pedro, Ambergris Caye, Belize";
  // Using a more reliable Google Maps link format with properly encoded address
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=San+Pedro+Lions+Den+Barrier+Reef+Drive+San+Pedro+Belize";

  if (minimal) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-3 mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-belize-coral mr-2 flex-shrink-0" />
          <div className="text-sm">San Pedro Lions Den, Barrier Reef Drive</div>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-belize-blue px-2"
          onClick={() => window.open(mapUrl, '_blank')}
        >
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full mb-4 justify-between">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-belize-coral mr-2" />
            <span className="text-sm md:text-base">SBVC Location</span>
          </div>
          <ExternalLink className="h-4 w-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Stanford Belize Vision Clinic</DialogTitle>
          <DialogDescription>Located in the heart of San Pedro</DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-slate-50 p-3 rounded-md">
            <p className="text-sm font-medium mb-1">Address:</p>
            <p className="text-sm text-gray-700">{address}</p>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Partners:</p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-belize-green/10 text-belize-green hover:bg-belize-green/20">
                Stanford University
              </Badge>
              <Badge className="bg-belize-teal/10 text-belize-teal hover:bg-belize-teal/20">
                BelizeKids.org
              </Badge>
              <Badge className="bg-belize-blue/10 text-belize-blue hover:bg-belize-blue/20">
                Belize Council for the Visually Impaired
              </Badge>
              <Badge className="bg-belize-coral/10 text-belize-coral hover:bg-belize-coral/20">
                San Pedro Lions Club
              </Badge>
            </div>
          </div>

          <div className="mt-4">
            <Button 
              className="w-full bg-belize-blue hover:bg-belize-blue/90"
              onClick={() => window.open(mapUrl, '_blank')}
            >
              <MapPin className="h-4 w-4 mr-2" />
              Open in Maps
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ClinicLocation;
