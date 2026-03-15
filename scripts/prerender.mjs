import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const serverEntryPath = path.join(distDir, "server", "entry-server.js");

const templatePath = path.join(distDir, "index.html");
const rawTemplate = await fs.readFile(templatePath, "utf8");
const template = rawTemplate
  .replace(/\s*<title>Belize Kids<\/title>/, "")
  .replace(
    /\s*<meta\s+name="description"\s+content="Belize Kids supports children in Belize through transparent investments in education, healthcare, and community development\."\s*\/>/,
    "",
  )
  .replace(
    /\s*<meta\s+property="og:image"\s+content="\/lovable-uploads\/6ef870a1-f17b-4286-b5a3-24f461ec46de\.png"\s*\/>/,
    "",
  );

const { prerenderRoutes, renderRoute } = await import(
  pathToFileURL(serverEntryPath).href
);

const APP_HEAD_PLACEHOLDER = '<meta name="ssr-head" content="__APP_HEAD__" />';
const APP_HTML_PLACEHOLDER = "__APP_HTML__";

const writeHtmlFile = async (routePath, html) => {
  if (routePath === "/") {
    await fs.writeFile(path.join(distDir, "index.html"), html, "utf8");
    return;
  }

  if (routePath === "/404") {
    await fs.writeFile(path.join(distDir, "404.html"), html, "utf8");
    return;
  }

  const routeDir = path.join(distDir, routePath.replace(/^\//, ""));
  await fs.mkdir(routeDir, { recursive: true });
  await fs.writeFile(path.join(routeDir, "index.html"), html, "utf8");
};

for (const routePath of prerenderRoutes) {
  const { html: appHtml, head } = renderRoute(routePath);
  const sanitizedHead = head.replace(
    /<meta[^>]+name="viewport"[^>]*\/>/g,
    "",
  );
  const pageHtml = template
    .replace(APP_HEAD_PLACEHOLDER, sanitizedHead)
    .replace(APP_HTML_PLACEHOLDER, appHtml);

  await writeHtmlFile(routePath, pageHtml);
}

const siteOrigin = "https://www.belizekids.org";
const sitemapRoutes = prerenderRoutes.filter((routePath) => routePath !== "/404");
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapRoutes
  .map((routePath) => {
    const location =
      routePath === "/" ? `${siteOrigin}/` : `${siteOrigin}${routePath}`;
    return `  <url>\n    <loc>${location}</loc>\n  </url>`;
  })
  .join("\n")}\n</urlset>\n`;

const robotsTxt = `User-agent: *\nAllow: /\nDisallow: /404\nDisallow: /api/\nDisallow: /_vercel/\n\nSitemap: ${siteOrigin}/sitemap.xml\n`;

const llmsTxt = `# Belize Kids\n\nBelize Kids is a nonprofit supporting children in Belize through transparent investments in healthcare, education, and community development.\n\nPrimary website: ${siteOrigin}\nKey routes:\n${sitemapRoutes
  .map((routePath) =>
    routePath === "/" ? "- /" : `- ${routePath}`,
  )
  .join("\n")}\n`;

await fs.writeFile(path.join(distDir, "sitemap.xml"), sitemapXml, "utf8");
await fs.writeFile(path.join(distDir, "robots.txt"), robotsTxt, "utf8");
await fs.writeFile(path.join(distDir, "llms.txt"), llmsTxt, "utf8");

await fs.rm(path.join(distDir, "server"), { recursive: true, force: true });
