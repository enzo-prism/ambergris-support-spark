
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MembershipPromo: React.FC = () => {
  return (
    <section className="py-12 bg-belize-green/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold text-belize-blue mb-4">
              Become a Monthly Investor for Just $20
            </h2>
            <p className="text-lg text-gray-700 mb-0">
              Join our community of investors creating sustainable change for children in Belize through education, healthcare, and community development.
            </p>
          </div>
          <div>
            <Link to="/membership">
              <Button className="bg-belize-green hover:bg-belize-green/90 text-white text-lg">
                Learn More About Membership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipPromo;
