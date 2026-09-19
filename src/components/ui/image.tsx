
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  fallbackClassName?: string;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      className,
      src,
      alt,
      fallbackSrc,
      fallbackClassName,
      loading = "lazy",
      decoding = "async",
      ...props
    },
    ref,
  ) => {
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
    
    const handleImageSource = (url: string | undefined) => {
      if (!url) return fallbackSrc || defaultFallback;

      if (url.startsWith("data:") || url.startsWith("blob:") || url.startsWith("/")) {
        return url;
      }

      if (url.includes("imgur.com")) {
        const imgurIdMatch = url.match(/imgur\.com\/(?:gallery\/)?([a-zA-Z0-9]+)(\.\w+)?/);
        if (imgurIdMatch?.[1]) {
          const extension = imgurIdMatch[2] ?? ".jpg";
          return `https://i.imgur.com/${imgurIdMatch[1]}${extension}`;
        }
      }

      try {
        const parsedUrl = new URL(url);
        if (parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:") {
          return parsedUrl.toString();
        }
      } catch {
        return url;
      }

      return fallbackSrc || defaultFallback;
    };

    const finalSrc = hasError ? (fallbackSrc || defaultFallback) : handleImageSource(imageSrc);
    const isRemoteSrc = typeof finalSrc === "string" && /^https?:\/\//.test(finalSrc);
    
    return (
      <img
        className={cn(hasError ? fallbackClassName : className)}
        ref={ref}
        src={finalSrc}
        alt={alt || ""}
        crossOrigin={isRemoteSrc ? "anonymous" : props.crossOrigin}
        referrerPolicy={isRemoteSrc ? "no-referrer" : props.referrerPolicy}
        onError={(e) => {
          setHasError(true);
          props.onError?.(e);
        }}
        loading={loading}
        decoding={decoding}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";

export { Image };
