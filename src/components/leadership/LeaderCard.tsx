
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface LeaderCardProps {
  name: string;
  role: string;
  bio: React.ReactNode;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ name, role, bio }) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-3">
        <h3 className="text-2xl font-bold text-belize-green">{name}</h3>
        <p className="text-lg font-medium text-belize-teal">{role}</p>
      </CardHeader>
      <Separator className="mx-6 bg-belize-sand/50" />
      <CardContent className="pt-6">
        <div className="prose prose-lg max-w-none text-gray-700">
          {bio}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderCard;
