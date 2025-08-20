import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface SEOBreadcrumbsProps {
  items: BreadcrumbItem[];
}

const SEOBreadcrumbs: React.FC<SEOBreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link 
            to="/" 
            className="flex items-center hover:text-belize-blue transition-colors"
            aria-label="Go to homepage"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            {item.href && index < items.length - 1 ? (
              <Link 
                to={item.href} 
                className="hover:text-belize-blue transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium" aria-current="page">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default SEOBreadcrumbs;