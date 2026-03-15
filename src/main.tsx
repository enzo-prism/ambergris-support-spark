
import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { inject as injectVercelAnalytics } from "@vercel/analytics";

import App from "./App.tsx";
import "./index.css";
import AnalyticsBootstrap from "@/components/AnalyticsBootstrap";

if (!["localhost", "127.0.0.1"].includes(window.location.hostname)) {
  injectVercelAnalytics({ framework: "react" });
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Belize Kids app root not found");
}

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AnalyticsBootstrap />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
