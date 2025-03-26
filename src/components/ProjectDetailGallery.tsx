
import React, { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const ProjectDetailGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4 my-8">
      <h3 className="text-xl font-bold text-belize-green">Photo Gallery</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
        {images.map((image, index) => (
          <Dialog key={index} open={isDialogOpen && currentImageIndex === index} onOpenChange={(open) => {
            setIsDialogOpen(open);
            if (open) setCurrentImageIndex(index);
          }}>
            <DialogTrigger asChild>
              <div className="cursor-pointer overflow-hidden rounded-md border border-gray-200 hover:border-belize-blue transition-colors">
                <AspectRatio ratio={4/3} className="bg-gray-100">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </AspectRatio>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-screen-md max-h-[90vh] p-0 overflow-hidden bg-black/95 border-none">
              <div className="relative w-full h-full flex items-center justify-center">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-2 right-2 z-50 rounded-full bg-black/50 hover:bg-black/70 text-white"
                  onClick={() => setIsDialogOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute left-2 z-50 rounded-full bg-black/50 hover:bg-black/70 text-white"
                  onClick={handlePrevious}
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                
                <div className="w-full h-full flex items-center justify-center p-4">
                  <img 
                    src={images[currentImageIndex].src} 
                    alt={images[currentImageIndex].alt} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 z-50 rounded-full bg-black/50 hover:bg-black/70 text-white"
                  onClick={handleNext}
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetailGallery;
