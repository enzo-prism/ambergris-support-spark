
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecurringInvestmentHero from "@/components/RecurringInvestmentHero";
import InvestmentForm from "@/components/InvestmentForm";
import RecurringInvestmentBenefits from "@/components/RecurringInvestmentBenefits";

const Membership: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Monthly Investment | BelizeKIDS.ORG</title>
        <meta name="description" content="Create lasting change for children in Belize through consistent monthly support. Your recurring investment helps provide sustainable healthcare and education." />
        <meta property="og:title" content="Monthly Investment | BelizeKIDS.ORG" />
        <meta property="og:description" content="Create lasting change for children in Belize through consistent monthly support. Your recurring investment helps provide sustainable healthcare and education." />
        <meta property="og:image" content="https://imgur.com/NVF6d3J" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <RecurringInvestmentHero />
          <RecurringInvestmentBenefits />
          <InvestmentForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Membership;
