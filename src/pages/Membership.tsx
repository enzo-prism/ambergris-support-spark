
import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecurringInvestmentHero from "@/components/RecurringInvestmentHero";
import InvestmentForm from "@/components/InvestmentForm";
import RecurringInvestmentBenefits from "@/components/RecurringInvestmentBenefits";
import { buildSiteUrl, SITE_OG_IMAGE_URL } from "@/lib/site";

const Membership: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Monthly Investment Program - Support Children in Belize | BelizeKIDS.ORG</title>
        <meta name="description" content="Join our monthly investment program starting at $20/month to create lasting change for children in Belize. Support healthcare, education, and community development with complete transparency and regular impact updates." />
        <meta property="og:title" content="Monthly Investment Program - Support Children in Belize | BelizeKIDS.ORG" />
        <meta property="og:description" content="Join our monthly investment program starting at $20/month to create lasting change for children in Belize. Support healthcare, education, and community development with complete transparency and regular impact updates." />
        <meta property="og:image" content={SITE_OG_IMAGE_URL} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Belize children charity, monthly donation, recurring giving, child welfare Belize, education support, healthcare programs, community development" />
        <link rel="canonical" href={buildSiteUrl("/monthly-investment")} />
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
