import React from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router-dom/server";

import App from "./App";
import { projects } from "./content/projects";

const staticRoutes = [
  "/",
  "/projects",
  "/leadership",
  "/doctors",
  "/monthly-investment",
  "/privacy",
  "/terms",
];

export const prerenderRoutes = [
  ...staticRoutes,
  ...projects.map((project) => `/projects/${project.slug}`),
  "/404",
];

export const renderRoute = (url: string) => {
  const helmetContext: { helmet?: Record<string, { toString: () => string }> } =
    {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  );

  const helmet = helmetContext.helmet;
  const head = [
    helmet?.title?.toString() ?? "",
    helmet?.meta?.toString() ?? "",
    helmet?.link?.toString() ?? "",
    helmet?.script?.toString() ?? "",
  ]
    .filter(Boolean)
    .join("\n");

  return { html, head };
};
