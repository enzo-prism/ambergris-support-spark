
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, CreditCard, Calendar, Award, PiggyBank, Users, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DonationForm: React.FC = () => {
  const { toast } = useToast();
  const [donationAmount, setDonationAmount] = useState<string>("50");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [paymentType, setPaymentType] = useState<string>("oneTime");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAmountChange = (value: string) => {
    setDonationAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setDonationAmount("custom");
  };

  const getFinalAmount = () => {
    if (donationAmount === "custom" && customAmount) {
      return `$${customAmount}`;
    }
    return `$${donationAmount}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would process the payment
    toast({
      title: "Investment Submitted",
      description: `Thank you for your ${paymentType === "monthly" ? "monthly" : "one-time"} investment of ${getFinalAmount()}.`,
    });
  };

  const impactItems = [
    {
      amount: "$25",
      description: "Provides school supplies for a child for one semester",
      color: "bg-belize-green",
    },
    {
      amount: "$50",
      description: "Funds a month of after-school tutoring for a child",
      color: "bg-belize-teal",
    },
    {
      amount: "$100",
      description: "Covers medical checkups for five children",
      color: "bg-belize-coral",
    },
    {
      amount: "$500",
      description: "Provides a full scholarship for a student for one year",
      color: "bg-belize-green",
    },
  ];

  return (
    <section id="donate" className="section-padding bg-belize-light">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-belize-coral/10 px-4 py-2 rounded-full mb-4">
            {paymentType === "monthly" ? (
              <>
                <Users className="h-5 w-5 text-belize-blue" />
                <span className="text-belize-blue font-semibold">Monthly Membership</span>
              </>
            ) : (
              <>
                <PiggyBank className="h-5 w-5 text-belize-coral" />
                <span className="text-belize-coral font-semibold">One-Time Investment</span>
              </>
            )}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {paymentType === "monthly" 
              ? "Join Our Membership Program" 
              : "Invest in Change Today"}
          </h2>
          <p className="text-lg text-gray-700">
            {paymentType === "monthly"
              ? "Your monthly membership helps us provide consistent support to children in Belize. Join our community of regular contributors."
              : "Your one-time investment helps us support children in Belize. 100% of your contribution goes directly to our programs."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-belize-green/90 to-belize-teal/80 py-6 px-6">
                <h3 className="text-2xl font-bold text-white">Your Investment Impact</h3>
              </div>
              <div className="p-6 bg-white space-y-8">
                {impactItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group hover:transform hover:translate-x-1 transition-transform">
                    <div className={`flex-shrink-0 ${item.color} text-white p-4 rounded-full shadow-md group-hover:shadow-lg transition-all`}>
                      <DollarSign className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1 text-gray-800">{item.amount}</h4>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
                
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
                <form onSubmit={handleSubmit}>
                  <Tabs 
                    defaultValue="oneTime" 
                    value={paymentType}
                    onValueChange={(val) => setPaymentType(val)}
                  >
                    <TabsList className="grid grid-cols-2 mb-6">
                      <TabsTrigger value="oneTime" className="flex items-center gap-2 py-2">
                        <PiggyBank className="h-4 w-4" />
                        <span>One-time</span>
                      </TabsTrigger>
                      <TabsTrigger value="monthly" className="flex items-center gap-2 py-2">
                        <Users className="h-4 w-4" />
                        <span>Monthly</span>
                      </TabsTrigger>
                    </TabsList>
                    
                    <div className="mb-6">
                      <Label className="mb-2 block">Select investment amount</Label>
                      <RadioGroup 
                        value={donationAmount} 
                        onValueChange={handleAmountChange}
                        className="grid grid-cols-2 md:grid-cols-4 gap-3"
                      >
                        {["25", "50", "100", "200"].map((amount) => (
                          <div key={amount} className="relative">
                            <RadioGroupItem 
                              value={amount} 
                              id={`amount-${amount}`} 
                              className="sr-only"
                            />
                            <Label
                              htmlFor={`amount-${amount}`}
                              className={`flex justify-center items-center px-4 py-3 rounded-md border cursor-pointer transition-all ${
                                donationAmount === amount
                                  ? "bg-belize-green text-white border-belize-green"
                                  : "bg-white text-gray-700 border-gray-200 hover:border-belize-green"
                              }`}
                            >
                              ${amount}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    
                    <div className="mb-6">
                      <Label htmlFor="customAmount" className="mb-2 block">Or enter custom amount</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                          $
                        </span>
                        <Input
                          id="customAmount"
                          type="number"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          className="pl-8"
                          placeholder="Enter amount"
                        />
                      </div>
                    </div>
                    
                    <div className="grid gap-4 mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="border-t pt-6 mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <CreditCard className="h-5 w-5 text-gray-500" />
                        <h4 className="font-medium">Payment Information</h4>
                      </div>
                      
                      <div className="grid gap-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            name="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input
                              id="expiry"
                              name="expiry"
                              placeholder="MM/YY"
                              value={formData.expiry}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              name="cvv"
                              type="password"
                              placeholder="123"
                              value={formData.cvv}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className={`w-full py-6 text-lg flex items-center justify-center ${
                        paymentType === "monthly" 
                          ? "bg-belize-blue hover:bg-belize-blue/90" 
                          : "bg-belize-coral hover:bg-belize-coral/90"
                      }`}
                    >
                      {paymentType === "monthly" ? (
                        <>
                          <Users className="mr-2 h-5 w-5" />
                          Join as Member - {getFinalAmount()} Monthly
                        </>
                      ) : (
                        <>
                          <PiggyBank className="mr-2 h-5 w-5" />
                          Invest {getFinalAmount()} Once
                        </>
                      )}
                    </Button>
                    
                    <div className="text-center mt-4">
                      {paymentType === "monthly" ? (
                        <p className="text-sm text-gray-600 bg-blue-50 p-2 rounded">
                          <strong>Membership:</strong> Join our community with monthly recurring support
                        </p>
                      ) : (
                        <p className="text-sm text-gray-600 bg-orange-50 p-2 rounded">
                          <strong>One-time:</strong> Make a single contribution today
                        </p>
                      )}
                    </div>
                    
                    <p className="text-center text-sm text-gray-500 mt-4">
                      Your payment information is secured with 256-bit encryption.
                    </p>
                  </Tabs>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationForm;
