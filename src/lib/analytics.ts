import { track as trackVercelEvent } from "@vercel/analytics";

import type { ProjectRecord } from "@/content/projects";

declare global {
  interface Window {
    hj?: (...args: unknown[]) => void;
    _hjSettings?: {
      hjid: number;
      hjsv: number;
    };
  }
}

const GA_MEASUREMENT_ID = "G-ESGDVFXLGZ";
const HOTJAR_SITE_ID = 6410191;
const HOTJAR_VERSION = 6;
const PRODUCTION_ANALYTICS_HOSTS = new Set(["www.belizekids.org"]);
const ANALYTICS_DEBUG_QUERY_PARAM = "ga_debug";

let analyticsInitialized = false;
let lastPageLocation: string | undefined;

export const shouldCollectAnalytics = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return PRODUCTION_ANALYTICS_HOSTS.has(window.location.hostname);
};

type EventPropertyValue = string | number | boolean | null | undefined;
type AnalyticsPrimitive = string | number | boolean;

export interface AnalyticsItem {
  item_id: string;
  item_name: string;
  item_category?: string;
  index?: number;
}

type AnalyticsParameterValue =
  | EventPropertyValue
  | AnalyticsPrimitive[]
  | AnalyticsItem[];

type AnalyticsParameters = Record<string, AnalyticsParameterValue>;

const sanitizeGoogleParameters = (parameters?: AnalyticsParameters) => {
  if (!parameters) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(parameters).filter(
      ([, value]) => value !== undefined && value !== null,
    ),
  );
};

const sanitizeVercelProperties = (parameters?: AnalyticsParameters) => {
  if (!parameters) {
    return undefined;
  }

  const properties = Object.entries(parameters).reduce<
    Record<string, AnalyticsPrimitive>
  >((accumulator, [key, value]) => {
    if (value === undefined || value === null) {
      return accumulator;
    }

    if (Array.isArray(value)) {
      accumulator[key] = JSON.stringify(value);
      return accumulator;
    }

    accumulator[key] = value;
    return accumulator;
  }, {});

  return Object.keys(properties).length > 0 ? properties : undefined;
};

const getCurrentPath = () => {
  if (typeof window === "undefined") {
    return "/";
  }

  return `${window.location.pathname}${window.location.search}`;
};

const buildPageLocation = (path: string) => {
  if (typeof window === "undefined") {
    return path;
  }

  return new URL(path || "/", window.location.origin).toString();
};

const resolvePageType = (path: string) => {
  const pathname = path.split("?")[0];

  if (pathname === "/") {
    return "home";
  }

  if (pathname === "/projects") {
    return "projects_index";
  }

  if (pathname.startsWith("/projects/")) {
    return "project_detail";
  }

  if (pathname === "/doctors") {
    return "doctor_availability";
  }

  if (pathname === "/monthly-investment") {
    return "monthly_investment";
  }

  if (pathname === "/leadership") {
    return "leadership";
  }

  if (pathname === "/privacy") {
    return "privacy";
  }

  if (pathname === "/terms") {
    return "terms";
  }

  return "other";
};

const getPageContext = (path = getCurrentPath()) => ({
  page_path: path,
  page_type: resolvePageType(path),
});

const isAnalyticsDebugEnabled = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(ANALYTICS_DEBUG_QUERY_PARAM) === "1";
};

const getDebugParameters = () =>
  isAnalyticsDebugEnabled() ? { debug_mode: true } : {};

const sendGoogleEvent = (name: string, parameters?: AnalyticsParameters) => {
  if (typeof window === "undefined" || !shouldCollectAnalytics() || !window.gtag) {
    return;
  }

  window.gtag("event", name, {
    send_to: GA_MEASUREMENT_ID,
    ...sanitizeGoogleParameters(parameters),
    ...getDebugParameters(),
  });
};

const sendAnalyticsEvent = (name: string, parameters?: AnalyticsParameters) => {
  if (typeof window === "undefined" || !shouldCollectAnalytics()) {
    return;
  }

  sendGoogleEvent(name, parameters);
  const vercelProperties = sanitizeVercelProperties(parameters);

  if (vercelProperties) {
    trackVercelEvent(name, vercelProperties);
    return;
  }

  trackVercelEvent(name);
};

