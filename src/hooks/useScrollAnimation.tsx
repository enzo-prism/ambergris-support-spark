import { useEffect, useRef, useState } from "react";

/**
 * IntersectionObserver-based scroll animation hook (framer-motion free).
 * Returns a ref to attach to an element and whether it has entered the viewport.
 */
export const useScrollAnimation = (threshold = 0.2, once = true) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsInView(true);
            setHasAnimated(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsInView(false);
          }
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, isInView, hasAnimated };
};
