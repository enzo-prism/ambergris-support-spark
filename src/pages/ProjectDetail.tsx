import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import ProjectDetailGallery from "@/components/ProjectDetailGallery";
import ProjectInternalLinks from "@/components/ProjectInternalLinks";
import ProjectSEOContent from "@/components/ProjectSEOContent";
import SEOBreadcrumbs from "@/components/SEOBreadcrumbs";
import { projectCategoryConfig, projects, getProjectBySlug } from "@/content/projects";
import { buildSiteUrl, SITE_DESCRIPTION, SITE_NAME, SITE_OG_IMAGE, SITE_OG_IMAGE_URL } from "@/lib/site";
import {
  trackDonateClick,
  trackInvestmentClick,
  trackProjectReferenceClick,
  trackProjectSelect,
  trackProjectView,
} from "@/lib/analytics";
import NotFound from "@/pages/NotFound";

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (project) {
      trackProjectView(project);
    }
  }, [project]);

  if (!project) {
    return <NotFound />;
  }

  const categoryConfig = projectCategoryConfig[project.category];
  const CategoryIcon = categoryConfig.icon;
  const parsedPublishedDate = Date.parse(project.date);
  const publishedDate = Number.isNaN(parsedPublishedDate)
    ? project.date
    : new Date(parsedPublishedDate).toISOString().slice(0, 10);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Helmet>
        <title>{project.title} | {project.category} | {SITE_NAME}</title>
        <meta
          name="description"
          content={
            project.metaDescription ||
            `${project.title} - ${project.highlights.join(", ")}. Transparent ${project.category} initiatives improving children's lives in Belize.`
          }
        />
        <meta property="og:title" content={`${project.title} | ${SITE_NAME}`} />
        <meta
          property="og:description"
          content={
            project.metaDescription ||
            `${project.title} - ${project.highlights.join(", ")}. Transparent ${project.category} initiatives improving children's lives in Belize.`
          }
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={SITE_OG_IMAGE_URL} />
        <meta name="article:published_time" content={publishedDate} />
        <meta name="article:author" content={project.author} />
        <meta name="article:section" content={project.category} />
        <meta
          name="keywords"
          content={`${project.category} Belize, children charity ${project.category}, Belize Kids ${project.category}, ${project.title}, ${project.highlights.join(", ")}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={buildSiteUrl(`/projects/${project.slug}`)} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
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
            "datePublished": publishedDate,
            "dateModified": publishedDate,
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
          })}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": buildSiteUrl("/")
              },
              {
                "@type": "ListItem", 
                "position": 2,
                "name": "Projects",
                "item": buildSiteUrl("/projects")
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": project.title,
                "item": buildSiteUrl(`/projects/${project.slug}`)
              }
            ]
          })}
        </script>
      </Helmet>
      <Navbar />
      
      <div className="bg-belize-light pt-24 pb-8 md:pb-12">
        <div className="container-custom">
          <div className="flex flex-col space-y-4">
            <SEOBreadcrumbs
              items={[
                { name: "Projects", href: "/projects" },
                { name: project.title },
              ]}
            />
            
            <Link to="/projects" className="inline-flex items-center text-belize-green hover:text-belize-coral transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to all projects
            </Link>
            
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <div className="md:w-3/4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-belize-green mb-4 leading-tight">
                  {project?.title}
                </h1>
                
                <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-6 gap-3 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-belize-coral" />
                    <span>{project?.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-belize-coral" />
                    <span>By {project?.author}</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/4 flex justify-center">
                <div className={`${categoryConfig.color} p-6 rounded-full`}>
                  <CategoryIcon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-8 md:py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="shadow-md border-t-4 border-t-belize-green overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <ProjectSEOContent 
                    content={project.content}
                    title={project.title}
                    category={project.category}
                  />
                </CardContent>
              </Card>

              {project.images && project.images.length > 0 && project.slug !== "october-vision-clinic" && (
                <ProjectDetailGallery 
                  images={project.images}
                  title={`${project.title} Gallery`} 
                  description={`View photos from the ${project.title}`} 
                />
              )}

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-belize-green">Project Highlights</h3>
                <div className="grid grid-cols-1 gap-3">
                  {project.highlights.map((highlight, index) => (
                    <Alert key={index} className="flex items-start gap-3 border-gray-100 bg-white">
                      <div className={`${categoryConfig.color} p-1 rounded-md`}>
                        <CategoryIcon className="h-6 w-6 text-white" />
                      </div>
                      <AlertDescription className="text-gray-700">
                        {highlight}
                      </AlertDescription>
                    </Alert>
                  ))}
                </div>
              </div>

              {project.references && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-belize-green">References & Further Reading</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {project.references.map((reference, index) => (
                      <a 
                        key={index} 
                        href={reference.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-100 hover:border-belize-blue transition-colors"
                        onClick={() =>
                          trackProjectReferenceClick(
                            project,
                            reference.url,
                            index + 1,
                          )
                        }
                      >
                        <ExternalLink className="h-5 w-5 text-belize-blue shrink-0" />
                        <p className="text-belize-blue">{reference.text}</p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="md:col-span-1">
              <Card className="shadow-md mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-belize-green">Project Info</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium capitalize flex items-center">
                        <span className={`${categoryConfig.color} p-1 rounded-md inline-flex mr-2`}>
                          <CategoryIcon className="h-6 w-6 text-white" />
                        </span>
                        {project.category}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">{project.date}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-gray-600">Author:</span>
                      <span className="font-medium">{project.author}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-belize-green">Key Numbers</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {project.keyNumbers.map((number, index) => (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-belize-coral">{number.value}</p>
                        <p className="text-sm text-gray-600">{number.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-belize-green">More Projects</h3>
                  <div className="space-y-3">
                    {projects
                      .filter(p => p.slug !== slug)
                      .slice(0, 3)
                      .map((relatedProject, index) => (
                        <Link 
                          key={index} 
                          to={`/projects/${relatedProject.slug}`}
                          className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() =>
                            trackProjectSelect(relatedProject, {
                              listId: "related_projects",
                              listName: "More Projects",
                              source: "project_detail_related",
                              index: index + 1,
                            })
                          }
                        >
                          <div
                            className={`${projectCategoryConfig[relatedProject.category].color} p-1.5 rounded-md mr-3 shrink-0`}
                          >
                            {React.createElement(projectCategoryConfig[relatedProject.category].icon, {
                              className: "h-6 w-6 text-white",
                            })}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium line-clamp-2 text-belize-green">{relatedProject.title}</h4>
                            <span className="text-xs text-gray-500">{relatedProject.date}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator className="my-10" />
          
          <ProjectInternalLinks 
            currentProject={project}
            allProjects={projects}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div>
              <h3 className="text-xl font-bold mb-4 text-belize-green">Help Support Our Work</h3>
              <p className="mb-6 text-gray-700">Your donations help improve children’s lives in Belize through education, healthcare, and environmental programs.</p>
              <Button 
                variant="belizeCoral"
                onClick={() => {
                  trackDonateClick("project_detail", "donate_section", {
                    project_slug: project.slug,
                    project_category: project.category,
                  });
                  const donateElement = document.getElementById("donate");
                  if (donateElement) {
                    donateElement.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/#donate";
                  }
                }}
              >
                Donate Now
              </Button>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-belize-green">Get Involved</h3>
              <p className="mb-6 text-gray-700">Join our mission to create a better future for the children of Belize. Volunteer, donate, or spread the word about our initiatives.</p>
              <Button 
                variant="outlineBlue"
                onClick={() => {
                  trackInvestmentClick("project_detail", "monthly_investment", {
                    project_slug: project.slug,
                    project_category: project.category,
                  });
                  window.location.href = "/monthly-investment";
                }}
              >
                Start Monthly Investment
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
