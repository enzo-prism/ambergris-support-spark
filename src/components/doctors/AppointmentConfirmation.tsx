
import React from "react";
import { CheckCircle, Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  avatar: React.ReactNode;
  serviceType: string;
  duration: string;
}

interface AppointmentConfirmationProps {
  selectedDate: Date;
  doctorName: string;
  time: string;
  onConfirm: () => void;
  onCancel: () => void;
  specialty?: string;
  duration?: string;
}

const AppointmentConfirmation: React.FC<AppointmentConfirmationProps> = ({
  selectedDate,
  doctorName,
  time,
  onConfirm,
  onCancel,
  specialty,
  duration
}) => {
  const { toast } = useToast();
  
  const handleConfirm = () => {
    toast({
      title: "Eye Care Appointment Confirmed",
      description: `Your appointment with ${doctorName} has been booked for ${format(selectedDate, 'EEEE, MMMM d, yyyy')} at ${time}.`,
    });
    onConfirm();
  };

  return (
    <Alert className="mb-4 border-belize-green/40 bg-white shadow-sm animate-in slide-in-from-bottom-5">
      <CheckCircle className="h-5 w-5 text-belize-green" />
      <div className="flex-1">
        <AlertTitle className="text-sm">Confirm Your Appointment</AlertTitle>
        <AlertDescription className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2 text-belize-coral" />
              <span>{format(selectedDate, 'EEEE, MMMM d, yyyy')}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-2 text-belize-coral" />
              <span>{time}{duration && ` (${duration})`}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-2 text-belize-coral" />
              <span>Stanford Belize Vision Clinic, San Pedro</span>
            </div>
            
            <div className="pl-6 text-sm">
              <p className="font-medium">{doctorName}</p>
              {specialty && <p className="text-xs text-gray-500">{specialty}</p>}
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant="belizeGreen"
              className="flex-1"
              onClick={handleConfirm}
            >
              Confirm
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </AlertDescription>
      </div>
    </Alert>
  );
};

export default AppointmentConfirmation;
