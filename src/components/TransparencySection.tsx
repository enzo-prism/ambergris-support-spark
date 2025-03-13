
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, BarChart2, PieChart } from "lucide-react";

const TransparencySection: React.FC = () => {
  const transparencyFeatures = [
    {
      icon: <BarChart2 className="h-6 w-6 text-belize-green" />,
      title: "Monthly Financial Reports",
      description: "We publish detailed reports of all fundraising activities and expenses every month."
    },
    {
      icon: <PieChart className="h-6 w-6 text-belize-green" />,
      title: "Program Impact Metrics",
      description: "Clear metrics on how our programs are making a difference in children's lives."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-belize-green" />,
      title: "Third-Party Audits",
      description: "Annual third-party audits ensure accountability and transparency."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Transparency Promise</h2>
          <p className="text-lg text-gray-700">
            We believe in complete transparency. Every dollar is accounted for, and we're proud to share 
            how your donations are making an impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {transparencyFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white w-16 h-16 rounded-full shadow-md flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">100% Donation Model</h3>
              <p className="text-gray-700 mb-6">
                All administrative costs are covered by the owners of Canary Cove, 
                ensuring that <span className="font-bold">100% of your donation</span> goes directly 
                to programs benefiting children in Belize.
              </p>
              <p className="text-gray-700 mb-8">
                This means your entire contribution – every cent – goes toward making a real 
                difference in a child's life, not to overhead or administrative expenses.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">No staff salaries paid from donations</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">No fundraising costs deducted from donations</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">No operational expenses taken from donations</p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="font-bold text-lg mb-4">Latest Financial Reports</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">January 2023 Financial Report</span>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      PDF
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">February 2023 Financial Report</span>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      PDF
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">March 2023 Financial Report</span>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      PDF
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-belize-light p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-4">Annual Impact Report</h4>
                <p className="text-gray-700 mb-4">
                  Our detailed annual report covers all programs, financial data, and impact metrics 
                  for the year.
                </p>
                <Button className="w-full flex items-center justify-center gap-2 bg-belize-green hover:bg-opacity-90">
                  <Download className="h-4 w-4" />
                  Download 2023 Annual Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
