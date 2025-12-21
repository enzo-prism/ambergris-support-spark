import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Lock, CreditCard, Mail, User, Phone, Users } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const MembershipForm: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    
    toast({
      title: "Membership registration started",
      description: "Thank you for your interest! We'll contact you shortly to complete your membership setup.",
    });
    
    form.reset();
  };

  return (
    <section id="membership-form" className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="blue" className="mb-4 gap-2 px-4 py-2 text-sm font-semibold">
              <Users className="h-5 w-5" />
              Monthly Membership
            </Badge>
            <h2 className="text-3xl font-bold text-belize-blue">Join Our Community</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-belize-blue p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Member Benefits</h2>
                <p className="mb-6">Your monthly membership includes:</p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Exclusive member updates and reports</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Recognition in our member community</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Priority access to impact stories</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Consistent impact through recurring support</span>
                  </li>
                </ul>
                
                <div className="mt-8 flex items-center">
                  <Lock className="h-5 w-5 mr-2" />
                  <span className="text-sm">Secure payment processing</span>
                </div>
                
                <div className="flex items-center mt-4">
                  <CreditCard className="h-5 w-5 mr-2" />
                  <span className="text-sm">Cancel your membership anytime</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-belize-blue mb-6">Start Your Membership</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input className="pl-10" placeholder="John" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input className="pl-10" placeholder="Doe" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input className="pl-10" placeholder="john@example.com" {...field} />
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
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                              <Input className="pl-10" placeholder="(123) 456-7890" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" variant="belizeBlue" className="w-full mt-4 py-6 flex items-center justify-center">
                      <Users className="mr-2 h-5 w-5" />
                      Join Monthly Membership
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center mt-4">
                      You'll be contacted to complete payment setup. Your information is secure and will never be shared.
                    </p>
                  </form>
                </Form>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm text-gray-600">
              BelizeKids.org | TAX ID 81-2841433 | PO BOX 620134, Woodside, CA 94062
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipForm;
