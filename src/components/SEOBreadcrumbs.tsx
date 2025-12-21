import React from "react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface SEOBreadcrumbsProps {
  items: BreadcrumbItem[];
}

const SEOBreadcrumbs: React.FC<SEOBreadcrumbsProps> = ({ items }) => {
  return (
    <Breadcrumb className="py-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              to="/"
              className="flex items-center text-belize-blue hover:text-belize-coral"
              aria-label="Go to homepage"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={`${item.name}-${index}`}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {item.href && !isLast ? (
                  <BreadcrumbLink asChild>
                    <Link to={item.href} className="hover:text-belize-blue">
                      {item.name}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="font-medium text-gray-900">
                    {item.name}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default SEOBreadcrumbs;
