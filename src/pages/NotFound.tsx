
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { markPageNotFound } from "@/lib/analytics";
import { buildSiteUrl } from "@/lib/site";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    markPageNotFound(true);

    return () => {
      markPageNotFound(false);
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Helmet>
        <title>Page Not Found (404) - Return to Belize Kids Homepage</title>
        <meta name="description" content="Sorry, the page you are looking for cannot be found. Return to the Belize Kids homepage to explore our projects helping children in Belize through education, healthcare, and community development." />
        <meta property="og:title" content="Page Not Found (404) - Return to Belize Kids Homepage" />
        <meta property="og:description" content="Sorry, the page you are looking for cannot be found. Return to the Belize Kids homepage to explore our projects helping children in Belize through education, healthcare, and community development." />
        <meta property="og:image" content={buildSiteUrl("/lovable-uploads/b627ac31-d9fd-4dbb-bb4d-8a4881b3813d.png")} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="text-center bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-5xl font-bold mb-4 text-belize-green">404</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">Oops! Page not found</p>
        <Button variant="belizeGreen" asChild className="px-6 py-3">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
