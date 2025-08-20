import React, { useEffect, useState } from 'react';

const Sitemap: React.FC = () => {
  const [sitemapContent, setSitemapContent] = useState<string>('');

  useEffect(() => {
    // Fetch the static sitemap.xml from public folder
    fetch('/sitemap.xml')
      .then(response => response.text())
      .then(content => {
        setSitemapContent(content);
        // Set proper content type for XML
        document.documentElement.setAttribute('data-content-type', 'application/xml');
      })
      .catch(error => {
        console.error('Error loading sitemap:', error);
        setSitemapContent('<?xml version="1.0" encoding="UTF-8"?><error>Failed to load sitemap</error>');
      });

    return () => {
      document.documentElement.removeAttribute('data-content-type');
    };
  }, []);

  // Render the XML content directly
  return (
    <div 
      style={{ 
        fontFamily: 'monospace', 
        whiteSpace: 'pre-wrap',
        margin: 0,
        padding: 0
      }}
      dangerouslySetInnerHTML={{ __html: sitemapContent }}
    />
  );
};

export default Sitemap;