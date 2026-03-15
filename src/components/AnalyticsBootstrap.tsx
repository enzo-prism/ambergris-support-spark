import { useEffect } from "react";

import { initializeAnalytics } from "@/lib/analytics";

const AnalyticsBootstrap = () => {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return null;
};

export default AnalyticsBootstrap;
