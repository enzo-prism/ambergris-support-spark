
import { useEffect } from 'react';

const Sitemap = () => {
  useEffect(() => {
    const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://belizekids.org/</loc>
    <lastmod>2025-06-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://belizekids.org/projects</loc>
    <lastmod>2025-06-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://belizekids.org/leadership</loc>
    <lastmod>2025-06-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://belizekids.org/doctors</loc>
    <lastmod>2025-06-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://belizekids.org/membership</loc>
    <lastmod>2025-06-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://belizekids.org/monthly-investment</loc>
    <lastmod>2025-06-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://belizekids.org/privacy</loc>
    <lastmod>2025-06-17</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://belizekids.org/terms</loc>
    <lastmod>2025-06-17</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>`;

    // Replace the entire page content with the XML
    document.open();
    document.write(sitemapXML);
    document.close();
  }, []);

  return null;
};

export default Sitemap;
