
import React, { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
  title?: string;
  description?: string;
}

const ProjectDetailGallery: React.FC<ProjectGalleryProps> = ({ 
  images, 
  title = "Photo Gallery",
  description = "View more photos from this project" 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Default set of images if none provided
  const defaultImages = [
    {
      src: "https://imgur.com/4TiKNoW",
      alt: "Belize Kids project photo 1"
    },
    {
      src: "https://imgur.com/jbbWRFj",
      alt: "Belize Kids project photo 2"
    },
    {
      src: "/lovable-uploads/2024-10-vision-clinic-6.jpg",
      alt: "Belize Kids project photo 3"
    },
    {
      src: "/lovable-uploads/2024-10-vision-clinic-9.jpg",
      alt: "Belize Kids project photo 4"
    },
    {
      src: "/lovable-uploads/2024-10-vision-clinic-team.jpg",
      alt: "Belize Kids project photo 5"
    },
    {
      src: "/lovable-uploads/cc1bb947-c2e0-4bd5-8ffc-d1667dfb614e.png",
      alt: "Belize Kids project photo 6"
    }
  ];

  const galleryImages = images && images.length > 0 ? images : defaultImages;

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4 my-12">
      <h3 className="text-2xl font-bold text-belize-green">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
        {galleryImages.map((image, index) => (
          <Dialog key={index} open={isDialogOpen && currentImageIndex === index} onOpenChange={(open) => {
            setIsDialogOpen(open);
            if (open) setCurrentImageIndex(index);
          }}>
            <DialogTrigger asChild>
              <div className="cursor-pointer overflow-hidden rounded-md border border-gray-200 hover:border-belize-blue transition-colors relative group">
                <AspectRatio ratio={1/1} className="bg-gray-100">
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ZoomIn className="text-white h-8 w-8" />
                  </div>
                </AspectRatio>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-screen-lg max-h-[90vh] p-0 overflow-hidden bg-black/95 border-none">
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
                  <Image 
                    src={galleryImages[currentImageIndex].src} 
                    alt={galleryImages[currentImageIndex].alt} 
                    className="max-w-full max-h-full object-contain"
                    fallbackClassName="max-w-full max-h-full object-contain"
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
                
                <div className="absolute bottom-2 left-0 right-0 text-center text-white text-sm">
                  <p className="px-4 py-1 bg-black/50 mx-auto inline-block rounded-full">
                    {currentImageIndex + 1} / {galleryImages.length}
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetailGallery;
