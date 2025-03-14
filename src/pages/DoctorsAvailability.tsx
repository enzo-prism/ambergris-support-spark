
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Calendar,
  Clock, 
  Search,
  MapPin,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

// Mock data for doctors availability
const doctorsData = [
  {
    id: 1,
    name: "Dr. Maria Rodriguez",
    specialty: "Pediatrics",
    location: "Belize City Clinic",
    availability: [
      { day: "Monday", slots: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"] },
      { day: "Wednesday", slots: ["9:00 AM - 12:00 PM"] },
      { day: "Friday", slots: ["2:00 PM - 5:00 PM"] },
    ],
    nextAvailable: "Today at 2:00 PM",
    status: "available"
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    specialty: "General Medicine",
    location: "San Pedro Health Center",
    availability: [
      { day: "Tuesday", slots: ["8:00 AM - 12:00 PM"] },
      { day: "Thursday", slots: ["8:00 AM - 12:00 PM", "1:00 PM - 4:00 PM"] },
      { day: "Saturday", slots: ["9:00 AM - 1:00 PM"] },
    ],
    nextAvailable: "Tomorrow at 8:00 AM",
    status: "upcoming"
  },
  {
    id: 3,
    name: "Dr. Anna Chen",
    specialty: "Obstetrics",
    location: "Belmopan Women's Health",
    availability: [
      { day: "Monday", slots: ["10:00 AM - 2:00 PM"] },
      { day: "Wednesday", slots: ["10:00 AM - 2:00 PM"] },
      { day: "Thursday", slots: ["1:00 PM - 5:00 PM"] },
    ],
    nextAvailable: "2 days from now",
    status: "booked"
  },
  {
    id: 4,
    name: "Dr. Robert Johnson",
    specialty: "Cardiology",
    location: "Belize Heart Institute",
    availability: [
      { day: "Tuesday", slots: ["9:00 AM - 1:00 PM"] },
      { day: "Friday", slots: ["9:00 AM - 1:00 PM", "2:00 PM - 4:00 PM"] },
    ],
    nextAvailable: "Friday at 9:00 AM",
    status: "upcoming"
  },
  {
    id: 5,
    name: "Dr. Sarah Thompson",
    specialty: "Dermatology",
    location: "Placencia Medical Center",
    availability: [
      { day: "Monday", slots: ["1:00 PM - 5:00 PM"] },
      { day: "Thursday", slots: ["9:00 AM - 1:00 PM"] },
    ],
    nextAvailable: "In 30 minutes",
    status: "available"
  }
];

// Upcoming openings data (mock)
const upcomingOpenings = [
  {
    id: 101,
    doctor: "Dr. Maria Rodriguez",
    specialty: "Pediatrics",
    time: "Today at 2:00 PM",
    location: "Belize City Clinic", 
    duration: "30 min"
  },
  {
    id: 102,
    doctor: "Dr. Sarah Thompson",
    specialty: "Dermatology",
    time: "Today at 3:15 PM",
    location: "Placencia Medical Center",
    duration: "45 min"
  },
  {
    id: 103,
    doctor: "Dr. James Wilson",
    specialty: "General Medicine",
    time: "Tomorrow at 8:00 AM",
    location: "San Pedro Health Center",
    duration: "30 min"
  },
  {
    id: 104,
    doctor: "Dr. Anna Chen",
    specialty: "Obstetrics",
    time: "Thursday at 10:00 AM",
    location: "Belmopan Women's Health",
    duration: "60 min"
  }
];

const DoctorsAvailability: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const { toast } = useToast();

  // Filter doctors based on search term and location
  const filteredDoctors = doctorsData.filter(doctor => {
    const matchesSearch = 
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = 
      locationFilter === "all" || 
      doctor.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    return matchesSearch && matchesLocation;
  });

  // Get a list of unique locations
  const locations = ["all", ...new Set(doctorsData.map(doctor => doctor.location))];

  const handleBookAppointment = (doctorName: string) => {
    toast({
      title: "Appointment Request Sent",
      description: `You'll receive a confirmation for ${doctorName} shortly.`,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Doctor Availability | Belize Kids</title>
        <meta name="description" content="Find available doctors and upcoming openings for medical care in Belize." />
      </Helmet>
      
      <Navbar />
      
      <main className="container-custom pt-20 md:pt-28 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-belize-green mb-2">
              Find Available Doctors
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              See who's available now or get notified about upcoming openings
            </p>
          </div>
          
          {/* Search and Filters - Simplified */}
          <div className="mb-6">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search doctors or specialties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 h-10 bg-white border border-gray-200"
                />
              </div>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-10 w-10 border border-gray-200"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
            
            {showFilters && (
              <div className="mt-2 p-3 bg-gray-50 rounded-md border border-gray-200">
                <label className="text-sm font-medium text-gray-700 block mb-1">Location</label>
                <select
                  className="w-full h-10 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-belize-green"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                >
                  {locations.map((location, index) => (
                    <option key={index} value={location}>
                      {location === "all" ? "All Locations" : location}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          
          {/* Quick View of Available Now */}
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-800 mb-3">Available Now</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredDoctors
                .filter(doc => doc.status === 'available')
                .slice(0, 2)
                .map(doctor => (
                  <Card key={doctor.id} className="border border-gray-200 shadow-sm overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-900">{doctor.name}</h3>
                          <p className="text-sm text-gray-600">{doctor.specialty}</p>
                          <div className="flex items-center mt-1 text-xs text-gray-500">
                            <MapPin size={12} className="mr-1" />
                            <span>{doctor.location}</span>
                          </div>
                        </div>
                        <Badge className="bg-green-50 text-green-700 border-green-100">
                          Available Now
                        </Badge>
                      </div>
                      <Button 
                        className="w-full mt-3 bg-belize-green hover:bg-belize-green/90 text-white" 
                        size="sm"
                        onClick={() => handleBookAppointment(doctor.name)}
                      >
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
          
          {/* All Doctors Tab Interface - Simplified */}
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-800 mb-3">All Doctors</h2>
            <Tabs defaultValue="list" className="w-full">
              <TabsList className="w-full mb-4 bg-gray-100 p-1 rounded-md">
                <TabsTrigger value="list" className="flex-1 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  List
                </TabsTrigger>
                <TabsTrigger value="cards" className="flex-1 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Cards
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="list" className="mt-0 space-y-3">
                {filteredDoctors.length > 0 ? (
                  filteredDoctors.map((doctor) => (
                    <div key={doctor.id} className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{doctor.name}</h3>
                        <p className="text-sm text-gray-600">{doctor.specialty}</p>
                        <div className="flex items-center mt-1 text-xs text-gray-500">
                          <MapPin size={12} className="mr-1" />
                          <span>{doctor.location}</span>
                        </div>
                        <div className="flex items-center mt-1 text-xs text-gray-500">
                          <Clock size={12} className="mr-1" />
                          <span>Next: {doctor.nextAvailable}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <Badge className={`mb-2 text-xs ${
                          doctor.status === 'available' ? 'bg-green-50 text-green-700 border-green-100' : 
                          doctor.status === 'upcoming' ? 'bg-blue-50 text-blue-700 border-blue-100' : 
                          'bg-gray-50 text-gray-700 border-gray-100'
                        }`}>
                          {doctor.status === 'available' ? 'Available Now' : 
                          doctor.status === 'upcoming' ? 'Soon' : 
                          'Booked'}
                        </Badge>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-xs h-8 border-gray-200 bg-white"
                          onClick={() => handleBookAppointment(doctor.name)}
                        >
                          Book
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No doctors found matching your search criteria.
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="cards" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doctor) => (
                      <Card key={doctor.id} className="border border-gray-200 shadow-sm overflow-hidden">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="font-medium text-gray-900">{doctor.name}</h3>
                              <p className="text-sm text-gray-600">{doctor.specialty}</p>
                              <div className="flex items-center mt-1 text-xs text-gray-500">
                                <MapPin size={12} className="mr-1" />
                                <span>{doctor.location}</span>
                              </div>
                            </div>
                            <Badge className={`${
                              doctor.status === 'available' ? 'bg-green-50 text-green-700 border-green-100' : 
                              doctor.status === 'upcoming' ? 'bg-blue-50 text-blue-700 border-blue-100' : 
                              'bg-gray-50 text-gray-700 border-gray-100'
                            }`}>
                              {doctor.status === 'available' ? 'Available Now' : 
                              doctor.status === 'upcoming' ? 'Coming Soon' : 
                              'Fully Booked'}
                            </Badge>
                          </div>

                          <div className="border-t border-gray-100 pt-3 mt-3">
                            <div className="flex items-center gap-1 text-xs text-gray-700 font-medium mb-2">
                              <Calendar size={12} />
                              <span>Schedule</span>
                            </div>
                            <div className="space-y-2 max-h-24 overflow-y-auto">
                              {doctor.availability.map((schedule, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <span className="text-xs font-medium w-16">{schedule.day}:</span>
                                  <div className="flex flex-wrap gap-1">
                                    {schedule.slots.map((slot, slotIdx) => (
                                      <span key={slotIdx} className="text-xs bg-gray-50 px-1.5 py-0.5 rounded">
                                        {slot}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <Button 
                            className="w-full mt-3 bg-belize-green hover:bg-belize-green/90 text-white"
                            size="sm"
                            onClick={() => handleBookAppointment(doctor.name)}
                          >
                            Book Appointment
                          </Button>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500 col-span-2">
                      No doctors found matching your search criteria.
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Upcoming Openings - Simplified */}
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-3">Upcoming Openings</h2>
            <div className="space-y-3">
              {upcomingOpenings.map((opening) => (
                <div key={opening.id} className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-belize-green" />
                      <span className="font-medium text-gray-900">{opening.time}</span>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">{opening.doctor}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                      <span>{opening.specialty}</span>
                      <span>•</span>
                      <span>{opening.duration}</span>
                      <span>•</span>
                      <span>{opening.location}</span>
                    </div>
                  </div>
                  <Button 
                    size="sm"
                    className="bg-belize-green hover:bg-belize-green/90 text-white h-8"
                    onClick={() => handleBookAppointment(opening.doctor)}
                  >
                    Book
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DoctorsAvailability;
