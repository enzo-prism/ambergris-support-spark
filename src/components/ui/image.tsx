
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
    
    return (
      <img
        className={cn(hasError ? fallbackClassName : className)}
        ref={ref}
        src={hasError ? (fallbackSrc || defaultFallback) : src}
        alt={alt || ""}
        onError={() => {
          console.warn(`Image failed to load: ${src}`);
          setHasError(true);
        }}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";

export { Image };
