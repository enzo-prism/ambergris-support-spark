
import React from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, Mail, ExternalLink } from "lucide-react";

const InvestmentForm: React.FC = () => {
  return (
    <section id="investment-form" className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-belize-blue/10 px-4 py-2 rounded-full mb-4">
              <CreditCard className="h-5 w-5 text-belize-blue" />
              <span className="text-belize-blue font-semibold">Investment Options</span>
            </div>
            <h2 className="text-3xl font-bold text-belize-blue">Ways to Invest in Belize's Future</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-belize-blue p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Investment Benefits</h2>
                <p className="mb-6">Your investment includes:</p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Regular investment updates and impact reports</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Recognition as an investor</span>
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
                    <span>Consistent impact through your support</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-belize-blue mb-6">Coming Soon: Online Investments</h3>
                
                <p className="text-gray-700 mb-6">
                  We're currently setting up our online payment system. Soon, you'll be able to make investments directly through our website.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="font-bold text-belize-blue mb-2">Mail a Check</h4>
                    <p className="text-gray-700">
                      Make checks payable to "BelizeKids.org" and mail to:<br />
                      <span className="font-medium">PO BOX 620134, Woodside, CA 94062</span>
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="font-bold text-belize-green mb-2">Contact Us</h4>
                    <p className="text-gray-700 mb-3">
                      For questions about other ways to invest, please reach out to us.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-belize-green text-belize-green hover:bg-belize-green hover:text-white"
                      onClick={() => window.location.href = "mailto:info@belizekids.org"}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email Us
                    </Button>
                  </div>
                  
                  <Button 
                    className="w-full bg-belize-blue hover:bg-belize-blue/90 mt-4 py-6 flex items-center justify-center"
                    onClick={() => window.location.href = "https://belizekids.org"}
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Visit Our Main Website
                  </Button>
                </div>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  BelizeKids.org | TAX ID 81-2841433 | PO BOX 620134, Woodside, CA 94062
                </p>
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

export default InvestmentForm;
