import type { ProjectRecord } from "@/content/projects";
import { buildSiteUrl, SITE_DESCRIPTION, SITE_NAME, SITE_OG_IMAGE } from "@/lib/site";

export const generateProjectStructuredData = (project: ProjectRecord) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": project.title,
    "description": `${project.highlights.join(", ")}. Transparent ${project.category} initiatives improving children's lives in Belize.`,
    "author": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": buildSiteUrl("/")
    },
    "publisher": {
      "@type": "Organization", 
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": buildSiteUrl(SITE_OG_IMAGE)
      }
    },
    "datePublished": project.date,
    "dateModified": "2025-08-20",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": buildSiteUrl(`/projects/${project.slug}`)
    },
    "articleSection": project.category,
    "keywords": `${project.category} Belize, children charity ${project.category}, Belize Kids ${project.category}`,
    "about": {
      "@type": "Organization",
      "name": SITE_NAME,
      "description": SITE_DESCRIPTION
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

export const generateSEOKeywords = (project: ProjectRecord) => {
  const baseKeywords = `${project.category} Belize, children charity ${project.category}, Belize Kids ${project.category}`;
  const projectSpecific = project.highlights.join(", ");
  return `${baseKeywords}, ${projectSpecific}`;
};
