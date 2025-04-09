
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  fallbackClassName?: string;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, src, alt, fallbackSrc, fallbackClassName, ...props }, ref) => {
    const [hasError, setHasError] = useState(false);
    
    // Default fallback image if none provided
    const defaultFallback = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='system-ui, sans-serif' font-size='14' text-anchor='middle' dominant-baseline='middle' fill='%23999999'%3EImage not available%3C/text%3E%3C/svg%3E";
    
    // Add proper CORS headers for external URLs
    const handleExternalImage = (url: string | undefined) => {
      if (!url) return defaultFallback;
      
      // If it's an external URL (not from our own domain)
      if (url.startsWith('http') && !url.includes(window.location.hostname)) {
        // For external URLs, we might need to handle CORS issues
        console.log(`Loading external image: ${url}`);
      }
      
      return url;
    };
    
    return (
      <img
        className={cn(hasError ? fallbackClassName : className)}
        ref={ref}
        src={hasError ? (fallbackSrc || defaultFallback) : handleExternalImage(src)}
        alt={alt || ""}
        crossOrigin="anonymous" 
        onError={(e) => {
          console.warn(`Image failed to load: ${src}`, e);
          setHasError(true);
        }}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";

export { Image };