const buildProjectItem = (
  project: ProjectRecord,
  index?: number,
): AnalyticsItem => ({
  item_id: project.slug,
  item_name: project.title,
  item_category: project.category,
  ...(index !== undefined ? { index } : {}),
});

const injectScript = ({
  id,
  src,
}: {
  id: string;
  src: string;
}) => {
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
};

const runWhenIdle = (callback: () => void) => {
  const schedule = () => {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(callback, { timeout: 2_000 });
      return;
    }

    window.setTimeout(callback, 1_200);
  };

  if (document.readyState === "complete") {
    schedule();
    return;
  }

  window.addEventListener("load", schedule, { once: true });
};

const initializeHotjar = () => {
  if (window.hj) {
    return;
  }

  window.hj = (...args) => {
    const queueKey = "q" as const;
    const hotjar = window.hj as typeof window.hj & { q?: unknown[][] };
    hotjar[queueKey] = hotjar[queueKey] || [];
    hotjar[queueKey]?.push(args);
  };
  window._hjSettings = { hjid: HOTJAR_SITE_ID, hjsv: HOTJAR_VERSION };

  injectScript({
    id: "hotjar-script",
    src: `https://static.hotjar.com/c/hotjar-${HOTJAR_SITE_ID}.js?sv=${HOTJAR_VERSION}`,
  });
};

export const initializeAnalytics = () => {
  if (analyticsInitialized || typeof window === "undefined" || !shouldCollectAnalytics()) {
    return;
  }

  analyticsInitialized = true;

  runWhenIdle(() => {
    initializeHotjar();
  });
};

export const trackPageView = (path: string) => {
  if (typeof window === "undefined" || !shouldCollectAnalytics()) {
    return;
  }

  const pagePath = path || getCurrentPath();
  const pageLocation = buildPageLocation(pagePath);
  const pageType = resolvePageType(pagePath);
  const pageReferrer = lastPageLocation ?? (document.referrer || undefined);

  sendGoogleEvent("page_view", {
    page_location: pageLocation,
    page_path: pagePath,
    page_title: document.title,
    page_type: pageType,
    content_group: pageType,
    page_referrer: pageReferrer,
  });

  lastPageLocation = pageLocation;
};

export const trackInvestmentClick = (
  location: string,
  target: string,
  extraParameters?: AnalyticsParameters,
) => {
  sendAnalyticsEvent("monthly_investment_intent", {
    ...getPageContext(),
    cta_location: location,
    cta_target: target,
    ...extraParameters,
  });
};

export const trackDoctorAppointmentClick = (
  location: string,
  target: string,
  extraParameters?: AnalyticsParameters,
) => {
  sendAnalyticsEvent("doctor_appointment_intent", {
    ...getPageContext(),
    cta_location: location,
    cta_target: target,
    ...extraParameters,
  });
};

export const trackDonateClick = (
  location: string,
  target: string,
  extraParameters?: AnalyticsParameters,
) => {
  sendAnalyticsEvent("donation_intent", {
    ...getPageContext(),
    cta_location: location,
    cta_target: target,
    ...extraParameters,
  });
};

export const trackContactClick = (
  location: string,
  target: string,
  extraParameters?: AnalyticsParameters,
) => {
  sendAnalyticsEvent("contact_intent", {
    ...getPageContext(),
    cta_location: location,
    cta_target: target,
    ...extraParameters,
  });
};

export const trackContactFormReady = (source: string, form: string) => {
  sendAnalyticsEvent("contact_form_ready", {
    ...getPageContext(),
    lead_source: source,
    form_id: form,
  });
};

export const trackContactFormStarted = (source: string, form: string) => {
  sendAnalyticsEvent("contact_form_start", {
    ...getPageContext(),
    lead_source: source,
    form_id: form,
  });
};

export const trackContactFormSubmitted = (source: string, form: string) => {
  const parameters = {
    ...getPageContext(),
    lead_source: source,
    form_id: form,
    lead_type: "contact",
  } satisfies AnalyticsParameters;

  sendAnalyticsEvent("contact_form_submit", parameters);
  sendAnalyticsEvent("generate_lead", parameters);
};

