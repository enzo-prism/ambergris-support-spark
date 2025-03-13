
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface BoardMember {
  name: string;
  role: string;
}

interface BoardSectionProps {
  members: BoardMember[];
}

const BoardSection: React.FC<BoardSectionProps> = ({ members }) => {
  return (
    <Card className="bg-belize-light border-belize-sand">
      <CardContent className="pt-6">
        <h2 className="text-3xl font-bold mb-6 text-belize-green">Our US Board of Directors</h2>
        <div className="prose prose-lg max-w-none text-gray-700 mb-6">
          <p>
            BelizeKids is proudly registered as a 501(c)(3) non-profit organization in the United States. 
            Our US board of directors plays a crucial role in guiding the organization's strategic direction 
            and ensuring financial transparency. The board includes:
          </p>
        </div>
        
        <ul className="grid gap-3 mb-6">
          {members.map((member, index) => (
            <li key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
              <span className="text-belize-green mr-2 text-xl">•</span>
              <span className="font-bold text-gray-800">{member.name}</span>
              <span className="mx-2 text-gray-500">–</span>
              <span className="text-gray-700">{member.role}</span>
            </li>
          ))}
        </ul>
        
        <p className="text-lg text-gray-700">
          Together, they bring a wealth of experience and a shared passion for making 
          a difference in the lives of Belizean children.
        </p>
      </CardContent>
    </Card>
  );
};

export default BoardSection;
