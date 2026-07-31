import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { trackPageView } from "@/lib/analytics";

const RouteAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null;
};

export default RouteAnalytics;
