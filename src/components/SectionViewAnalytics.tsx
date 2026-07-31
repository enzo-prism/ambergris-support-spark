import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { trackSectionView } from "@/lib/analytics";

const SECTION_IDS_BY_PATH: Record<string, string[]> = {
  "/": ["about", "programs", "projects", "impact", "donate", "contact"],
  "/monthly-investment": ["investment-form"],
};

const SectionViewAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    const observedSections = SECTION_IDS_BY_PATH[location.pathname];

    if (!observedSections || observedSections.length === 0) {
      return;
    }

    const trackedSections = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const sectionId = entry.target.id;

          if (trackedSections.has(sectionId)) {
            return;
          }

          trackedSections.add(sectionId);
          trackSectionView(sectionId, location.pathname);
        });
      },
      {
        threshold: 0.45,
      },
    );

    observedSections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);

      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
};

export default SectionViewAnalytics;
