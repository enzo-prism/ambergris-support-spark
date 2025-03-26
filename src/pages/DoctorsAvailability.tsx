
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Calendar,
  Clock, 
  Search,
  MapPin,
  Eye,
  Glasses,
  CheckCircle,
  CalendarClock,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Maria Rodriguez",
    specialty: "Pediatric Ophthalmology",
    location: "Belize City Eye Clinic",
    icon: <Eye className="h-5 w-5 text-belize-green" />,
    availability: [
      { day: "Monday", slots: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"] },
      { day: "Wednesday", slots: ["9:00 AM - 12:00 PM"] },
      { day: "Friday", slots: ["2:00 PM - 5:00 PM"] },
    ],
    nextAvailable: "Today at 2:00 PM",
    status: "available",
    services: ["Pediatric eye exams", "Strabismus treatment", "Vision therapy"]
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    specialty: "Optometrist",
    location: "San Pedro Vision Center",
    icon: <Glasses className="h-5 w-5 text-belize-green" />,
    availability: [
      { day: "Tuesday", slots: ["8:00 AM - 12:00 PM"] },
      { day: "Thursday", slots: ["8:00 AM - 12:00 PM", "1:00 PM - 4:00 PM"] },
      { day: "Saturday", slots: ["9:00 AM - 1:00 PM"] },
    ],
    nextAvailable: "Tomorrow at 8:00 AM",
    status: "upcoming",
    services: ["Vision testing", "Eyeglass prescriptions", "Contact lens fittings"]
  },
  {
    id: 3,
    name: "Dr. Anna Chen",
    specialty: "Cornea Specialist",
    location: "Belmopan Eye Care Center",
    icon: <Eye className="h-5 w-5 text-belize-green" />,
    availability: [
      { day: "Monday", slots: ["10:00 AM - 2:00 PM"] },
      { day: "Wednesday", slots: ["10:00 AM - 2:00 PM"] },
      { day: "Thursday", slots: ["1:00 PM - 5:00 PM"] },
    ],
    nextAvailable: "2 days from now",
    status: "booked",
    services: ["Corneal disease treatment", "LASIK consultations", "Dry eye management"]
  },
  {
    id: 4,
    name: "Dr. Robert Johnson",
    specialty: "Retina Specialist",
    location: "Belize City Eye Institute",
    icon: <Eye className="h-5 w-5 text-belize-green" />,
    availability: [
      { day: "Tuesday", slots: ["9:00 AM - 1:00 PM"] },
      { day: "Friday", slots: ["9:00 AM - 1:00 PM", "2:00 PM - 4:00 PM"] },
    ],
    nextAvailable: "Friday at 9:00 AM",
    status: "upcoming",
    services: ["Retinal disorders", "Diabetic eye exams", "Macular degeneration treatment"]
  },
  {
    id: 5,
    name: "Dr. Sarah Thompson",
    specialty: "Vision Therapy",
    location: "Placencia Vision Center",
    icon: <Glasses className="h-5 w-5 text-belize-green" />,
    availability: [
      { day: "Monday", slots: ["1:00 PM - 5:00 PM"] },
      { day: "Thursday", slots: ["9:00 AM - 1:00 PM"] },
    ],
    nextAvailable: "In 30 minutes",
    status: "available",
    services: ["Vision therapy", "Eye exercises", "Visual skills development"]
  }
];

const upcomingOpenings = [
  {
    id: 101,
    doctor: "Dr. Maria Rodriguez",
    specialty: "Pediatric Ophthalmology",
    time: "Today at 2:00 PM",
    location: "Belize City Eye Clinic", 
    duration: "30 min",
    service: "Children's eye screening"
  },
  {
    id: 102,
    doctor: "Dr. Sarah Thompson",
    specialty: "Vision Therapy",
    time: "Today at 3:15 PM",
    location: "Placencia Vision Center",
    duration: "45 min",
    service: "Vision therapy session" 
  },
  {
    id: 103,
    doctor: "Dr. James Wilson",
    specialty: "Optometrist",
    time: "Tomorrow at 8:00 AM",
    location: "San Pedro Vision Center",
    duration: "30 min",
    service: "Routine eye exam"
  },
  {
    id: 104,
    doctor: "Dr. Anna Chen",
    specialty: "Cornea Specialist",
    time: "Thursday at 10:00 AM",
    location: "Belmopan Eye Care Center",
    duration: "60 min",
    service: "LASIK consultation"
  }
];

