# Analytics Notes

## Current Setup

Belize Kids uses three analytics tools:
- Google Analytics 4: `G-ESGDVFXLGZ`
- Vercel Analytics
- Hotjar: `6410191`

Analytics collection is production-only. The shared host gate is in [`src/lib/analytics.ts`](../src/lib/analytics.ts), and the Google tag in [`index.html`](../index.html) uses the same production hostname:

```text
www.belizekids.org
```

Do not send events from localhost, Vercel previews, branch aliases, or non-canonical domains unless there is a clear reporting reason.

## What GA4 Is For

The measurement setup is meant to answer four questions:

1. How did people find the site? Campaign UTMs and click IDs stay on the first `page_view`.
2. What did they actually see? Pageviews include the Helmet title, `page_type`, and `content_group`.
3. Is the site healthy? 404s, JavaScript exceptions, and Core Web Vitals are sent as events.
4. Did they take a next step? Donate, invest, contact, and doctor booking intents remain the conversion events.

## GA4 Pageviews

GA4 automatic pageviews are disabled with:

```text
send_page_view: false
```

Manual pageviews are sent by [`RouteAnalytics`](../src/components/RouteAnalytics.tsx):
- once on initial hydration
- again after each React Router path or query-string change
- after a short delay so `react-helmet-async` can write the real document title

Each pageview includes:
- `page_location` (attribution query params kept, `ga_debug` stripped)
- `page_path`
- `page_title`
- `page_type`
- `content_group`
- `page_referrer`
- `landing_section` when the URL hash points at a homepage section (`contact`, `donate`, `about`, and similar)

`page_referrer` uses the browser referrer for the first pageview, then uses the prior in-app route as a virtual referrer for single-page-app navigation.

After each pageview the Google tag page context is updated with `gtag('set')` and `gtag('config', { update: true })`. That keeps later events attached to the current route instead of the landing page.

The initial Google tag also sets `cookie_domain: belizekids.org` so `www` and the apex host share one client ID if collection is ever expanded.

## Campaign Attribution

`page_location` keeps these query parameters and drops everything else:

- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `utm_id`
- Google Ads click IDs: `gclid`, `gbraid`, `wbraid`, `dclid`, `gclsrc`
- Other paid/social click IDs: `fbclid`, `msclkid`, `ttclid`, `twclid`, `li_fat_id`
- Mailchimp: `mc_cid`, `mc_eid`

GA4 reads campaign source, medium, and name from that first pageview URL. If those params are stripped, newsletter and ad traffic shows up as Direct.

## Page Types

Page type values are resolved in [`src/lib/analytics.ts`](../src/lib/analytics.ts):
- `home`
- `projects_index`
- `project_detail`
- `doctor_availability`
- `monthly_investment`
- `leadership`
- `privacy`
- `terms`
- `not_found`
- `other`

Unknown routes and missing project slugs render [`NotFound`](../src/pages/NotFound.tsx), which marks the page as `not_found` before the pageview is sent. Those hits also fire `page_not_found`.

When adding a new major route, update the page type resolver so GA4 reports stay grouped cleanly.

## Event Strategy

All custom analytics events should go through [`src/lib/analytics.ts`](../src/lib/analytics.ts).

Current high-value events include:
- `monthly_investment_intent`
- `doctor_appointment_intent`
- `donation_intent`
- `contact_intent`
- `contact_form_ready`
- `contact_form_start`
- `contact_form_submit`
- `generate_lead`
- `doctor_appointment_confirmed`
- `contact_form_link_click`
- `social_click`
- `map_open`
- `view_item_list`
- `select_item`
- `view_item`
- `project_filter_change`
- `project_view_mode_change`
- `project_pagination`
- `project_reference_click`
- `scroll_depth` at 25, 50, 75, and 90 percent
- `section_view`
- `page_not_found`
- `exception`
- Core Web Vitals: `LCP`, `INP`, `CLS`, `FCP`, `TTFB`

GA4 receives structured event parameters. Vercel Analytics receives the same event names with simplified properties, except Web Vitals and exceptions, which are GA4-only.

Do not add a second generic outbound-click tracker. If Enhanced Measurement outbound clicks are enabled on the GA4 web stream, a custom `click` event would double-count those hits. High-value exits already have their own names (`social_click`, `map_open`, `project_reference_click`).

## Site Health Events

### 404s

`page_not_found` is the reportable event. Use it to find broken inbound links, old project slugs, and mistyped URLs.

### JavaScript exceptions

