import React, { useEffect, useRef, useState } from "react";
import { Mail, MessageSquare, MapPin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  trackContactFormStarted,
  trackFormLinkClick,
  trackContactFormReady,
  trackContactFormSubmitted,
  trackSocialClick,
} from "@/lib/analytics";

declare global {
  interface Window {
    tf?: {
      createWidget?: (
        formId: string,
        options: {
          container: HTMLElement;
          hideHeaders?: boolean;
          onReady?: () => void;
          onStarted?: () => void;
          onSubmit?: () => void;
        },
      ) => unknown;
    };
  }
}

const TYPEFORM_FORM_ID = "Zovvt0T2";
const TYPEFORM_FORM_URL = `https://form.typeform.com/to/${TYPEFORM_FORM_ID}`;

const ContactSection: React.FC = () => {
  const widgetContainerRef = useRef<HTMLDivElement | null>(null);
  const [widgetStatus, setWidgetStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const container = widgetContainerRef.current;
    if (!container) {
      return;
    }

    let cancelled = false;
    let scriptElement: HTMLScriptElement | null = null;
    const timeoutId = window.setTimeout(() => {
      if (!cancelled) setWidgetStatus("error");
    }, 10_000);

    const initializeWidget = () => {
      if (cancelled || !container || !window.tf?.createWidget) {
        if (!cancelled) setWidgetStatus("error");
        return;
      }

      container.innerHTML = "";
      window.tf.createWidget(TYPEFORM_FORM_ID, {
        container,
        hideHeaders: true,
        onReady: () => {
          window.clearTimeout(timeoutId);
          const iframe = container.querySelector("iframe");
          if (iframe) {
            iframe.title = "Belize Kids secure contact form";
          }
          setWidgetStatus("ready");
          trackContactFormReady("contact_section", "typeform");
        },
        onStarted: () => trackContactFormStarted("contact_section", "typeform"),
        onSubmit: () =>
          trackContactFormSubmitted("contact_section", "typeform"),
      });
    };

    const handleScriptLoad = () => {
      scriptElement?.setAttribute("data-loaded", "true");
      initializeWidget();
    };
    const handleScriptError = () => {
      window.clearTimeout(timeoutId);
      if (!cancelled) setWidgetStatus("error");
    };

    if (window.tf?.createWidget) {
      initializeWidget();
    } else {
      const existingScript = document.getElementById(
        "typeform-embed-script",
      ) as HTMLScriptElement | null;

      scriptElement = existingScript;

      if (existingScript) {
        existingScript.addEventListener("load", handleScriptLoad, { once: true });
        existingScript.addEventListener("error", handleScriptError, { once: true });
        if (existingScript.getAttribute("data-loaded") === "true") {
          initializeWidget();
        }
      } else {
        scriptElement = document.createElement("script");
        scriptElement.id = "typeform-embed-script";
        scriptElement.src = "https://embed.typeform.com/next/embed.js";
        scriptElement.async = true;
        scriptElement.addEventListener("load", handleScriptLoad, { once: true });
        scriptElement.addEventListener("error", handleScriptError, { once: true });
        document.head.appendChild(scriptElement);
      }
    }

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      scriptElement?.removeEventListener("load", handleScriptLoad);
      scriptElement?.removeEventListener("error", handleScriptError);
      container.innerHTML = "";
    };
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
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
                <h3 className="mb-6 text-2xl font-bold text-white">Contact Information</h3>
                <p className="text-white/90 mb-8">
                  Whether you're interested in volunteering, donating, or learning more about our mission, 
                  we're here to help.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Email</p>
                      <p className="text-white font-medium">Contact us through the form</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Office</p>
                      <p className="text-white font-medium">
                        San Pedro, Ambergris Caye<br />
                        Belize, Central America
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">US Mailing</p>
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
                        <Facebook size={18} />
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
                <p className="mb-4 text-sm text-gray-600">
                  Prefer a direct link? Use our secure contact form at{" "}
                  <a
                    href={TYPEFORM_FORM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-belize-blue underline-offset-4 hover:underline"
                    onClick={() =>
                      trackFormLinkClick("contact_section", "typeform")
                    }
                  >
                    form.typeform.com
                  </a>
                  .
                </p>
                <div className="relative w-full h-[600px] bg-gray-50 rounded-lg">
                  <div
                    ref={widgetContainerRef}
                    className={`h-full w-full ${widgetStatus === "ready" ? "" : "invisible"}`}
                  ></div>
                  {widgetStatus !== "ready" && (
                    <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                      <div>
                        <p className="font-medium text-gray-800">
                          {widgetStatus === "loading"
                            ? "Loading the secure contact form…"
                            : "The embedded form could not be loaded."}
                        </p>
                        {widgetStatus === "error" && (
                          <Button asChild variant="belizeBlue" className="mt-4">
                            <a
                              href={TYPEFORM_FORM_URL}
                              target="_blank"
                              rel="noreferrer"
                              onClick={() =>
                                trackFormLinkClick("contact_section_fallback", "typeform")
                              }
                            >
                              Open the contact form
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                  <noscript>
                    <div className="flex h-full items-center justify-center px-6 text-center text-sm text-gray-600">
                      JavaScript is disabled. Please use the direct contact form link above to send us a message.
                    </div>
                  </noscript>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
