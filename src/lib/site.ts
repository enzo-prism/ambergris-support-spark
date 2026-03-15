export const SITE_NAME = "Belize Kids";
export const SITE_ORIGIN = "https://www.belizekids.org";
export const SITE_DESCRIPTION =
  "Belize Kids invests in schools, parks, healthcare, and scholarships to improve the lives of Belizean children with complete transparency.";
export const SITE_OG_IMAGE =
  "/lovable-uploads/6ef870a1-f17b-4286-b5a3-24f461ec46de.png";

export const buildSiteUrl = (path = "/") => new URL(path, SITE_ORIGIN).toString();
export const SITE_OG_IMAGE_URL = buildSiteUrl(SITE_OG_IMAGE);
