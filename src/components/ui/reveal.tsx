import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  /** Element/tag to render. Defaults to a div. */
  as?: React.ElementType;
  /** Stagger delay in milliseconds. */
  delay?: number;
}

/**
 * Lightweight scroll-reveal wrapper backed by IntersectionObserver.
 * Replaces framer-motion for simple fade/slide-in-on-view animations,
 * keeping content in the server-rendered DOM for SEO while animating on the client.
 */
const Reveal: React.FC<RevealProps> = ({
  as,
  delay = 0,
  className,
  style,
  children,
  ...props
}) => {
  const Tag = (as ?? "div") as React.ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms`, ...style } : style}
      {...props}
    >
      {children}
    </Tag>
  );
};

export { Reveal };
