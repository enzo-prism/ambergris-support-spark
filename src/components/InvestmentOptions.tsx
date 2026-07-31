
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Mail, ExternalLink, CheckCircle2, PiggyBank } from "lucide-react";
import { Link } from "react-router-dom";
import {
  trackContactClick,
  trackInvestmentClick,
} from "@/lib/analytics";

const InvestmentOptions: React.FC = () => {
  return (
    <section id="donate" className="section-padding bg-belize-light">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="coral" className="mb-4 gap-2 px-4 py-2 text-sm font-semibold">
            <PiggyBank className="h-5 w-5" />
            Investment Options
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Invest in Belize's Future
          </h2>
          <p className="text-lg text-gray-700">
            Your investment helps us support children in Belize. 100% of your contribution goes directly to our programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-belize-green/90 to-belize-teal/80 py-6 px-6">
                <h3 className="text-2xl font-bold text-white">Your Investment Impact</h3>
              </div>
              <div className="p-6 bg-white space-y-8">
                <div className="flex items-start gap-4 group hover:transform hover:translate-x-1 transition-transform">
                  <div className="flex-shrink-0 bg-belize-green text-white p-4 rounded-full shadow-md group-hover:shadow-lg transition-all">
                    <PiggyBank className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-gray-800">$25</h4>
                    <p className="text-gray-700">Provides school supplies for a child for one semester</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group hover:transform hover:translate-x-1 transition-transform">
                  <div className="flex-shrink-0 bg-belize-teal text-white p-4 rounded-full shadow-md group-hover:shadow-lg transition-all">
                    <PiggyBank className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-gray-800">$50</h4>
                    <p className="text-gray-700">Funds a month of after-school tutoring for a child</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group hover:transform hover:translate-x-1 transition-transform">
                  <div className="flex-shrink-0 bg-belize-coral text-white p-4 rounded-full shadow-md group-hover:shadow-lg transition-all">
                    <PiggyBank className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-gray-800">$100</h4>
                    <p className="text-gray-700">Covers medical checkups for five children</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group hover:transform hover:translate-x-1 transition-transform">
                  <div className="flex-shrink-0 bg-belize-green text-white p-4 rounded-full shadow-md group-hover:shadow-lg transition-all">
                    <PiggyBank className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-gray-800">$500</h4>
                    <p className="text-gray-700">Provides a full scholarship for a student for one year</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-gradient-to-r from-belize-green to-belize-teal p-4 rounded-full shadow-md">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-gray-800">Tax Deductible</h4>
                      <p className="text-gray-700">
                        All investments are tax-deductible through our U.S.-based 501(c)(3) non-profit 
                        organization. You'll receive a receipt for your tax records.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div>
            <Card className="border-none shadow-xl">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-belize-blue mb-6">Coming Soon: Online Investments</h3>
                    <p className="text-gray-700 mb-6">
                      We're currently setting up our online payment system. Soon, you'll be able to make investments directly through our website.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="font-bold text-belize-blue mb-2">Mail a Check</h4>
                    <p className="text-gray-700">
                      Make checks payable to "Belize Kids" and mail to:<br />
                      <span className="font-medium">PO BOX 620134, Woodside, CA 94062</span>
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="font-bold text-belize-green mb-2">Contact Us</h4>
                    <p className="text-gray-700 mb-3">
                      For questions about other ways to invest, please reach out to us.
                    </p>
                    <Button 
                      variant="outlineBelize"
                      onClick={() => {
                        trackContactClick("investment_options", "contact_section");
                        window.location.href = "/#contact";
                      }}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Us
                    </Button>
                  </div>
                  
                  <Button
                    asChild
                      variant="belizeBlue"
                      className="w-full mt-4 py-6 flex items-center justify-center"
                  >
                    <Link
                      to="/monthly-investment"
                      onClick={() =>
                        trackInvestmentClick("investment_options", "monthly_investment")
                      }
                    >
                      <PiggyBank className="mr-2 h-5 w-5" />
                      Learn About Monthly Investing
                    </Link>
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    Belize Kids | TAX ID 81-2841433 | PO BOX 620134, Woodside, CA 94062
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptions;
