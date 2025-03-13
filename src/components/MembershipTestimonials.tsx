
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { QuoteIcon } from "lucide-react";

const MembershipTestimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Being a monthly member gives me peace of mind knowing I'm contributing to sustainable change for children in Belize. The regular updates make me feel connected to the impact.",
      name: "Sarah Johnson",
      title: "Member since 2021",
      avatar: "/lovable-uploads/5c98d9b7-c36a-4f65-a62f-e9a9f52e87f0.png"
    },
    {
      quote: "What I love about the membership program is the transparency. I know exactly where my $20 goes each month, and the cumulative impact over time is remarkable.",
      name: "Michael Torres",
      title: "Member since 2020",
      avatar: "/lovable-uploads/378a9d5e-a28f-46e3-b7b3-548b5d1bc855.png"
    },
    {
      quote: "The membership program makes giving easy and effective. I appreciate how Belize Kids.org focuses on sustainable solutions rather than quick fixes.",
      name: "Jennifer Lee",
      title: "Member since 2022",
      avatar: "/lovable-uploads/812b0d25-46e7-4113-9dde-e057f9d49833.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-belize-blue mb-4">Member Stories</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hear from some of our dedicated monthly members about why they chose to support Belize Kids.org
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <QuoteIcon className="h-8 w-8 text-belize-green/40 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <Separator className="my-4" />
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-belize-blue">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipTestimonials;
