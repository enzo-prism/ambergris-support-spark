
import React from "react";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format, isSameDay } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

interface TimeSlot {
  id: string;
  doctorId: number;
  time: string;
  available: boolean;
}

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  avatar: React.ReactNode;
  serviceType: string;
  duration: string;
}

interface DoctorSlot extends TimeSlot {
  doctor: Doctor;
}

interface AppointmentCalendarProps {
  selectedDate: Date;
  onSelectDate: (date: Date | undefined) => void;
  availabilityDates: string[];
  slotsByTime: Record<string, DoctorSlot[]>;
  selectedSlot: string | null;
  onSelectSlot: (slotId: string) => void;
}

const AppointmentCalendar: React.FC<AppointmentCalendarProps> = ({
  selectedDate,
  onSelectDate,
  availabilityDates,
  slotsByTime,
  selectedSlot,
  onSelectSlot,
}) => {
  const isMobile = useIsMobile();

  const isDayWithAvailability = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return availabilityDates.includes(dateStr);
  };

  return (
    <div className={`grid grid-cols-1 ${isMobile ? "" : "md:grid-cols-2"} gap-4 mb-4`}>
      <Card className="border-0 shadow-sm bg-white overflow-hidden h-full">
        <CardContent className="p-0">
          <div className="bg-gradient-to-r from-green-50 to-green-100 px-3 py-2 border-b border-green-100">
            <div className="flex items-center">
              <CalendarIcon className="h-4 w-4 text-belize-green mr-2" />
              <h2 className="text-sm font-medium text-gray-900">Select Date</h2>
            </div>
          </div>
          
          <div className="p-3">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={onSelectDate}
              className="mx-auto pointer-events-auto"
              modifiers={{
                hasAvailability: (date) => isDayWithAvailability(date)
              }}
              modifiersClassNames={{
                hasAvailability: "bg-green-100 font-medium text-green-900 hover:bg-green-200"
              }}
              disabled={(date) => {
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                return date < yesterday || !isDayWithAvailability(date);
              }}
            />
            
            <div className="mt-2 flex items-center justify-center text-xs text-gray-500">
              <div className="flex items-center mr-3">
                <div className="w-2 h-2 bg-green-100 rounded-full mr-1"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gray-200 rounded-full mr-1"></div>
                <span>Not Available</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm bg-white overflow-hidden h-full">
        <CardContent className="p-0">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-3 py-2 border-b border-blue-100">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-belize-blue mr-2" />
              <h2 className="text-sm font-medium text-gray-900 truncate">
                Times for {format(selectedDate, "EEE, MMM d")}
              </h2>
            </div>
          </div>
          
          <div className="p-3 max-h-[350px] overflow-y-auto">
            {Object.keys(slotsByTime).length > 0 ? (
              <div className="space-y-3">
                {Object.entries(slotsByTime).map(([time, slots]) => (
                  <div key={time} className="border-b border-gray-100 pb-3 last:pb-0 last:border-b-0">
                    <h3 className="text-xs font-medium text-gray-700 mb-1.5 flex items-center">
                      <Clock className="h-3.5 w-3.5 text-belize-green mr-1" />
                      {time}
                    </h3>
                    
                    <div className="grid grid-cols-1 gap-1.5">
                      {slots.map((slot) => (
                        <div 
                          key={slot.id} 
                          className={`flex justify-between items-center p-2 rounded-md border ${
                            selectedSlot === slot.id ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-300'
                          } cursor-pointer transition-colors`}
                          onClick={() => onSelectSlot(slot.id)}
                        >
                          <div className="flex items-center space-x-2">
                            <div className="bg-gray-100 p-1.5 rounded-full">
                              {slot.doctor?.avatar}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 text-xs">{slot.doctor?.name}</p>
                              <p className="text-xs text-gray-500">{slot.doctor?.specialty}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-6 text-center">
                <Clock className="h-8 w-8 text-gray-300 mx-auto mb-2" />
                <p className="text-gray-500 text-sm">No available appointments</p>
                <p className="text-gray-400 text-xs">Please select another date</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentCalendar;
