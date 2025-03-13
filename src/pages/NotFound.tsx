
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="Sorry, the page you are looking for cannot be found. Return to the Belize Kids.org home page." />
        <meta property="og:title" content="Not Found" />
        <meta property="og:description" content="Sorry, the page you are looking for cannot be found. Return to the Belize Kids.org home page." />
        <meta property="og:image" content="/lovable-uploads/b627ac31-d9fd-4dbb-bb4d-8a4881b3813d.png" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Helmet>
      <div className="text-center bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-5xl font-bold mb-4 text-belize-green">404</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">Oops! Page not found</p>
        <a href="/" className="inline-block bg-belize-green text-white px-6 py-3 rounded-md hover:bg-belize-green/90 transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
