export const generateProjectStructuredData = (project: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": project.title,
    "description": `${project.highlights.join(', ')}. Transparent ${project.category} initiatives improving children's lives in Belize.`,
    "author": {
      "@type": "Organization",
      "name": "Belize Kids",
      "url": "https://belizekids.org"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Belize Kids",
      "logo": {
        "@type": "ImageObject",
        "url": "https://belizekids.org/lovable-uploads/6ef870a1-f17b-4286-b5a3-24f461ec46de.png"
      }
    },
    "datePublished": project.date,
    "dateModified": "2025-08-20",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://belizekids.org/projects/${project.slug}`
    },
    "articleSection": project.category,
    "keywords": `${project.category} Belize, children charity ${project.category}, Belize Kids ${project.category}`,
    "about": {
      "@type": "Organization",
      "name": "Belize Kids",
      "description": "Non-profit organization improving children's health and education in Belize through transparent community initiatives"
    }
  };
};

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const generateSEOKeywords = (project: any) => {
  const baseKeywords = `${project.category} Belize, children charity ${project.category}, Belize Kids ${project.category}`;
  const projectSpecific = project.highlights.join(', ');
  return `${baseKeywords}, ${projectSpecific}`;
};