const DoctorsAvailability: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [serviceFilter, setServiceFilter] = useState("all");
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const filteredDoctors = doctorsData.filter(doctor => {
    const matchesSearch = 
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesService = 
      serviceFilter === "all" || 
      doctor.services.some(service => 
        service.toLowerCase().includes(serviceFilter.toLowerCase())
      );
    
    return matchesSearch && matchesService;
  });

  const allServices = doctorsData.flatMap(doctor => doctor.services);
  const services = ["all", ...new Set(allServices)];

  const handleBookAppointment = (doctorName: string) => {
    toast({
      title: "Eye Care Appointment Request Sent",
      description: `You'll receive a confirmation for ${doctorName} shortly.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Eye Care Specialists | Belize Kids</title>
        <meta name="description" content="Find available eye care specialists for children in Belize." />
      </Helmet>
      
      <Navbar />
      
      <main className="container-custom pt-16 md:pt-24 pb-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-belize-green mb-2">
              Find Available Eye Care Specialists
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              All our eye care specialists are located at the <span className="font-medium">Belize City Eye Clinic</span>. See available times and book your appointment.
            </p>
          </div>
          
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search specialists or services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 h-12 bg-white border-gray-200 shadow-sm"
              />
            </div>
            
            {showFilters && (
              <div className="mt-2 p-4 bg-white rounded-md shadow-sm">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Service</label>
                  <select
                    className="w-full h-10 rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none"
                    value={serviceFilter}
                    onChange={(e) => setServiceFilter(e.target.value)}
                  >
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service === "all" ? "All Services" : service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
          
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
              <Clock className="mr-2 h-5 w-5 text-belize-green" />
              Available Now
            </h2>
            
            {filteredDoctors.filter(doc => doc.status === 'available').length > 0 ? (
              <div className="grid grid-cols-1 gap-3">
                {filteredDoctors
                  .filter(doc => doc.status === 'available')
                  .map(doctor => (
                    <Card key={doctor.id} className="border-0 shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow">
                      <CardContent className="p-0">
                        <div className="bg-gradient-to-r from-green-50 to-green-100 px-4 py-3 border-b border-green-100">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="bg-white p-2 rounded-full">
                                {doctor.icon}
                              </div>
                              <div>
                                <h3 className="font-medium text-gray-900">{doctor.name}</h3>
                                <p className="text-sm text-gray-600">{doctor.specialty}</p>
                              </div>
                            </div>
                            <Badge className="bg-green-100 text-green-700 border-green-200 font-medium">
                              Available Now
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <div className="flex items-center text-sm text-gray-600 mb-3">
                            <Clock size={16} className="mr-1 text-green-600" />
                            <span className="font-medium">Available time slots today:</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {doctor.availability
                              .find(a => a.day === "Monday")?.slots
                              .map((slot, idx) => (
                                <div key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center">
                                  <Clock size={14} className="mr-1" />
                                  {slot}
                                </div>
                              ))}
                          </div>
                          
                          <div className="flex flex-wrap gap-1 mb-3">
                            {doctor.services.map((service, idx) => (
                              <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                                {service}
                              </span>
                            ))}
                          </div>
                          
                          <Button 
                            className="w-full mt-2 bg-belize-green hover:bg-belize-green/90 text-white flex items-center justify-center gap-2" 
                            onClick={() => handleBookAppointment(doctor.name)}
                          >
                            Book Appointment
                            <ArrowRight size={16} />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            ) : (
              <Card className="border-0 shadow-sm overflow-hidden bg-white p-8 text-center">
                <div className="flex flex-col items-center">
                  <Clock className="h-10 w-10 text-gray-300 mb-3" />
                  <h3 className="text-lg font-medium text-gray-700 mb-1">No Doctors Available Right Now</h3>
                  <p className="text-gray-500 mb-3">Check our upcoming openings below for the next available appointments.</p>
                </div>
              </Card>
            )}
          </div>
          
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
              <CalendarClock className="mr-2 h-5 w-5 text-belize-green" />
              Upcoming Openings
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {upcomingOpenings.map((opening) => (
                <Card key={opening.id} className="border-0 shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-3 border-b border-blue-100">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-belize-blue" />
                          <span className="font-medium text-gray-900">{opening.time}</span>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                          {opening.duration}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900">{opening.doctor}</h3>
                      <p className="text-sm text-gray-600 mb-2">{opening.specialty}</p>
                      
                      <div className="flex items-center text-sm text-blue-700 py-1 px-2 bg-blue-50 rounded-full inline-block mb-3">
                        <CheckCircle size={14} className="mr-1" />
                        <span>{opening.service}</span>
                      </div>
                      
                      <Button 
                        className="w-full bg-belize-green hover:bg-belize-green/90 text-white flex items-center justify-center gap-2" 
                        onClick={() => handleBookAppointment(opening.doctor)}
                      >
                        Book Appointment
                        <ArrowRight size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-belize-green" />
              All Eye Specialists
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map((doctor) => (
                  <Card key={doctor.id} className="border-0 shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="bg-gray-100 p-2 rounded-full">
                              {doctor.icon}
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">{doctor.name}</h3>
                              <p className="text-sm text-gray-600">{doctor.specialty}</p>
                            </div>
                          </div>
                          <Badge className={`${
                            doctor.status === 'available' ? 'bg-green-100 text-green-700 border-green-200' : 
                            doctor.status === 'upcoming' ? 'bg-blue-100 text-blue-700 border-blue-200' : 
                            'bg-gray-100 text-gray-700 border-gray-200'
                          }`}>
                            {doctor.status === 'available' ? 'Available Now' : 
                            doctor.status === 'upcoming' ? 'Soon' : 
                            'Fully Booked'}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-center text-sm text-gray-600 mb-3">
                          <Clock size={16} className="mr-1" />
                          <span className="font-medium">Next available: {doctor.nextAvailable}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {doctor.services.map((service, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                              {service}
                            </span>
                          ))}
                        </div>
                        
                        <Button 
                          className={`w-full ${
                            doctor.status === 'available' 
                              ? 'bg-belize-green hover:bg-belize-green/90 text-white' 
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                          } flex items-center justify-center gap-2`}
                          onClick={() => handleBookAppointment(doctor.name)}
                          disabled={doctor.status === 'booked'}
                        >
                          {doctor.status === 'available' ? 'Book Now' : 
                           doctor.status === 'upcoming' ? 'Book Upcoming' : 
                           'Fully Booked'}
                          {doctor.status !== 'booked' && <ArrowRight size={16} />}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-6 text-gray-500">
                  No eye specialists found matching your search criteria.
                </div>
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
