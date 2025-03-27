
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecurringInvestmentHero from "@/components/RecurringInvestmentHero";
import RecurringInvestmentBenefits from "@/components/RecurringInvestmentBenefits";
import InvestmentForm from "@/components/InvestmentForm";

const RecurringInvestment: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden overflow-fix">
      <Helmet>
        <title>Monthly Investment | BelizeKids.org</title>
        <meta name="description" content="Help improve education and healthcare for children in Belize with a consistent monthly investment. Make a lasting impact with recurring support." />
        <meta property="og:title" content="Monthly Investment | BelizeKids.org" />
        <meta property="og:description" content="Help improve education and healthcare for children in Belize with a consistent monthly investment. Make a lasting impact with recurring support." />
        <meta property="og:image" content="/lovable-uploads/b627ac31-d9fd-4dbb-bb4d-8a4881b3813d.png" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>
      <Navbar />
      <RecurringInvestmentHero />
      <RecurringInvestmentBenefits />
      <InvestmentForm />
      <Footer />
    </div>
  );
};

export default RecurringInvestment;
