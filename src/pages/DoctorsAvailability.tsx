import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Eye,
  Glasses,
} from "lucide-react";
import { format, addDays } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import ClinicLocation from "@/components/doctors/ClinicLocation";
import AppointmentCalendar from "@/components/doctors/AppointmentCalendar";
import ClinicInfo from "@/components/doctors/ClinicInfo";
import AppointmentConfirmation from "@/components/doctors/AppointmentConfirmation";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  avatar: React.ReactNode;
  serviceType: string;
  duration: string;
}

interface TimeSlot {
  id: string;
  doctorId: number;
  time: string;
  available: boolean;
}

interface DoctorSlot extends TimeSlot {
  doctor: Doctor;
}

const generateDoctorData = () => {
  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Maria Rodriguez",
      specialty: "Pediatric Ophthalmology",
      avatar: <Eye className="h-5 w-5 text-belize-green" />,
      serviceType: "Children's eye screening",
      duration: "30 min",
    },
    {
      id: 2,
      name: "Dr. James Wilson",
      specialty: "Optometrist",
      avatar: <Glasses className="h-5 w-5 text-belize-green" />,
      serviceType: "Routine eye exam",
      duration: "30 min",
    },
    {
      id: 3,
      name: "Dr. Anna Chen",
      specialty: "Cornea Specialist",
      avatar: <Eye className="h-5 w-5 text-belize-green" />,
      serviceType: "LASIK consultation",
      duration: "60 min",
    },
    {
      id: 4,
      name: "Dr. Robert Johnson",
      specialty: "Retina Specialist",
      avatar: <Eye className="h-5 w-5 text-belize-green" />,
      serviceType: "Retinal disorder assessment",
      duration: "45 min",
    },
    {
      id: 5,
      name: "Dr. Sarah Thompson",
      specialty: "Vision Therapy",
      avatar: <Glasses className="h-5 w-5 text-belize-green" />,
      serviceType: "Vision therapy session",
      duration: "45 min",
    }
  ];

  const timeSlots = [
    "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", 
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
  ];

  const availability: Record<string, TimeSlot[]> = {};
  const today = new Date();

  for (let i = 0; i < 30; i++) {
    const date = addDays(today, i);
    const dateStr = format(date, 'yyyy-MM-dd');
    
    availability[dateStr] = [];
    
    if (date.getDay() === 6 || date.getDay() === 0) {
      continue;
    }
    
    doctors.forEach(doctor => {
      if (
        (doctor.id === 1 && [1, 3, 5].includes(date.getDay())) || 
        (doctor.id === 2 && [2, 4, 6].includes(date.getDay())) || 
        (doctor.id === 3 && [1, 3, 4].includes(date.getDay())) || 
        (doctor.id === 4 && [2, 5].includes(date.getDay())) || 
        (doctor.id === 5 && [1, 4].includes(date.getDay()))
      ) {
        const slots: string[] = [];
        const numSlots = Math.floor(Math.random() * 4) + 1;
        
        for (let j = 0; j < numSlots; j++) {
          const randomTimeIndex = Math.floor(Math.random() * timeSlots.length);
          const time = timeSlots[randomTimeIndex];
          
          if (!slots.includes(time)) {
            slots.push(time);
          }
        }
        
        slots.sort();
        
        slots.forEach(time => {
          availability[dateStr].push({
            id: `${dateStr}-${doctor.id}-${time}`,
            doctorId: doctor.id,
            time: time,
            available: true
          });
        });
      }
    });
    
    availability[dateStr].sort((a, b) => {
      return timeSlots.indexOf(a.time) - timeSlots.indexOf(b.time);
    });
  }

  return { doctors, availability };
};

const { doctors, availability } = generateDoctorData();

const DoctorsAvailability: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const datesWithAvailability = useMemo(() => {
    return Object.keys(availability).filter(dateStr => availability[dateStr].length > 0);
  }, []);

  const slotsForSelectedDate = useMemo(() => {
    const dateStr = format(selectedDate, 'yyyy-MM-dd');
    return availability[dateStr] || [];
  }, [selectedDate]);

  const slotsByTime = useMemo(() => {
    const grouped: Record<string, DoctorSlot[]> = {};
    slotsForSelectedDate.forEach(slot => {
      if (!grouped[slot.time]) {
        grouped[slot.time] = [];
      }
      const doctor = doctors.find(d => d.id === slot.doctorId);
      if (doctor) {
        grouped[slot.time].push({
          ...slot,
          doctor
        });
      }
    });
    return grouped;
  }, [slotsForSelectedDate]);

  const handleBookAppointment = (doctorName: string, time: string) => {
    toast({
      title: "Eye Care Appointment Confirmation",
      description: `Your appointment with ${doctorName} at ${time} on ${format(selectedDate, 'EEEE, MMMM d, yyyy')} has been booked.`,
    });
    setSelectedSlot(null);
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      setSelectedSlot(null);
    }
  };

  const selectedDoctorAppointment = useMemo(() => {
    if (!selectedSlot) return null;
    
    for (const time in slotsByTime) {
      const found = slotsByTime[time].find(slot => slot.id === selectedSlot);
      if (found) {
        return {
          time,
          doctor: found.doctor
        };
      }
    }
    return null;
  }, [selectedSlot, slotsByTime]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Book Eye Care Appointments | Stanford Belize Vision Clinic</title>
        <meta name="description" content="Schedule eye care appointments at the Stanford Belize Vision Clinic (SBVC) in San Pedro, Ambergris Caye, Belize." />
      </Helmet>
      
      <Navbar />
      
      <main className={`container-custom ${isMobile ? 'pt-6 pb-10' : 'pt-12 md:pt-16 pb-10'}`}>
        <div className="max-w-2xl mx-auto">
          <div className="mb-4 text-center">
            <h1 className={`${isMobile ? 'text-xl' : 'text-2xl md:text-3xl'} font-bold text-belize-green mb-1`}>
              Book an Eye Care Appointment
            </h1>
            <p className="text-gray-600 text-sm">
              Stanford Belize Vision Clinic (SBVC) • San Pedro, Ambergris Caye
            </p>
          </div>
          
          <ClinicLocation minimal={true} />

          <div className="flex justify-between items-center mb-4">
            <ClinicInfo />
            
            {isMobile ? null : (
              <ClinicLocation />
            )}
          </div>
          
          {selectedDoctorAppointment ? (
            <AppointmentConfirmation 
              selectedDate={selectedDate}
              doctorName={selectedDoctorAppointment.doctor.name}
              time={selectedDoctorAppointment.time}
              specialty={selectedDoctorAppointment.doctor.specialty}
              duration={selectedDoctorAppointment.doctor.duration}
              onConfirm={() => handleBookAppointment(selectedDoctorAppointment.doctor.name, selectedDoctorAppointment.time)}
              onCancel={() => setSelectedSlot(null)}
            />
          ) : null}
          
          <AppointmentCalendar
            selectedDate={selectedDate}
            onSelectDate={handleDateSelect}
            availabilityDates={datesWithAvailability}
            slotsByTime={slotsByTime}
            selectedSlot={selectedSlot}
            onSelectSlot={setSelectedSlot}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DoctorsAvailability;
