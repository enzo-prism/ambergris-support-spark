
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  BarChart2, 
  PieChart, 
  ArrowUpRight,
  DollarSign,
  Receipt,
  Users
} from "lucide-react";
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TransparencySection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("promise");

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
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 rounded-full border-belize-green/20 bg-belize-green/10 text-belize-green">
            100% Transparent
          </Badge>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Our Transparency Promise</h2>
          <p className="text-lg text-gray-700">
            We believe in complete transparency. Every dollar is accounted for, and we're proud to share 
            how your donations are making an impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {transparencyFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-belize-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <Tabs 
            value={selectedTab} 
            onValueChange={setSelectedTab}
            className="w-full"
          >
            <div className="bg-belize-blue/5 px-4 sm:px-6 pt-4">
              <TabsList className="mb-0 grid h-auto grid-cols-1 gap-2 bg-transparent p-0 sm:grid-cols-3 sm:gap-0">
                <TabsTrigger 
                  value="promise" 
                  className={`py-3 text-sm sm:text-base ${selectedTab === "promise" ? 'text-belize-green border-b-2 border-belize-green' : 'text-gray-600 border-b-2 border-transparent'}`}
                >
                  Donation Model
                </TabsTrigger>
                <TabsTrigger 
                  value="reports" 
                  className={`py-3 text-sm sm:text-base ${selectedTab === "reports" ? 'text-belize-green border-b-2 border-belize-green' : 'text-gray-600 border-b-2 border-transparent'}`}
                >
                  Financial Commitment
                </TabsTrigger>
                <TabsTrigger 
                  value="projects" 
                  className={`py-3 text-sm sm:text-base ${selectedTab === "projects" ? 'text-belize-green border-b-2 border-belize-green' : 'text-gray-600 border-b-2 border-transparent'}`}
                >
                  Project Financials
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="promise" className="p-4 sm:p-6 md:p-10 mt-0">
              <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">100% Donation Model</h3>
                  <p className="text-gray-700 mb-6">
                    All administrative costs are covered by the owners of Canary Cove, 
                    ensuring that <span className="font-bold text-belize-green">100% of your donation</span> goes directly 
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
                <div className="bg-belize-light p-4 sm:p-6 rounded-lg relative">
                  <div className="absolute top-3 right-3 bg-white text-xs font-medium text-belize-green px-2 py-1 rounded-full">
                    Fully Transparent
                  </div>
                  <h4 className="font-bold text-lg mb-2">Our Only Expenses</h4>
                  <p className="text-gray-700 mb-6">
                    The only deductions from donations are:
                  </p>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-white p-3 sm:p-4 rounded-lg flex items-start gap-3 sm:gap-4">
                      <span className="bg-belize-green/10 text-belize-green p-2 rounded">
                        <Receipt className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <div>
                        <h5 className="font-bold mb-1">Credit Card Processing</h5>
                        <p className="text-sm text-gray-600">2.9% fee through Stripe payment processing</p>
                      </div>
                    </div>
                    <div className="bg-white p-3 sm:p-4 rounded-lg flex items-start gap-3 sm:gap-4">
                      <span className="bg-belize-green/10 text-belize-green p-2 rounded">
                        <DollarSign className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <div>
                        <h5 className="font-bold mb-1">Money Transfer</h5>
                        <p className="text-sm text-gray-600">3.5% fee to wire money from USA to Belize</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 italic mb-2">All other overhead is underwritten by our founding partners</p>
                    <p className="font-medium text-belize-green">93.6% of every dollar directly funds our projects</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reports" className="p-4 sm:p-6 md:p-10 mt-0">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-white p-6 border border-gray-200 rounded-lg relative col-span-2">
                  <h4 className="font-bold text-xl mb-6">Our Financial Commitment</h4>
                  <ul className="space-y-4 mb-8">
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">All project goals, costs, and fundraising results are published online regularly</p>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">Financial reports are available for review by the public</p>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">Project-specific breakdowns show exactly how funds were allocated</p>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">Third-party audits verify our financial records annually</p>
                    </li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 items-center">
                        <span className="bg-belize-green/10 p-1.5 rounded">
                          <Users className="h-4 w-4 text-belize-green" />
                        </span>
                        <span className="font-medium">501(c)(3) Non-Profit</span>
                      </div>
                      <span className="text-gray-500 text-sm">TAX ID: 81-2841433</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="projects" className="p-4 sm:p-6 md:p-10 mt-0">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold">Sample Project Breakdown</h3>
                  <Button asChild variant="outlineBelize" className="flex w-full items-center justify-center gap-2 sm:w-auto">
                    <Link to="/projects">
                      View All Projects <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="bg-belize-light/30 p-4 sm:p-6 rounded-lg mb-8">
                  <h4 className="text-lg sm:text-xl font-bold mb-3">Week #4 Summer Camp at Basil Jones, Mile 14, Ambergris Caye</h4>
                  <p className="text-gray-700 mb-6">
                    Financial breakdown of our summer camp project, showing complete transparency in how funds were raised and spent.
                    All money is in Belize Dollars (BZD).
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="overflow-x-auto">
                      <h5 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 bg-belize-green text-white rounded-full flex items-center justify-center text-sm">$</span>
                        Donations Received
                      </h5>
                      <div className="overflow-x-auto -mx-4 sm:mx-0">
                        <Table className="min-w-full">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[60%]">Source</TableHead>
                              <TableHead className="text-right">Amount (BZD)</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>Finn & Martini Customer Donations</TableCell>
                              <TableCell className="text-right">$400</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Canary Cove Guest Donations</TableCell>
                              <TableCell className="text-right">$150</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>San Pedro LobsterFestival Donations</TableCell>
                              <TableCell className="text-right">$500</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Finn & Martini ($2 per martini in June)</TableCell>
                              <TableCell className="text-right">$700</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Belize Kids.org Matching Funds</TableCell>
                              <TableCell className="text-right">$2,000</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-bold">Total Monetary Donations</TableCell>
                              <TableCell className="text-right font-bold">$3,850</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                      <p className="text-sm text-gray-600 mt-3">
                        Additional in-kind donations: School and art supplies donated by Miss San Pedro High School 2016-2017 and Finn & Martini
                      </p>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <h5 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 bg-belize-coral text-white rounded-full flex items-center justify-center text-sm">$</span>
                        Expenditures
                      </h5>
                      <div className="overflow-x-auto -mx-4 sm:mx-0">
                        <Table className="min-w-full">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[60%]">Item</TableHead>
                              <TableHead className="text-right">Amount (BZD)</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>20 Children Sponsored @ $150 each</TableCell>
                              <TableCell className="text-right">$3,000</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>15 Sets of Twin Sheets</TableCell>
                              <TableCell className="text-right" rowSpan={2}>$850</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>8 Stand Up Fans (Simon Quan, Belize City)</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-bold">Total Expenditures</TableCell>
                              <TableCell className="text-right font-bold">$3,850</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                      <p className="text-sm italic text-gray-600 mt-4 text-center">
                        All overhead costs are underwritten by our founding partners
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                  <h5 className="font-bold text-lg mb-4 text-center">Project Results</h5>
                  <div className="flex justify-center mb-4">
                    <img 
                      src="/lovable-uploads/d0cf5c69-dc26-4c5e-9ebe-18ea1a2d19d5.png" 
                      alt="Happy kids at Basil Jones Summer Camp" 
                      className="rounded-lg max-w-full h-auto max-h-[300px] object-cover"
                    />
                  </div>
                  <p className="text-center text-lg font-medium text-belize-green">
                    Happy Kids – Our Ultimate Goal Achieved
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
