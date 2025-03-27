
import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Calendar as CalendarIcon,
  Clock, 
  MapPin,
  Eye,
  Glasses,
  CheckCircle,
  ArrowRight,
  User,
  Building2,
  Mail,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { Calendar } from "@/components/ui/calendar";
import { format, addDays, isSameDay } from "date-fns";

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

  const isDayWithAvailability = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return datesWithAvailability.includes(dateStr);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Eye Care Specialists | Stanford Belize Vision Clinic</title>
        <meta name="description" content="Find available eye care specialists for children at the Stanford Belize Vision Clinic (SBVC) in San Pedro, Ambergris Caye, Belize." />
      </Helmet>
      
      <Navbar />
      
      <main className="container-custom pt-12 md:pt-20 pb-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-belize-green mb-2">
              Book an Eye Care Appointment
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              All appointments take place at the <span className="font-medium">Stanford Belize Vision Clinic (SBVC)</span> located on the second floor of the San Pedro Lions Den, Barrier Reef Drive, San Pedro, Ambergris Caye.
            </p>
          </div>

          {/* Clinic Information Card */}
          <Card className="border-0 shadow-md bg-white mb-8 overflow-hidden">
            <div className="grid md:grid-cols-12 gap-0">
              <div className="md:col-span-8 p-6">
                <h2 className="text-xl font-bold text-belize-green mb-4 flex items-center">
                  <Building2 className="h-5 w-5 mr-2" />
                  About Stanford Belize Vision Clinic
                </h2>
                <p className="text-gray-700 mb-4">
                  The Stanford Belize Vision Clinic (SBVC) operates through a partnership with Stanford University's Department of Ophthalmology, providing essential eye care services to the community of San Pedro and surrounding areas. The clinic was established with the support of BelizeKids.org following hurricane damage to San Pedro.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-belize-coral mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-gray-600">Second Floor, San Pedro Lions Den</p>
                      <p className="text-sm text-gray-600">Barrier Reef Drive, San Pedro</p>
                      <p className="text-sm text-gray-600">Ambergris Caye, Belize</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-belize-coral mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Contact</p>
                      <p className="text-sm text-gray-600">San Pedro Lions Club</p>
                      <p className="text-sm text-gray-600">Stanford Department of Ophthalmology</p>
                      <a href="mailto:info@belizekids.org" className="text-sm text-belize-blue hover:underline">info@belizekids.org</a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-belize-green/10 text-belize-green hover:bg-belize-green/20 px-3 py-1">
                    Stanford University Partnership
                  </Badge>
                  <Badge className="bg-belize-teal/10 text-belize-teal hover:bg-belize-teal/20 px-3 py-1">
                    BelizeKids.org Support
                  </Badge>
                  <Badge className="bg-belize-blue/10 text-belize-blue hover:bg-belize-blue/20 px-3 py-1">
                    Belize Council for the Visually Impaired
                  </Badge>
                  <Badge className="bg-belize-coral/10 text-belize-coral hover:bg-belize-coral/20 px-3 py-1">
                    San Pedro Lions Club
                  </Badge>
                </div>
                <div className="mt-4">
                  <a href="https://med.stanford.edu/ophthalmology/news-and-media/global-impact.html" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="text-belize-blue">
                      Stanford Ophthalmology Global Impact
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="md:col-span-4 bg-belize-blue/10 p-6 flex flex-col justify-center">
                <h3 className="text-lg font-medium text-belize-green mb-3">Services Provided</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-belize-green mr-2 mt-0.5" />
                    <span className="text-sm">Primary eye examinations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-belize-green mr-2 mt-0.5" />
                    <span className="text-sm">Pediatric eye screenings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-belize-green mr-2 mt-0.5" />
                    <span className="text-sm">Vision testing and prescriptions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-belize-green mr-2 mt-0.5" />
                    <span className="text-sm">Subsidized eyewear for families in need</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-belize-green mr-2 mt-0.5" />
                    <span className="text-sm">Specialized consultations with visiting doctors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-belize-green mr-2 mt-0.5" />
                    <span className="text-sm">Referrals to Belize Council for the Visually Impaired</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4 italic">
                  Note: Services vary based on visiting medical professionals' schedule
                </p>
              </div>
            </div>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5">
              <Card className="border-0 shadow-sm bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 px-4 py-3 border-b border-green-100">
                    <div className="flex items-center">
                      <CalendarIcon className="h-5 w-5 text-belize-green mr-2" />
                      <h2 className="font-medium text-gray-900">Select a Date</h2>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={handleDateSelect}
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
                    
                    <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                      <div className="flex items-center mr-4">
                        <div className="w-3 h-3 bg-green-100 rounded-full mr-1"></div>
                        <span>Available</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gray-200 rounded-full mr-1"></div>
                        <span>Not Available</span>
                      </div>
                    </div>
                    <div className="mt-4 text-xs text-gray-500 text-center">
                      <p>The clinic operates on an intermittent schedule based on visiting specialists. The calendar shows dates when doctors are available.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-7">
              <Card className="border-0 shadow-sm bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-3 border-b border-blue-100">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-belize-blue mr-2" />
                      <h2 className="font-medium text-gray-900">
                        Available Times for {format(selectedDate, "EEEE, MMMM d, yyyy")}
                      </h2>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    {Object.keys(slotsByTime).length > 0 ? (
                      <div className="space-y-4">
                        {Object.entries(slotsByTime).map(([time, slots]) => (
                          <div key={time} className="border-b border-gray-100 pb-4 last:pb-0 last:border-b-0">
                            <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                              <Clock className="h-4 w-4 text-belize-green mr-1" />
                              {time}
                            </h3>
                            
                            <div className="grid grid-cols-1 gap-2">
                              {slots.map((slot) => (
                                <div 
                                  key={slot.id} 
                                  className={`flex justify-between items-center p-3 rounded-md border ${
                                    selectedSlot === slot.id ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-300'
                                  } cursor-pointer transition-colors`}
                                  onClick={() => setSelectedSlot(slot.id)}
                                >
                                  <div className="flex items-center">
                                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                                      {slot.doctor?.avatar}
                                    </div>
                                    <div>
                                      <p className="font-medium text-gray-900 text-sm">{slot.doctor?.name}</p>
                                      <p className="text-xs text-gray-600">{slot.doctor?.specialty}</p>
                                    </div>
                                  </div>
                                  {selectedSlot === slot.id && (
                                    <Button
                                      className="bg-belize-green hover:bg-belize-green/90 text-white text-xs h-8 px-3"
                                      onClick={() => handleBookAppointment(slot.doctor?.name || '', slot.time)}
                                    >
                                      Book
                                    </Button>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="py-8 text-center">
                        <Clock className="h-10 w-10 text-gray-300 mx-auto mb-2" />
                        <p className="text-gray-500 font-medium">No available appointments</p>
                        <p className="text-gray-400 text-sm">Please select another date</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              {selectedSlot && (
                <Card className="border-0 shadow-sm bg-white overflow-hidden mt-4">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">Appointment Details</h3>
                        <p className="text-sm text-gray-600">
                          {format(selectedDate, "EEEE, MMMM d, yyyy")} at {
                            Object.entries(slotsByTime).find(([time, slots]) => 
                              slots.some(s => s.id === selectedSlot)
                            )?.[0] || ''
                          }
                        </p>
                      </div>
                      <Button
                        className="bg-belize-green hover:bg-belize-green/90 text-white"
                        onClick={() => {
                          const slotInfo = Object.values(slotsByTime)
                            .flat()
                            .find(s => s.id === selectedSlot);
                          
                          if (slotInfo) {
                            handleBookAppointment(slotInfo.doctor?.name || '', slotInfo.time);
                          }
                        }}
                      >
                        Confirm Booking
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DoctorsAvailability;
