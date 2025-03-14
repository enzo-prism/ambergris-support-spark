
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MembershipHero from "@/components/MembershipHero";
import MembershipBenefits from "@/components/MembershipBenefits";
import MembershipTestimonials from "@/components/MembershipTestimonials";
import MembershipForm from "@/components/MembershipForm";

const Membership: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden overflow-fix">
      <Helmet>
        <title>Monthly Membership | BelizeKids.org</title>
        <meta name="description" content="Join our exclusive monthly membership program and help improve education and healthcare for children in Belize. For just $20 a month, you can make a lasting impact." />
        <meta property="og:title" content="Monthly Membership | BelizeKids.org" />
        <meta property="og:description" content="Join our exclusive monthly membership program and help improve education and healthcare for children in Belize. For just $20 a month, you can make a lasting impact." />
        <meta property="og:image" content="/lovable-uploads/b627ac31-d9fd-4dbb-bb4d-8a4881b3813d.png" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>
      <Navbar />
      <MembershipHero />
      <MembershipBenefits />
      <MembershipTestimonials />
      <MembershipForm />
      <Footer />
    </div>
  );
};

export default Membership;
