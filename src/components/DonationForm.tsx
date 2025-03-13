
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, CreditCard, Calendar, Award } from "lucide-react";
import { useToast } from "@/components/ui/toast";

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
      title: "Donation Submitted",
      description: `Thank you for your ${paymentType === "monthly" ? "monthly" : "one-time"} donation of ${getFinalAmount()}.`,
    });
  };

  return (
    <section id="donate" className="section-padding bg-belize-light">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Make a Difference Today</h2>
          <p className="text-lg text-gray-700">
            Your donation helps us support children in Belize. 100% of your contribution goes directly to our programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Your Donation Impact</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-md">
                  <DollarSign className="h-6 w-6 text-belize-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">$25</h4>
                  <p className="text-gray-700">Provides school supplies for a child for one semester</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-md">
                  <DollarSign className="h-6 w-6 text-belize-teal" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">$50</h4>
                  <p className="text-gray-700">Funds a month of after-school tutoring for a child</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-md">
                  <DollarSign className="h-6 w-6 text-belize-coral" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">$100</h4>
                  <p className="text-gray-700">Covers medical checkups for five children</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-md">
                  <DollarSign className="h-6 w-6 text-belize-green" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">$500</h4>
                  <p className="text-gray-700">Provides a full scholarship for a student for one year</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-belize-blue" />
                <h4 className="font-bold">Tax Deductible</h4>
              </div>
              <p className="text-gray-700">
                All donations are tax-deductible through our U.S.-based 501(c)(3) non-profit organization. 
                You'll receive a receipt for your tax records.
              </p>
            </div>
          </div>
          
          <div>
            <Card className="border-none shadow-xl">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit}>
                  <Tabs defaultValue="oneTime" onValueChange={(val) => setPaymentType(val)}>
                    <TabsList className="grid grid-cols-2 mb-6">
                      <TabsTrigger value="oneTime">One-time</TabsTrigger>
                      <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    </TabsList>
                    
                    <div className="mb-6">
                      <Label className="mb-2 block">Select donation amount</Label>
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
                                  ? "bg-belize-blue text-white border-belize-blue"
                                  : "bg-white text-gray-700 border-gray-200 hover:border-belize-blue"
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
                    
                    <Button type="submit" className="w-full py-6 text-lg bg-belize-coral hover:bg-opacity-90">
                      Donate {getFinalAmount()}
                      {paymentType === "monthly" && " Monthly"}
                    </Button>
                    
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
