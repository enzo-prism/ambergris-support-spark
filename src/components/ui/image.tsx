
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
      
      // If it's already a data URL or a relative path, return as is
      if (url.startsWith('data:') || url.startsWith('/')) {
        return url;
      }
      
      // If the URL has already been processed as an error
      if (hasError) {
        return fallbackSrc || defaultFallback;
      }
      
      return url;
    };
    
    // Determine if we should use crossOrigin attribute based on URL
    const shouldUseCrossOrigin = (url: string | undefined) => {
      if (!url) return false;
      
      // Only add crossOrigin for external URLs from other domains
      if (url.startsWith('http') && !url.includes(window.location.hostname)) {
        return true;
      }
      
      return false;
    };
    
    const finalSrc = hasError ? (fallbackSrc || defaultFallback) : handleImageSource(imageSrc);
    const needsCrossOrigin = shouldUseCrossOrigin(finalSrc);
    
    return (
      <img
        className={cn(hasError ? fallbackClassName : className)}
        ref={ref}
        src={finalSrc}
        alt={alt || ""}
        {...(needsCrossOrigin ? { crossOrigin: "anonymous" } : {})}
        onError={(e) => {
          console.warn(`Image failed to load: ${imageSrc}`, e);
          setHasError(true);
        }}
        loading="lazy"
        {...props}
      />
    );
  }
);

Image.displayName = "Image";

export { Image };
