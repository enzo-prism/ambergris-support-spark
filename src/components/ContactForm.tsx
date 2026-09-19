import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail, Phone, Send, User } from "lucide-react";
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
import { useToast } from "@/hooks/use-toast";
import {
  getContactFormEndpoint,
  submitContactForm,
} from "@/lib/contactForm";
import {
  trackContactFormStarted,
  trackContactFormSubmitted,
} from "@/lib/analytics";

const contactFormSchema = z.object({
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
  inquiry: z
    .string()
    .trim()
    .min(20, {
      message: "Please add a line or two about the nature of your inquiry",
    })
    .max(2000, { message: "Please keep your inquiry under 2000 characters" }),
  website: z.string().optional(),
});

const RequiredMark: React.FC = () => (
  <span aria-hidden="true" className="text-destructive"> *</span>
);

type ContactFormValues = z.infer<typeof contactFormSchema>;

type SubmitState = "idle" | "submitting" | "success";

const UNCONFIGURED_MESSAGE =
  "Online delivery is not connected yet. Please use the Typeform link below and include the nature of your inquiry.";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [hasStarted, setHasStarted] = useState(false);
  const successHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const isConfigured = Boolean(getContactFormEndpoint());

  useEffect(() => {
    if (submitState === "success") {
      successHeadingRef.current?.focus();
    }
  }, [submitState]);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      inquiry: "",
      website: "",
    },
  });

  const markStarted = () => {
    if (hasStarted) {
      return;
    }
    setHasStarted(true);
    trackContactFormStarted("contact_section", "first_party");
  };

  const onSubmit = async (values: ContactFormValues) => {
    if (values.website?.trim()) {
      setSubmitState("success");
      return;
    }

    setSubmitState("submitting");

    const result = await submitContactForm({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone ?? "",
      inquiry: values.inquiry,
    });

    switch (result.status) {
      case "success":
        setSubmitState("success");
        trackContactFormSubmitted("contact_section", "first_party");
        form.reset();
        toast({
          title: "Message sent",
          description: "Thank you. We'll get back to you shortly.",
        });
        return;
      case "unconfigured":
        setSubmitState("idle");
        toast({
          variant: "destructive",
          title: "We could not send your message yet",
          description: UNCONFIGURED_MESSAGE,
        });
        return;
      case "error":
        setSubmitState("idle");
        toast({
          variant: "destructive",
          title: "We could not send your message",
          description: result.message,
        });
        return;
      default: {
        const _exhaustive: never = result;
        return _exhaustive;
      }
    }
  };

  if (submitState === "success") {
    return (
      <div role="status" className="rounded-lg border border-belize-green/20 bg-belize-light/40 px-6 py-10 text-center">
        <h4 ref={successHeadingRef} tabIndex={-1} className="text-xl font-bold text-belize-green focus:outline-none">Thank you</h4>
        <p className="mt-3 text-gray-700">
          We received your inquiry and will follow up shortly.
        </p>
      </div>
    );
  }

  if (submitState !== "idle" && submitState !== "submitting") {
    const _exhaustive: never = submitState;
    return _exhaustive;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name<RequiredMark /></FormLabel>
                <div className="relative">
                  <User aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <FormControl>
                    <Input
                      className="pl-10"
                      autoComplete="given-name"
                      placeholder="First name"
                      maxLength={100}
                      aria-required="true"
                      {...field}
                      onFocus={markStarted}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name<RequiredMark /></FormLabel>
                <div className="relative">
                  <User aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <FormControl>
                    <Input
                      className="pl-10"
                      autoComplete="family-name"
                      placeholder="Last name"
                      maxLength={100}
                      aria-required="true"
                      {...field}
                      onFocus={markStarted}
                    />
                  </FormControl>
                </div>
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
              <FormLabel>Email<RequiredMark /></FormLabel>
              <div className="relative">
                <Mail aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <FormControl>
                  <Input
                    type="email"
                    inputMode="email"
                    className="pl-10"
                    autoComplete="email"
                    placeholder="you@example.com"
                    maxLength={254}
                    aria-required="true"
                    {...field}
                    onFocus={markStarted}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone (optional)</FormLabel>
              <div className="relative">
                <Phone aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <FormControl>
                  <Input
                    type="tel"
                    inputMode="tel"
                    className="pl-10"
                    autoComplete="tel"
                    placeholder="(123) 456-7890"
                    maxLength={32}
                    {...field}
                    onFocus={markStarted}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="inquiry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nature of inquiry<RequiredMark /></FormLabel>
              <FormDescription>
                A sentence or two is enough — volunteering, donations, clinic
                questions, or anything else we should know.
              </FormDescription>
              <FormControl>
                <Textarea
                  className="min-h-[140px]"
                  placeholder="I'm writing because…"
                  maxLength={2000}
                  aria-required="true"
                  {...field}
                  onFocus={markStarted}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem className="sr-only" aria-hidden="true">
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input
                  tabIndex={-1}
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="belizeGreen"
          className="mt-2 w-full py-6"
          disabled={submitState === "submitting"}
        >
          {submitState === "submitting" ? (
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="h-5 w-5" aria-hidden="true" />
          )}
          {submitState === "submitting" ? "Sending…" : "Send message"}
        </Button>

        {!isConfigured && (
          <p className="text-xs text-gray-500">
            If sending does not go through, use the Typeform link below and
            include the nature of your inquiry there too.
          </p>
        )}
      </form>
    </Form>
  );
};

export default ContactForm;
