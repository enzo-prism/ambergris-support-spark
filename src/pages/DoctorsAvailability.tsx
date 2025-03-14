
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Calendar, 
  Clock, 
  UserCheck, 
  Bell, 
  Search,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

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

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Doctor Availability | Belize Kids</title>
        <meta name="description" content="Find available doctors and upcoming openings for medical care in Belize." />
      </Helmet>
      
      <Navbar />
      
      <main className="container-custom pt-28 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-belize-green mb-4">
              Doctor Availability
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Find available doctors near you and get notified about upcoming openings to ensure your child receives timely medical care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="md:col-span-2 bg-belize-light shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-belize-green flex items-center gap-2">
                  <Search size={20} />
                  <span>Find a Doctor</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Search by name or specialty..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="border-belize-green/30 focus:border-belize-green"
                    />
                  </div>
                  <div className="w-full sm:w-48">
                    <select
                      className="w-full h-10 rounded-md border border-belize-green/30 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-belize-green"
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
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-belize-green/10 shadow-sm border-belize-green/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-belize-green flex items-center gap-2">
                  <Bell size={20} />
                  <span>Quick Availability</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingOpenings.slice(0, 3).map((opening) => (
                    <div key={opening.id} className="flex items-start gap-3 border-b border-belize-green/10 pb-3 last:border-0">
                      <div className="bg-white p-2 rounded-full border border-belize-green/20">
                        <Clock className="h-4 w-4 text-belize-green" />
                      </div>
                      <div>
                        <p className="font-medium">{opening.doctor}</p>
                        <p className="text-sm text-gray-600">{opening.time} • {opening.duration}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="link" className="text-belize-green p-0 h-auto w-full text-center">
                    View all openings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="list" className="mb-8">
            <TabsList className="bg-gray-100 mb-6">
              <TabsTrigger value="list" className="data-[state=active]:bg-belize-green data-[state=active]:text-white">
                List View
              </TabsTrigger>
              <TabsTrigger value="schedule" className="data-[state=active]:bg-belize-green data-[state=active]:text-white">
                Schedule View
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="list" className="mt-0">
              <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>Doctor</TableHead>
                      <TableHead>Specialty</TableHead>
                      <TableHead className="hidden md:table-cell">Location</TableHead>
                      <TableHead>Next Available</TableHead>
                      <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDoctors.length > 0 ? (
                      filteredDoctors.map((doctor) => (
                        <TableRow key={doctor.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">{doctor.name}</TableCell>
                          <TableCell>{doctor.specialty}</TableCell>
                          <TableCell className="hidden md:table-cell">
                            <div className="flex items-center gap-1">
                              <MapPin size={14} className="text-gray-500" />
                              <span>{doctor.location}</span>
                            </div>
                          </TableCell>
                          <TableCell>{doctor.nextAvailable}</TableCell>
                          <TableCell className="text-right">
                            <Badge className={`
                              ${doctor.status === 'available' ? 'bg-green-100 text-green-800 hover:bg-green-100' : 
                                doctor.status === 'upcoming' ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' : 
                                'bg-amber-100 text-amber-800 hover:bg-amber-100'}
                            `}>
                              {doctor.status === 'available' ? 'Available Now' : 
                               doctor.status === 'upcoming' ? 'Coming Soon' : 
                               'Fully Booked'}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                          No doctors found matching your search criteria.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="schedule" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors.map((doctor) => (
                  <Card key={doctor.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{doctor.name}</CardTitle>
                          <p className="text-sm text-gray-600">{doctor.specialty}</p>
                        </div>
                        <Badge className={`
                          ${doctor.status === 'available' ? 'bg-green-100 text-green-800 hover:bg-green-100' : 
                           doctor.status === 'upcoming' ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' : 
                           'bg-amber-100 text-amber-800 hover:bg-amber-100'}
                        `}>
                          {doctor.status === 'available' ? 'Available Now' : 
                           doctor.status === 'upcoming' ? 'Coming Soon' : 
                           'Fully Booked'}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-sm mt-1 text-gray-600">
                        <MapPin size={14} />
                        <span>{doctor.location}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-belize-green">
                          <Calendar size={16} />
                          <span className="font-medium">Weekly Schedule</span>
                        </div>
                        <div className="space-y-2">
                          {doctor.availability.map((schedule, idx) => (
                            <div key={idx} className="flex flex-col">
                              <span className="font-medium text-gray-700">{schedule.day}</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {schedule.slots.map((slot, slotIdx) => (
                                  <span key={slotIdx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                    {slot}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="pt-3 border-t border-gray-200 mt-3">
                          <Button className="w-full bg-belize-green hover:bg-belize-green/90">
                            Book Appointment
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <Card className="bg-belize-teal/10 border-belize-teal/20">
            <CardHeader>
              <CardTitle className="text-belize-teal flex items-center gap-2">
                <Bell size={20} />
                <span>Upcoming Openings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-belize-teal/5">
                      <TableHead>Doctor</TableHead>
                      <TableHead>Specialty</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead className="hidden md:table-cell">Location</TableHead>
                      <TableHead className="hidden md:table-cell">Duration</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingOpenings.map((opening) => (
                      <TableRow key={opening.id} className="hover:bg-belize-teal/5">
                        <TableCell className="font-medium">{opening.doctor}</TableCell>
                        <TableCell>{opening.specialty}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Clock size={14} className="text-belize-teal" />
                            <span>{opening.time}</span>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{opening.location}</TableCell>
                        <TableCell className="hidden md:table-cell">{opening.duration}</TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" className="bg-belize-teal hover:bg-belize-teal/90">
                            Book Now
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DoctorsAvailability;
