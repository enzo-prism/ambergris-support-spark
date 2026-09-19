import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { trackPageView } from "@/lib/analytics";

const RouteAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Helmet writes the route title in another effect. Wait a tick so GA4
    // receives the real page title instead of the previous route's title.
    const timeoutId = window.setTimeout(() => {
      trackPageView(location.pathname, location.search);
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [location.pathname, location.search]);

  return null;
};

export default RouteAnalytics;
