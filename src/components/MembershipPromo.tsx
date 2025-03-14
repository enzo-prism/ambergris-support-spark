
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, CreditCard } from "lucide-react";

const MembershipPromo: React.FC = () => {
  return (
    <section className="py-12 bg-belize-blue/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="h-5 w-5 text-belize-blue" />
              <span className="text-sm font-semibold uppercase tracking-wider text-belize-blue">Monthly Membership</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-belize-blue mb-4">
              Join Our Monthly Membership Program
            </h2>
            <p className="text-lg text-gray-700 mb-0">
              Join our exclusive membership community creating sustainable change for children in Belize through monthly commitment. Members receive special updates, exclusive reports, and community recognition.
            </p>
          </div>
          <div>
            <Link to="/membership">
              <Button className="bg-belize-blue hover:bg-belize-blue/90 text-white text-lg px-6 py-6 mt-2">
                <Users className="mr-2 h-5 w-5" />
                Join Our Membership
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
