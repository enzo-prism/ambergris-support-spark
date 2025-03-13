
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Lock, CreditCard, Mail, User, Phone } from "lucide-react";

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
    
    // Here you would typically integrate with a payment processor
    // For now, we'll just show a success message
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
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-belize-green p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
                <p className="mb-6">Your $20 monthly membership supports:</p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Educational resources for schools in Belize</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Healthcare services for children in need</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Scholarships for deserving students</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Community development projects</span>
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
                    
                    <Button type="submit" className="w-full bg-belize-green hover:bg-belize-green/90 mt-4">
                      Become a Member - $20/month
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
