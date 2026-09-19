import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Lock, CreditCard, Mail, User, Phone, Users, CheckCircle2, Loader2 } from "lucide-react";
import { FORMSPREE_MEMBERSHIP_ENDPOINT, submitToFormspree } from "@/lib/forms";

const formSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: "First name is required" })
    .max(100, { message: "Please keep your first name under 100 characters" }),
  lastName: z
    .string()
    .trim()
    .min(1, { message: "Last name is required" })
    .max(100, { message: "Please keep your last name under 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(254, { message: "Please enter a valid email address" }),
  phone: z
    .string()
    .trim()
    .max(32, { message: "Please keep your phone number under 32 characters" })
    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

const RequiredMark: React.FC = () => (
  <span aria-hidden="true" className="text-destructive"> *</span>
);

// Centers the icon on the input: label (14px) + gap (8px) + half input (20px).
const ICON_CLASS =
  "pointer-events-none absolute left-3 top-[42px] h-4 w-4 -translate-y-1/2 text-gray-400";

const MembershipForm: React.FC = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const successHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (submitted) {
      successHeadingRef.current?.focus();
    }
  }, [submitted]);

  const onSubmit = async (data: FormValues) => {
    const result = await submitToFormspree(FORMSPREE_MEMBERSHIP_ENDPOINT, {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone ?? "",
      _subject: "New membership signup from belizekids.org",
    });

    if (result.ok) {
      toast({
        title: "Membership registration started",
        description: "Thank you for your interest! We'll contact you shortly to complete your membership setup.",
      });

      form.reset();
      setSubmitted(true);
    } else {
      toast({
        title: "Submission failed",
        description: result.error ?? "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="membership-form" className="py-16 bg-white scroll-mt-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="blue" className="mb-4 gap-2 px-4 py-2 text-sm font-semibold">
              <Users className="h-5 w-5" aria-hidden="true" />
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
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Exclusive member updates and reports</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Recognition in our member community</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Priority access to impact stories</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Consistent impact through recurring support</span>
                  </li>
                </ul>
                
                <div className="mt-8 flex items-center">
                  <Lock className="h-5 w-5 mr-2" aria-hidden="true" />
                  <span className="text-sm">Secure payment processing</span>
                </div>
                
                <div className="flex items-center mt-4">
                  <CreditCard className="h-5 w-5 mr-2" aria-hidden="true" />
                  <span className="text-sm">Cancel your membership anytime</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-belize-blue mb-6">Start Your Membership</h3>
                
                {submitted ? (
                  <div role="status" className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle2 className="h-12 w-12 text-belize-blue mb-4" aria-hidden="true" />
                    <h3
                      ref={successHeadingRef}
                      tabIndex={-1}
                      className="text-xl font-bold text-gray-800 mb-2 focus:outline-none"
                    >
                      Membership registration started
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for your interest! We&apos;ll contact you shortly to complete your membership setup.
                    </p>
                    <Button
                      variant="belizeBlue"
                      onClick={() => setSubmitted(false)}
                    >
                      Add another member
                    </Button>
                  </div>
                ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem className="relative">
                            <User className={ICON_CLASS} aria-hidden="true" />
                            <FormLabel>First Name<RequiredMark /></FormLabel>
                            <FormControl>
                              <Input
                                className="pl-10"
                                placeholder="First name"
                                autoComplete="given-name"
                                maxLength={100}
                                aria-required="true"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem className="relative">
                            <User className={ICON_CLASS} aria-hidden="true" />
                            <FormLabel>Last Name<RequiredMark /></FormLabel>
                            <FormControl>
                              <Input
                                className="pl-10"
                                placeholder="Last name"
                                autoComplete="family-name"
                                maxLength={100}
                                aria-required="true"
                                {...field}
                              />
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
                        <FormItem className="relative">
                          <Mail className={ICON_CLASS} aria-hidden="true" />
                          <FormLabel>Email Address<RequiredMark /></FormLabel>
                          <FormControl>
                            <Input
                              className="pl-10"
                              placeholder="you@example.com"
                              type="email"
                              inputMode="email"
                              autoComplete="email"
                              maxLength={254}
                              aria-required="true"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="relative">
                          <Phone className={ICON_CLASS} aria-hidden="true" />
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              className="pl-10"
                              placeholder="(123) 456-7890"
                              type="tel"
                              inputMode="tel"
                              autoComplete="tel"
                              maxLength={32}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" variant="belizeBlue" className="w-full mt-4 py-6 flex items-center justify-center" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? (
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                      ) : (
                        <Users className="mr-2 h-5 w-5" aria-hidden="true" />
                      )}
                      {form.formState.isSubmitting ? "Joining…" : "Join Monthly Membership"}
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center mt-4">
                      You'll be contacted to complete payment setup. Your information is secure and will never be shared.
                    </p>
                  </form>
                </Form>
                )}
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
