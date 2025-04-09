
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, PiggyBank } from "lucide-react";

const MembershipPromo: React.FC = () => {
  return (
    <section className="py-12 bg-belize-blue/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3">
            <div className="flex items-center gap-2 mb-2">
              <PiggyBank className="h-5 w-5 text-belize-blue" />
              <span className="text-sm font-semibold uppercase tracking-wider text-belize-blue">Monthly Investment</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-belize-blue mb-4">
              Create Lasting Impact with Monthly Investing
            </h2>
            <p className="text-lg text-gray-700 mb-0">
              Join our community of monthly investors creating sustainable change for children in Belize. Your consistent support helps provide ongoing healthcare and education programs.
            </p>
          </div>
          <div>
            <Link to="/monthly-investment">
              <Button className="bg-belize-blue hover:bg-belize-blue/90 text-white text-lg px-6 py-6 mt-2">
                <PiggyBank className="mr-2 h-5 w-5" />
                Learn About Investing
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
