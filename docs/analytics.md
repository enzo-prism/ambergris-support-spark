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

## GA4 Pageviews

GA4 automatic pageviews are disabled with:

```text
send_page_view: false
```

Manual pageviews are sent by [`RouteAnalytics`](../src/components/RouteAnalytics.tsx):
- once on initial hydration
- again after each React Router path or query-string change

Each pageview includes:
- `page_location`
- `page_path`
- `page_title`
- `page_type`
- `content_group`
- `page_referrer`

`page_referrer` uses the browser referrer for the first pageview, then uses the prior in-app route as a virtual referrer for single-page-app navigation.

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
- `other`

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
- `scroll_depth`
- `section_view`

GA4 receives structured event parameters. Vercel Analytics receives the same event names with simplified properties.

## Debugging

To test GA4 DebugView on production, add this query parameter:

```text
?ga_debug=1
```

Example:

```text
https://www.belizekids.org/projects?ga_debug=1
```

This adds `debug_mode: true` to GA4 events for that browser session URL.

Recommended checks before release:
- `npm run lint`
- `npm run build`
- confirm `dist/index.html` contains the Google tag
- confirm `dist/index.html` uses `send_page_view: false`
- test one production URL with `?ga_debug=1` in GA4 DebugView after deploy

## Guardrails

Do:
- keep analytics logic centralized in `src/lib/analytics.ts`
- prefer GA4 recommended event names when they fit the user action
- keep event parameters stable and easy to read
- include `page_type` or page context on meaningful events
- keep collection limited to `www.belizekids.org`

Do not:
- re-enable GA4 automatic pageviews
- add a second Google tag loader in React
- send local or preview traffic into GA4
- create fake commerce events for nonprofit actions that are not real checkout steps
- add personally identifying information to event parameters