export const trackAppointmentConfirmed = (doctor: string, service: string) => {
  const parameters = {
    ...getPageContext(),
    doctor_name: doctor,
    service_name: service,
    lead_type: "doctor_appointment",
    lead_source: "doctor_booking",
  } satisfies AnalyticsParameters;

  sendAnalyticsEvent("doctor_appointment_confirmed", parameters);
  sendAnalyticsEvent("generate_lead", parameters);
};

export const trackFormLinkClick = (source: string, form: string) => {
  sendAnalyticsEvent("contact_form_link_click", {
    ...getPageContext(),
    lead_source: source,
    form_id: form,
  });
};

export const trackSocialClick = (network: string, location: string) => {
  sendAnalyticsEvent("social_click", {
    ...getPageContext(),
    social_network: network,
    social_location: location,
  });
};

export const trackMapOpen = (location: string, target: string) => {
  sendAnalyticsEvent("map_open", {
    ...getPageContext(),
    map_location: location,
    map_target: target,
  });
};

export const trackProjectListView = (
  projectList: ProjectRecord[],
  {
    listId,
    listName,
    source,
    pageNumber,
    viewMode,
    projectFilter,
  }: {
    listId: string;
    listName: string;
    source: string;
    pageNumber?: number;
    viewMode?: "grid" | "list";
    projectFilter?: string;
  },
) => {
  if (projectList.length === 0) {
    return;
  }

  sendAnalyticsEvent("view_item_list", {
    ...getPageContext(),
    item_list_id: listId,
    item_list_name: listName,
    source,
    page_number: pageNumber,
    view_mode: viewMode,
    project_filter: projectFilter,
    items: projectList.map((project, index) => buildProjectItem(project, index + 1)),
  });
};

export const trackProjectSelect = (
  project: ProjectRecord,
  {
    listId,
    listName,
    source,
    index,
  }: {
    listId: string;
    listName: string;
    source: string;
    index: number;
  },
) => {
  sendAnalyticsEvent("select_item", {
    ...getPageContext(),
    item_list_id: listId,
    item_list_name: listName,
    source,
    items: [buildProjectItem(project, index)],
  });
};

export const trackProjectView = (project: ProjectRecord) => {
  sendAnalyticsEvent("view_item", {
    ...getPageContext(),
    project_slug: project.slug,
    project_category: project.category,
    items: [buildProjectItem(project, 1)],
  });
};

export const trackProjectFilterChange = (
  selectedFilter: string,
  resultCount: number,
) => {
  sendAnalyticsEvent("project_filter_change", {
    ...getPageContext(),
    selected_filter: selectedFilter,
    result_count: resultCount,
  });
};

export const trackProjectViewModeChange = (
  viewMode: "grid" | "list",
  selectedFilter: string,
) => {
  sendAnalyticsEvent("project_view_mode_change", {
    ...getPageContext(),
    view_mode: viewMode,
    selected_filter: selectedFilter,
  });
};

export const trackProjectPagination = (
  pageNumber: number,
  totalPages: number,
  selectedFilter: string,
) => {
  sendAnalyticsEvent("project_pagination", {
    ...getPageContext(),
    page_number: pageNumber,
    total_pages: totalPages,
    selected_filter: selectedFilter,
  });
};

export const trackProjectReferenceClick = (
  project: ProjectRecord,
  referenceUrl: string,
  index: number,
) => {
  const referenceHost = (() => {
    try {
      return new URL(referenceUrl).hostname;
    } catch {
      return "unknown";
    }
  })();

  sendAnalyticsEvent("project_reference_click", {
    ...getPageContext(),
    project_slug: project.slug,
    project_category: project.category,
    reference_host: referenceHost,
    reference_index: index,
  });
};

export const trackScrollDepth = (percentScrolled: number, path?: string) => {
  const pagePath = path ?? getCurrentPath();

  sendAnalyticsEvent("scroll_depth", {
    ...getPageContext(pagePath),
    percent_scrolled: percentScrolled,
  });
};

export const trackSectionView = (sectionName: string, path?: string) => {
  const pagePath = path ?? getCurrentPath();

  sendAnalyticsEvent("section_view", {
    ...getPageContext(pagePath),
    section_name: sectionName,
  });
};
