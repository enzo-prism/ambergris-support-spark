
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LucideIcon } from "lucide-react";
import { Image } from "@/components/ui/image";

interface LeaderCardProps {
  name: string;
  role: string;
  bio: React.ReactNode;
  icon: LucideIcon;
  imageSrc?: string;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ name, role, bio, icon: Icon, imageSrc }) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className={`${imageSrc ? 'md:w-1/3' : ''}`}>
          {imageSrc ? (
            <div className="relative h-64 md:h-auto md:min-h-full">
              <Image 
                src={imageSrc} 
                alt={name} 
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
          ) : null}
        </div>
        <div className={`${imageSrc ? 'md:w-2/3' : 'w-full'}`}>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3 mb-2">
              {!imageSrc && (
                <div className="p-2 rounded-full bg-belize-light">
                  <Icon className="h-6 w-6 text-belize-green" />
                </div>
              )}
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
        </div>
      </div>
    </Card>
  );
};

export default LeaderCard;
