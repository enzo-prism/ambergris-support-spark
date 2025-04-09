
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  fallbackClassName?: string;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, src, alt, fallbackSrc, fallbackClassName, crossOrigin, ...props }, ref) => {
    const [hasError, setHasError] = useState(false);
    const [imageSrc, setImageSrc] = useState<string | undefined>(src);
    
    // Default fallback image if none provided
    const defaultFallback = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='system-ui, sans-serif' font-size='14' text-anchor='middle' dominant-baseline='middle' fill='%23999999'%3EImage not available%3C/text%3E%3C/svg%3E";
    
    // Reset error state if src changes
    useEffect(() => {
      if (src) {
        setImageSrc(src);
        setHasError(false);
      }
    }, [src]);
    
    // Handle different image sources depending on URL format
    const handleImageSource = (url: string | undefined) => {
      if (!url) return fallbackSrc || defaultFallback;
      
      // Handle Imgur URLs - convert to direct image links if needed
      if (url.includes('imgur.com') && !url.includes('.jpg') && !url.includes('.png')) {
        // Convert standard Imgur URLs to direct image URLs
        return `${url}.jpg`;
      }
      
      // Handle relative paths with or without leading slash
      if (url.startsWith('/')) {
        // If it's a lovable upload, ensure the path is correct
        if (url.includes('lovable-uploads')) {
          return url;
        }
        // Other local assets
        return url;
      }
      
      // If it's already a data URL, return as is
      if (url.startsWith('data:')) {
        return url;
      }
      
      // For external URLs, return as is
      return url;
    };
    
    // Determine if we should use crossOrigin attribute based on URL
    const shouldUseCrossOrigin = (url: string | undefined) => {
      if (!url) return false;
      
      // Always use crossOrigin for external URLs including Imgur
      if ((url.startsWith('http') && !url.includes(window.location.hostname)) || 
          url.includes('imgur.com')) {
        return true;
      }
      
      return false;
    };
    
    const finalSrc = hasError ? (fallbackSrc || defaultFallback) : handleImageSource(imageSrc);
    const needsCrossOrigin = shouldUseCrossOrigin(finalSrc);
    
    // For debugging
    useEffect(() => {
      if (finalSrc && (finalSrc.includes('lovable-uploads') || finalSrc.includes('imgur'))) {
        console.log(`Loading image: ${finalSrc}`);
      }
    }, [finalSrc]);
    
    return (
      <img
        className={cn(hasError ? fallbackClassName : className)}
        ref={ref}
        src={finalSrc}
        alt={alt || ""}
        crossOrigin={needsCrossOrigin ? "anonymous" : undefined}
        onError={(e) => {
          console.error(`Image failed to load: ${imageSrc}`, e);
          setHasError(true);
          
          // Try to diagnose the specific issue
          if (imageSrc?.startsWith('/')) {
            console.warn(`This may be a path issue with ${imageSrc}. Check if the file exists at this path.`);
          } else if (imageSrc?.includes('imgur')) {
            console.warn(`This may be an issue with the Imgur URL: ${imageSrc}. Try using a direct .jpg URL.`);
          } else if (imageSrc?.startsWith('http')) {
            console.warn(`This may be a CORS or external URL issue with ${imageSrc}.`);
          }
        }}
        loading="lazy"
        {...props}
      />
    );
  }
);

Image.displayName = "Image";

export { Image };
