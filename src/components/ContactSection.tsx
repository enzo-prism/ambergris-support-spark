
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/toast";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg text-gray-700">
            Have questions or want to learn more about BelizeKids.org? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-700 mb-8">
                Whether you have questions about our programs, want to volunteer, 
                or are interested in becoming a partner, we're here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-belize-light p-3 rounded-full">
                    <Mail className="h-6 w-6 text-belize-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Us</h4>
                    <p className="text-gray-600">info@belizekids.org</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-belize-light p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-belize-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Office Location</h4>
                    <p className="text-gray-600">
                      San Pedro, Ambergris Caye<br />
                      Belize, Central America
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 bg-belize-light p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-belize-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">US Mailing Address</h4>
                    <p className="text-gray-600">
                      BelizeKids.org<br />
                      501(c)(3) Non-Profit<br />
                      123 Charity Lane<br />
                      Miami, FL 33101
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-4">Follow Our Journey</h4>
              <p className="text-gray-700 mb-4">
                Stay updated with our latest news, events, and success stories by
                following us on social media.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1">Facebook</Button>
                <Button variant="outline" className="flex-1">Instagram</Button>
                <Button variant="outline" className="flex-1">Twitter</Button>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-belize-blue hover:bg-opacity-90"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
