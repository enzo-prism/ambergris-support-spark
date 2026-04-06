import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { trackScrollDepth } from "@/lib/analytics";

const SCROLL_THRESHOLDS = [25, 50, 75] as const;
const MIN_SCROLLABLE_PIXELS = 320;

const ScrollDepthAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    const trackedDepths = new Set<number>();
    let ticking = false;

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;

      window.requestAnimationFrame(() => {
        ticking = false;

        const documentElement = document.documentElement;
        const scrollablePixels =
          documentElement.scrollHeight - window.innerHeight;

        if (scrollablePixels < MIN_SCROLLABLE_PIXELS) {
          return;
        }

        const percentScrolled = Math.round(
          (window.scrollY / scrollablePixels) * 100,
        );

        SCROLL_THRESHOLDS.forEach((threshold) => {
          if (percentScrolled >= threshold && !trackedDepths.has(threshold)) {
            trackedDepths.add(threshold);
            trackScrollDepth(
              threshold,
              `${location.pathname}${location.search}`,
            );
          }
        });
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location.pathname, location.search]);

  return null;
};

export default ScrollDepthAnalytics;
