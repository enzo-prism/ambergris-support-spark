import React from 'react';

interface ProjectSEOContentProps {
  content: string;
  title: string;
  category: string;
}

const ProjectSEOContent: React.FC<ProjectSEOContentProps> = ({ content, title, category }) => {
  const enhancedContent = content
    // Add semantic heading structure
    .replace(/<h3>/g, '<h3 role="heading" aria-level="3">')
    // Ensure images have proper alt text structure (placeholder for future enhancement)
    .replace(/<img/g, '<img loading="lazy"')
    // Add article markup for better content structure
    .replace(/<p>/g, '<p itemProp="articleBody">');

  return (
    <article 
      itemScope 
      itemType="https://schema.org/Article"
      className="prose prose-lg max-w-none"
    >
      <header className="sr-only">
        <h1 itemProp="headline">{title}</h1>
        <meta itemProp="about" content={`${category} initiatives in Belize`} />
      </header>
      
      <div 
        className="content-sections space-y-6"
        itemProp="articleBody"
        dangerouslySetInnerHTML={{ __html: enhancedContent }}
      />
    </article>
  );
};

export default ProjectSEOContent;