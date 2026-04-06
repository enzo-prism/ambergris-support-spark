import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { trackPageView } from "@/lib/analytics";

const RouteAnalytics = () => {
  const location = useLocation();
  const hasTrackedInitialLoad = useRef(false);

  useEffect(() => {
    if (!hasTrackedInitialLoad.current) {
      hasTrackedInitialLoad.current = true;
      return;
    }

    trackPageView(`${location.pathname}${location.search}`);
  }, [location.pathname, location.search]);

  return null;
};

export default RouteAnalytics;
