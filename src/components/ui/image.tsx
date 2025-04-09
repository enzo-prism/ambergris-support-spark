
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
    
    // Standardize image sources, prioritizing Imgur format
    const handleImageSource = (url: string | undefined) => {
      if (!url) return fallbackSrc || defaultFallback;
      
      // Handle Imgur URLs - convert ALL to direct i.imgur.com image links
      if (url.includes('imgur.com')) {
        // Extract the ID from the URL (handles imgur.com/ID or i.imgur.com/ID format)
        const imgurIdMatch = url.match(/imgur\.com\/([a-zA-Z0-9]+)/);
        if (imgurIdMatch && imgurIdMatch[1]) {
          const imgurId = imgurIdMatch[1];
          // Always return the direct image URL using the i.imgur.com domain
          return `https://i.imgur.com/${imgurId}.jpg`;
        }
      }
      
      // If it's a data URL, return as is
      if (url.startsWith('data:')) {
        return url;
      }
      
      // Convert all other URLs to fallback - we're standardizing on Imgur only
      return fallbackSrc || defaultFallback;
    };
    
    // Always use crossOrigin for Imgur URLs
    const shouldUseCrossOrigin = (url: string | undefined) => {
      if (!url) return false;
      return url.includes('imgur.com') || url.includes('i.imgur.com');
    };
    
    const finalSrc = hasError ? (fallbackSrc || defaultFallback) : handleImageSource(imageSrc);
    const needsCrossOrigin = shouldUseCrossOrigin(finalSrc);
    
    // For debugging
    useEffect(() => {
      if (finalSrc && finalSrc.includes('imgur')) {
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
          if (imageSrc?.includes('imgur')) {
            console.warn(`This may be an issue with the Imgur URL: ${imageSrc}. Using direct i.imgur.com URL format.`);
          } else {
            console.warn(`Non-Imgur URL detected: ${imageSrc}. Consider using an Imgur URL instead for better compatibility.`);
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
