import React, { useEffect } from "react";
import { Mail, MessageSquare, MapPin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Extend the Window interface to include the tf property
declare global {
  interface Window {
    tf?: any;
  }
}

const ContactSection: React.FC = () => {
  useEffect(() => {
    // Load Typeform embed script if not already loaded
    if (!window.tf) {
      const script = document.createElement('script');
      script.src = '//embed.typeform.com/next/embed.js';
      script.async = true;
      document.head.appendChild(script);
    }
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
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
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
                    <Button variant="outline" size="icon" className="bg-transparent text-white border-white/30 hover:bg-white/20 hover:text-white">
                      <a 
                        href="https://www.facebook.com/profile.php?id=100064824399858" 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label="Facebook"
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
                <div className="w-full h-[600px] bg-gray-50 rounded-lg">
                  <div data-tf-live="01JXV3ZMFT7JMW7M0ZSASG5NST"></div>
                  <script src="//embed.typeform.com/next/embed.js"></script>
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
