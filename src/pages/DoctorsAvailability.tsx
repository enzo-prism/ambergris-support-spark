
import React from "react";
import { Helmet } from "react-helmet-async";
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buildSiteUrl, SITE_OG_IMAGE_URL } from "@/lib/site";

const DoctorsAvailability: React.FC = () => {
  const doctorSchedules: {
    id: number;
    dates: string;
    doctors: string;
    specialties: string;
  }[] = [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Stanford Belize Vision Clinic Updates | San Pedro, Belize</title>
        <meta name="description" content="Find clinic information and upcoming doctor visit updates for the Stanford Belize Vision Clinic in San Pedro, Ambergris Caye." />
        <meta property="og:title" content="Stanford Belize Vision Clinic Updates | San Pedro, Belize" />
        <meta property="og:description" content="Find clinic information and upcoming doctor visit updates for the Stanford Belize Vision Clinic in San Pedro, Ambergris Caye." />
        <meta property="og:image" content={SITE_OG_IMAGE_URL} />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="eye care Belize, free eye exams, Stanford vision clinic, San Pedro ophthalmologist, children eye care, Ambergris Caye medical services" />
        <link rel="canonical" href={buildSiteUrl("/doctors")} />
      </Helmet>
      
      <Navbar />
      
      <main className="container-custom pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-belize-green mb-2">
              Stanford Belize Vision Clinic
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Clinic information and visiting doctor updates for San Pedro, Ambergris Caye, Belize
            </p>
          </div>

          <div className="mb-12">
            <Card className="mb-8">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-belize-green" />
                  Visiting Doctor Updates
                </CardTitle>
                <CardDescription>
                  We share confirmed clinic visit information here when upcoming schedules are available.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {doctorSchedules.length > 0 ? (
                    doctorSchedules.map((schedule) => (
                      <Alert key={schedule.id} className="border-belize-green/40 bg-white">
                        <AlertTitle className="text-belize-green">{schedule.dates}</AlertTitle>
                        <AlertDescription className="text-sm text-gray-600">
                          <p className="font-medium text-gray-800">{schedule.doctors}</p>
                          <p>{schedule.specialties}</p>
                        </AlertDescription>
                      </Alert>
                    ))
                  ) : (
                    <Alert className="border-belize-green/20 bg-belize-light/50">
                      <Calendar className="h-4 w-4 text-belize-green" />
                      <AlertTitle className="text-belize-green">No clinic dates posted yet</AlertTitle>
                      <AlertDescription className="text-sm text-gray-600">
                        Confirmed Stanford Belize Vision Clinic visit dates will appear here. Check back soon, or contact us if you need the latest schedule.
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pt-2 pb-4">
                <p className="text-center text-sm text-gray-600 max-w-md">
                  This page is for clinic information and schedule updates. Please check back for confirmed future visits.
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
              src="/lovable-uploads/5c98d9b7-c36a-4f65-a62f-e9a9f52e87f0.png"
              alt="A clinician performing an eye examination for a student at the Stanford Belize Vision Clinic"
              className="h-64 w-full rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DoctorsAvailability;
