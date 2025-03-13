
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const SharedCommitment: React.FC = () => {
  return (
    <Card className="bg-gradient-to-br from-belize-light to-white border-belize-sand">
      <CardContent className="pt-6">
        <h2 className="text-3xl font-bold mb-6 text-belize-green">A Shared Commitment to Community</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Our leaders are not just figureheads—they are deeply involved in the day-to-day work of BelizeKids. 
            From partnering with local businesses to spearheading projects like free eye clinics and school 
            refurbishments, they are hands-on in their approach. Each leader's unique background and personal 
            connection to Belize enrich our ability to serve the community effectively.
          </p>
          <p>
            Whether through global expertise or local knowledge, our leadership team is united by one goal: 
            to create a brighter future for the children of Belize.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SharedCommitment;
