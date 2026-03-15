
import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsHeader from "@/components/ProjectsHeader";
import ProjectsList from "@/components/ProjectsList";
import MembershipPromo from "@/components/MembershipPromo";
import TransparencySection from "@/components/TransparencySection";
import { useSearchParams } from "react-router-dom";
import { projects } from "@/content/projects";
import { buildSiteUrl, SITE_OG_IMAGE_URL } from "@/lib/site";

// Import the Image component so it's available throughout the app
import "@/components/ui/image";

const Projects: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'all';
  const metaDescriptionByTab: Record<string, string> = {
    all: "Discover our transparent community projects in Belize: school improvements, Stanford Vision Clinic, scholarships, and park development. See exactly how donations create lasting change for children.",
    healthcare: "Explore Belize Kids healthcare projects, including the Stanford Vision Clinic and eye screening programs that protect children's sight.",
    education: "See education projects that expand classrooms, fund supplies, and award scholarships to Belizean students.",
    environment: "Discover environmental and conservation projects supporting parks, playgrounds, and marine reserve protection on Ambergris Caye.",
    fundraising: "Learn about community fundraising initiatives that power Belize Kids programs and partnerships across the island.",
  };
  const metaDescription = metaDescriptionByTab[initialTab] || metaDescriptionByTab.all;

  const handleTabChange = (tab: string) => {
    setSearchParams(params => {
      params.set('tab', tab);
      return params;
    });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>Our Impact Projects - Schools, Healthcare & Education in Belize | Belize Kids</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content="Our Impact Projects - Schools, Healthcare & Education in Belize | Belize Kids" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={SITE_OG_IMAGE_URL} />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Belize charity projects, school improvement Belize, children healthcare Belize, education programs, transparent charity, community development" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={buildSiteUrl("/projects")} />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Our Impact Projects - Belize Kids",
            "description": "Discover our transparent community projects in Belize: school improvements, Stanford Vision Clinic, scholarships, and park development.",
            "url": buildSiteUrl("/projects"),
            "mainEntity": {
              "@type": "ItemList",
              "name": "Belize Kids Projects",
              "description": "Complete list of our community projects in Belize focusing on children's health and education",
              "numberOfItems": projects.length.toString()
            },
            "breadcrumb": {
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
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <Navbar />
      <main>
        <ProjectsHeader />
        <ProjectsList initialTab={initialTab} onTabChange={handleTabChange} />
        <TransparencySection />
        <MembershipPromo />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
