type WebVitalName = "CLS" | "FCP" | "INP" | "LCP" | "TTFB";

export type SiteWebVital = {
  name: WebVitalName;
  id: string;
  value: number;
  delta: number;
  rating: "good" | "needs-improvement" | "poor";
  navigationType?: string;
  attribution?: Record<string, unknown>;
};

type WebVitalReporter = (metric: SiteWebVital) => void;

const THRESHOLDS: Record<WebVitalName, [number, number]> = {
  LCP: [2500, 4000],
  INP: [200, 500],
  CLS: [0.1, 0.25],
  FCP: [1800, 3000],
  TTFB: [800, 1800],
};

const rateMetric = (name: WebVitalName, value: number): SiteWebVital["rating"] => {
  const [good, needsImprovement] = THRESHOLDS[name];

  if (value <= good) {
    return "good";
  }

  if (value <= needsImprovement) {
    return "needs-improvement";
  }

  return "poor";
};

const createMetric = (
  name: WebVitalName,
  value: number,
  attribution?: Record<string, unknown>,
): SiteWebVital => ({
  name,
  id: `${name}-${Math.round(value)}-${Math.floor(Math.random() * 1_000_000)}`,
  value,
  delta: value,
  rating: rateMetric(name, value),
  navigationType: getNavigationType(),
  attribution,
});

const getNavigationType = () => {
  const navigation = performance.getEntriesByType("navigation")[0] as
    | PerformanceNavigationTiming
    | undefined;

  return navigation?.type;
};

const observe = (
  type: string,
  callback: (entries: PerformanceEntry[]) => void,
  options?: PerformanceObserverInit,
) => {
  try {
    const observer = new PerformanceObserver((list) => {
      callback(list.getEntries());
    });
    observer.observe({ type, buffered: true, ...options });
    return observer;
  } catch {
    return undefined;
  }
};

const reportLcp = (report: WebVitalReporter) => {
  let latest: PerformanceEntry | undefined;

  const observer = observe("largest-contentful-paint", (entries) => {
    latest = entries.at(-1) ?? latest;
  });

  const send = () => {
    if (!latest) {
      return;
    }

    const lcpEntry = latest as PerformanceEntry & {
      element?: Element;
      url?: string;
    };

    report(
      createMetric("LCP", latest.startTime, {
        element: lcpEntry.element?.tagName?.toLowerCase(),
        url: lcpEntry.url,
      }),
    );
    observer?.disconnect();
  };

  addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      send();
    }
  }, { once: true });
  addEventListener("pagehide", send, { once: true });
};

const reportFcp = (report: WebVitalReporter) => {
  observe("paint", (entries) => {
    const fcp = entries.find((entry) => entry.name === "first-contentful-paint");

    if (fcp) {
      report(createMetric("FCP", fcp.startTime));
    }
  });
};

const reportTtfb = (report: WebVitalReporter) => {
  const navigation = performance.getEntriesByType("navigation")[0] as
    | PerformanceNavigationTiming
    | undefined;

  if (!navigation || navigation.responseStart <= 0) {
    return;
  }

  report(createMetric("TTFB", navigation.responseStart));
};

const reportCls = (report: WebVitalReporter) => {
  let value = 0;
  let sessionValue = 0;
  let lastStart = 0;
  let target: string | undefined;
  let sent = false;

  observe("layout-shift", (entries) => {
    entries.forEach((entry) => {
      const shift = entry as PerformanceEntry & {
        value: number;
        hadRecentInput: boolean;
        sources?: Array<{ node?: Element }>;
      };

      if (shift.hadRecentInput) {
        return;
      }

      if (sessionValue > 0 && shift.startTime - lastStart > 1000) {
        sessionValue = 0;
      }

      sessionValue += shift.value;
      lastStart = shift.startTime;

      if (sessionValue > value) {
        value = sessionValue;
        target = shift.sources?.find((source) => source.node)?.node?.tagName?.toLowerCase();
      }
    });
  });

  const send = () => {
    if (sent || value <= 0) {
      return;
    }

    sent = true;
    report(createMetric("CLS", value, { element: target }));
  };

  addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      send();
    }
  }, { once: true });
  addEventListener("pagehide", send, { once: true });
};

const reportInp = (report: WebVitalReporter) => {
  let longest = 0;
  let target: string | undefined;
  let sent = false;

  observe(
    "event",
    (entries) => {
      entries.forEach((entry) => {
        const eventEntry = entry as PerformanceEventTiming & {
          interactionId?: number;
        };

        if (!eventEntry.interactionId) {
          return;
        }

        if (eventEntry.duration > longest) {
          longest = eventEntry.duration;
          target = eventEntry.name;
        }
      });
    },
    { durationThreshold: 16 } as PerformanceObserverInit,
  );

  const send = () => {
    if (sent || longest <= 0) {
      return;
    }

    sent = true;
    report(createMetric("INP", longest, { eventTarget: target }));
  };

  addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      send();
    }
  }, { once: true });
  addEventListener("pagehide", send, { once: true });
};

export const initializeSiteWebVitals = (report: WebVitalReporter) => {
  if (typeof performance === "undefined" || typeof PerformanceObserver === "undefined") {
    return;
  }

  reportTtfb(report);
  reportFcp(report);
  reportLcp(report);
  reportCls(report);
  reportInp(report);
};
