import { track as trackVercelEvent } from "@vercel/analytics";

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

let analyticsInitialized = false;
let latestPath = "/";

const isLocalAnalyticsHost = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return ["localhost", "127.0.0.1"].includes(window.location.hostname);
};

type EventPropertyValue = string | number | boolean | null | undefined;

const trackEvent = (
  name: string,
  properties?: Record<string, EventPropertyValue>,
) => {
  if (typeof window === "undefined" || isLocalAnalyticsHost()) {
    return;
  }

  trackVercelEvent(name, properties);
};

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

const initializeGoogleAnalytics = () => {
  injectScript({
    id: "gtag-script",
    src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
  });

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args) => {
    window.dataLayer.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });

  trackPageView(latestPath);
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
  if (analyticsInitialized || typeof window === "undefined" || isLocalAnalyticsHost()) {
    return;
  }

  analyticsInitialized = true;

  runWhenIdle(() => {
    initializeGoogleAnalytics();
    initializeHotjar();
  });
};

export const trackPageView = (path: string) => {
  latestPath = path;

  if (!window.gtag) {
    return;
  }

  window.gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: path,
    send_to: GA_MEASUREMENT_ID,
  });
};

export const trackInvestmentClick = (location: string, target: string) => {
  trackEvent("Investment CTA Click", { location, target });
};

export const trackDoctorAppointmentClick = (
  location: string,
  target: string,
) => {
  trackEvent("Doctor Appointment CTA Click", { location, target });
};

export const trackDonateClick = (location: string, target: string) => {
  trackEvent("Donate CTA Click", { location, target });
};

export const trackContactClick = (location: string, target: string) => {
  trackEvent("Contact CTA Click", { location, target });
};

export const trackContactFormReady = (source: string, form: string) => {
  trackEvent("Contact Form Ready", { source, form });
};

export const trackContactFormSubmitted = (source: string, form: string) => {
  trackEvent("Contact Form Submitted", { source, form });
};

export const trackAppointmentConfirmed = (doctor: string, service: string) => {
  trackEvent("Doctor Appointment Confirmed", { doctor, service });
};
