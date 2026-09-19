import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MessageSquare, MapPin, Facebook, Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  trackContactFormStarted,
  trackContactFormReady,
  trackContactFormSubmitted,
  trackSocialClick,
} from "@/lib/analytics";
import { FORMSPREE_CONTACT_ENDPOINT, submitToFormspree } from "@/lib/forms";

const REASONS = [
  { value: "general", label: "General question" },
  { value: "volunteering", label: "Volunteering" },
  { value: "donating", label: "Donating" },
  { value: "programs", label: "Programs & projects" },
  { value: "partnership", label: "Partnership" },
  { value: "press", label: "Press & media" },
  { value: "other", label: "Other" },
] as const;

const REASON_LABELS: Record<string, string> = Object.fromEntries(
  REASONS.map((reason) => [reason.value, reason.label]),
);

const MESSAGE_MAX_LENGTH = 2000;

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name" })
    .max(100, { message: "Please keep your name under 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(254, { message: "Please enter a valid email address" }),
  reason: z.string().trim().min(1, { message: "Please select a reason" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please enter a message (at least 10 characters)" })
    .max(MESSAGE_MAX_LENGTH, {
      message: `Please keep your message under ${MESSAGE_MAX_LENGTH} characters`,
    }),
});

type ContactValues = z.infer<typeof contactSchema>;

const RequiredMark: React.FC = () => (
  <span aria-hidden="true" className="text-destructive"> *</span>
);

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const startedTracked = useRef(false);
  const gotchaRef = useRef<HTMLInputElement | null>(null);
  const successHeadingRef = useRef<HTMLHeadingElement | null>(null);

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      reason: "",
      message: "",
    },
  });

  const messageLength = form.watch("message").length;

  useEffect(() => {
    trackContactFormReady("contact_section", "formspree");
  }, []);

  useEffect(() => {
    if (status === "success") {
      successHeadingRef.current?.focus();
    }
  }, [status]);

  const markStarted = () => {
    if (!startedTracked.current) {
      startedTracked.current = true;
      trackContactFormStarted("contact_section", "formspree");
    }
  };

  const onSubmit = async (data: ContactValues) => {
    setStatus("sending");
    setErrorMessage("");

    const reasonLabel = REASON_LABELS[data.reason] ?? data.reason;

    const result = await submitToFormspree(FORMSPREE_CONTACT_ENDPOINT, {
      name: data.name,
      email: data.email,
      reason: reasonLabel,
      message: data.message,
      _subject: `New contact message (${reasonLabel}) from belizekids.org`,
      _gotcha: gotchaRef.current?.value ?? "",
    });

    if (result.ok) {
      setStatus("success");
      trackContactFormSubmitted("contact_section", "formspree");
      form.reset();
    } else {
      setStatus("error");
      setErrorMessage(result.error ?? "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 scroll-mt-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-belize-green">Get In Touch</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions or want to learn more about Belize Kids?
            We'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-belize-green mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <Card className="h-full border-none shadow-lg overflow-hidden">
              <div className="bg-belize-green text-white p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-white/90 mb-8">
                  Whether you're interested in volunteering, donating, or learning more about our mission,
                  we're here to help.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white/90 text-sm">Email</p>
                      <p className="text-white font-medium">Contact us through the form</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white/90 text-sm">Office</p>
                      <p className="text-white font-medium">
                        San Pedro, Ambergris Caye<br />
                        Belize, Central America
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <MessageSquare className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white/90 text-sm">US Mailing</p>
                      <p className="text-white font-medium">
                        Belize Kids<br />
                        501(c)(3) Non-Profit<br />
                        TAX ID: 81-2841433<br />
                        PO BOX 620134<br />
                        Woodside, CA 94062
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="my-8 bg-white/30" />

                <div>
                  <p className="text-white/90 font-medium mb-4">Connect With Us</p>
                  <div className="flex">
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="bg-transparent text-white border-white/30 hover:bg-white/20 hover:text-white"
                    >
                      <a
                        href="https://www.facebook.com/profile.php?id=100064824399858"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook"
                        onClick={() =>
                          trackSocialClick("facebook", "contact_section")
                        }
                      >
                        <Facebook size={18} aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="md:col-span-7">
            <Card className="border-none shadow-lg p-1 overflow-hidden">
              <CardContent className="p-7">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h3>
                {status === "success" ? (
                  <div role="status" className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle2 className="h-12 w-12 text-belize-green mb-4" aria-hidden="true" />
                    <h3
                      ref={successHeadingRef}
                      tabIndex={-1}
                      className="text-xl font-bold text-gray-800 mb-2 focus:outline-none"
                    >
                      Message sent!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We&apos;ll get back to you soon.
                    </p>
                    <Button
                      variant="belizeGreen"
                      onClick={() => setStatus("idle")}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      onChange={markStarted}
                      noValidate
                      className="space-y-4"
                    >
                      <input
                        ref={gotchaRef}
                        type="text"
                        name="_gotcha"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        className="absolute h-0 w-0 opacity-0"
                      />
                      <p className="text-sm text-muted-foreground">
                        <RequiredMark /> Required fields
                      </p>
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name<RequiredMark /></FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                autoComplete="name"
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
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address<RequiredMark /></FormLabel>
                            <FormControl>
                              <Input
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
                        name="reason"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Reason for contacting<RequiredMark /></FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger aria-required="true">
                                  <SelectValue placeholder="Select a reason" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {REASONS.map((reason) => (
                                  <SelectItem key={reason.value} value={reason.value}>
                                    {reason.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message<RequiredMark /></FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="How can we help?"
                                rows={6}
                                maxLength={MESSAGE_MAX_LENGTH}
                                aria-required="true"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription className="text-right text-xs">
                              {messageLength} / {MESSAGE_MAX_LENGTH}
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {status === "error" && (
                        <p role="alert" className="text-sm font-medium text-destructive">
                          {errorMessage}
                        </p>
                      )}

                      <Button
                        type="submit"
                        variant="belizeGreen"
                        className="w-full py-6 flex items-center justify-center"
                        disabled={status === "sending"}
                      >
                        {status === "sending" ? (
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                        ) : (
                          <Send className="mr-2 h-5 w-5" aria-hidden="true" />
                        )}
                        {status === "sending" ? "Sending…" : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