`exception` is sent for `window.error` and unhandled promise rejections. The `description` is truncated and is not a full stack trace. Duplicate identical exceptions in the same page are suppressed.

### Core Web Vitals

[`PerformanceObserver`](https://developer.mozilla.org/docs/Web/API/PerformanceObserver) sends LCP, INP, CLS, FCP, and TTFB using Google's recommended parameter names:

- `value` (integer; CLS is multiplied by 1,000)
- `metric_id`
- `metric_value`
- `metric_delta`
- `metric_rating` (`good`, `needs-improvement`, or `poor`)
- `metric_navigation_type`
- `debug_target` when attribution data names the element involved

Vercel Analytics already collects its own Web Vitals. These GA4 events exist so performance can be sliced by `page_type`, landing page, and traffic source in the same property as the rest of the site.

## Debugging

To test GA4 DebugView on production, add this query parameter:

```text
?ga_debug=1
```

Example:

```text
https://www.belizekids.org/projects?ga_debug=1
```

That flag is stored in `sessionStorage` for the rest of the tab session, so later in-app navigations stay in DebugView after the query string is gone.

Recommended checks before release:
- `npm run lint`
- `npm run build`
- confirm `dist/index.html` contains the Google tag
- confirm `dist/index.html` uses `send_page_view: false`
- test one production URL with `?ga_debug=1` in GA4 DebugView after deploy
- confirm the first hit keeps UTMs on `page_location`
- confirm a fake path such as `/this-page-does-not-exist` sends `page_type: not_found`

## GA4 Admin Checklist

Code can send parameters. Standard reports only keep them if the GA4 property is configured. In Admin for this property:

### Data stream

Open the web stream for `www.belizekids.org` and review Enhanced Measurement:

- Keep outbound clicks, file downloads, and form interactions on.
- Turn **off** "Page changes based on browser history events". This app already sends SPA pageviews. Leaving history-based pageviews on will inflate every in-app navigation.
- Scrolls can stay on. Enhanced Measurement sends a `scroll` event at 90%. The site also sends `scroll_depth` at 25/50/75/90 so shallower engagement is visible as one event name.

### Custom definitions

Register these as event-scoped custom dimensions so they survive beyond the DebugView window:

| Dimension name | Event parameter |
| --- | --- |
| Page type | `page_type` |
| Landing section | `landing_section` |
| CTA location | `cta_location` |
| CTA target | `cta_target` |
| Lead source | `lead_source` |
| Lead type | `lead_type` |
| Social network | `social_network` |
| Project category | `project_category` |
| Selected filter | `selected_filter` |
| Section name | `section_name` |
| Metric rating | `metric_rating` |
| Metric navigation type | `metric_navigation_type` |
| Debug target | `debug_target` |

Register these as event-scoped custom metrics:

| Metric name | Event parameter | Unit |
| --- | --- | --- |
| Metric value | `metric_value` | Standard |
| Percent scrolled | `percent_scrolled` | Standard |

`content_group` is a GA4 predefined dimension. It is already sent on `page_view` and does not need a custom definition.

### Conversions

Mark these events as conversions:

- `generate_lead`
- `contact_form_submit`
- `doctor_appointment_confirmed`
- `donation_intent`
- `monthly_investment_intent`

`donation_intent` and `monthly_investment_intent` are not completed gifts. Online checkout is not live yet, so they measure "started the giving path" rather than money received.

### Property settings

- Link Google Search Console to this GA4 property so landing-page and query data sit next to on-site behavior.
- Set data retention to 14 months.
- Turn on Google signals if demographic and interest reports are wanted. No extra PII is sent from the site.
- Create an exploration for site health: `page_not_found`, `exception`, and Web Vital `metric_rating`.
- Create a funnel exploration: `page_view` → `donation_intent` or `monthly_investment_intent` → `contact_form_start` → `generate_lead`.

## Guardrails

Do:
- keep analytics logic centralized in `src/lib/analytics.ts`
- prefer GA4 recommended event names when they fit the user action
- keep event parameters stable and easy to read
- include `page_type` or page context on meaningful events
- keep collection limited to `www.belizekids.org`
- keep campaign query parameters on the landing `page_location`

Do not:
- re-enable GA4 automatic pageviews in `index.html`
- leave Enhanced Measurement history-based pageviews on
- add a second Google tag loader in React
- send local or preview traffic into GA4
- create fake commerce events for nonprofit actions that are not real checkout steps
- add personally identifying information to event parameters
- duplicate Enhanced Measurement outbound `click` events
