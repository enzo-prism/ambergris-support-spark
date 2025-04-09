
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, User, Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const DoctorsAvailability: React.FC = () => {
  const { toast } = useToast();
  const [showThankYou, setShowThankYou] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    toast({
      title: "Appointment request received",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    setShowThankYou(true);
    form.reset();
  };

  const doctorSchedules = [
    {
      id: 1,
      dates: "May 5-9, 2025",
      doctors: "Dr. Zach Elkin & Dr. Shani Golan",
      specialties: "Pediatric Ophthalmology, Optometry",
    },
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
        <title>Schedule Eye Care Appointments | Stanford Belize Vision Clinic</title>
        <meta name="description" content="Schedule eye care appointments at the Stanford Belize Vision Clinic (SBVC) in San Pedro, Ambergris Caye, Belize." />
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

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                  <Send className="h-5 w-5 text-belize-green" />
                  Request an Appointment
                </CardTitle>
                <CardDescription>
                  Fill out this form and our team will contact you to schedule your appointment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <div className="flex items-center">
                              <User className="mr-2 h-4 w-4 text-gray-400" />
                              <Input placeholder="Your full name" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <div className="flex items-center">
                              <Mail className="mr-2 h-4 w-4 text-gray-400" />
                              <Input placeholder="Your email address" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <div className="flex items-center">
                              <Phone className="mr-2 h-4 w-4 text-gray-400" />
                              <Input placeholder="Your phone number" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any specific concerns or preferred dates?"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Include any eye care concerns or special requirements
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full mt-2 bg-belize-green hover:bg-belize-green/90"
                    >
                      Submit Request
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-4">
            <h2 className="text-lg md:text-xl font-semibold text-belize-green mb-2">
              Clinic Location
            </h2>
            <p className="text-gray-600">
              San Pedro, Ambergris Caye, Belize<br />
              Next to the San Pedro Roman Catholic School
            </p>
          </div>

          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/2024-10-vision-clinic-main.jpg" 
              alt="Stanford Belize Vision Clinic" 
              className="rounded-lg shadow-md max-h-64 object-cover"
            />
          </div>
        </div>
      </main>

      <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thank You!</DialogTitle>
            <DialogDescription>
              Your appointment request has been received. Our team will contact you shortly to confirm your appointment details.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button onClick={() => setShowThankYou(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default DoctorsAvailability;
