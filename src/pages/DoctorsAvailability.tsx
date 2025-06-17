
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";
import { Image } from "@/components/ui/image";
import ClinicLocation from "@/components/doctors/ClinicLocation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DoctorsAvailability: React.FC = () => {
  const doctorSchedules = [
    {
      id: 2,
      dates: "November 2025 (dates TBA)",
      doctors: "Dr. Nancy Hamming",
      specialties: "Cornea Specialist",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Free Eye Care Appointments - Stanford Belize Vision Clinic | San Pedro, Belize</title>
        <meta name="description" content="Schedule free eye examinations at the Stanford Belize Vision Clinic in San Pedro, Ambergris Caye. Professional eye care services for children and adults provided by Stanford University ophthalmologists." />
        <meta property="og:title" content="Free Eye Care Appointments - Stanford Belize Vision Clinic | San Pedro, Belize" />
        <meta property="og:description" content="Schedule free eye examinations at the Stanford Belize Vision Clinic in San Pedro, Ambergris Caye. Professional eye care services for children and adults provided by Stanford University ophthalmologists." />
        <meta property="og:image" content="https://imgur.com/0Qjoc64" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="eye care Belize, free eye exams, Stanford vision clinic, San Pedro ophthalmologist, children eye care, Ambergris Caye medical services" />
      </Helmet>
      
      <Navbar />
      
      <main className="container-custom pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-belize-green mb-2">
              Stanford Belize Vision Clinic
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Free eye care services in San Pedro, Ambergris Caye, Belize
            </p>
          </div>

          <div className="mb-12">
            <Card className="mb-8">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-belize-green" />
                  Upcoming Doctor Visits
                </CardTitle>
                <CardDescription>
                  Our visiting doctors provide free eye exams and treatments for both children and adults
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {doctorSchedules.map((schedule) => (
                    <div key={schedule.id} className="border-l-4 border-belize-green pl-4 py-2">
                      <h3 className="text-lg font-semibold text-belize-green">{schedule.dates}</h3>
                      <p className="text-gray-800 font-medium">{schedule.doctors}</p>
                      <p className="text-gray-600 text-sm">{schedule.specialties}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pt-2 pb-4">
                <p className="text-center text-sm text-gray-600 max-w-md">
                  The Stanford Belize Vision Clinic provides free eye care services to residents of San Pedro and surrounding areas twice a year.
                </p>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mb-4">
            <h2 className="text-lg md:text-xl font-semibold text-belize-green mb-2">
              Clinic Location
            </h2>
            <p className="text-gray-600 mb-4">
              San Pedro, Ambergris Caye, Belize<br />
              Next to the San Pedro Roman Catholic School
            </p>
            <ClinicLocation />
          </div>

          <div className="flex justify-center">
            <Image 
              src="https://imgur.com/0Qjoc64" 
              alt="Stanford Belize Vision Clinic" 
              className="rounded-lg shadow-md max-h-64 object-cover w-full"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DoctorsAvailability;
