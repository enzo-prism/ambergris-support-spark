
import { useEffect } from 'react';

const Sitemap = () => {
  useEffect(() => {
    // Set the correct content type for XML
    const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage - Highest priority -->
  <url>
    <loc>https://belizekids.org/</loc>
    <lastmod>2025-06-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Main sections - High priority -->
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
  
  <!-- Membership/Investment pages - Important for conversions -->
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
  
  <!-- Legal pages - Lower priority but important -->
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

    // Create a blob with the XML content
    const blob = new Blob([sitemapXML], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    // Create a download link (this helps with direct access)
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sitemap.xml';
    
    // Set the page content
    document.body.innerHTML = `<pre style="font-family: monospace; white-space: pre-wrap; padding: 20px;">${sitemapXML}</pre>`;
    
    // Set content type header if possible
    if (document.querySelector('meta[http-equiv="Content-Type"]')) {
      document.querySelector('meta[http-equiv="Content-Type"]')?.setAttribute('content', 'application/xml');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'Content-Type');
      meta.setAttribute('content', 'application/xml');
      document.head.appendChild(meta);
    }
  }, []);

  return null; // Component handles its own rendering
};

export default Sitemap;
