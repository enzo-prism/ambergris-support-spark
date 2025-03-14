
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LucideIcon } from "lucide-react";

interface LeaderCardProps {
  name: string;
  role: string;
  bio: React.ReactNode;
  icon: LucideIcon;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ name, role, bio, icon: Icon }) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-full bg-belize-light">
            <Icon className="h-6 w-6 text-belize-green" />
          </div>
          <h3 className="text-2xl font-bold text-belize-green">{name}</h3>
        </div>
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
