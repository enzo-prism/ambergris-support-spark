# Architecture Notes

## Rendering Model

The production site is a **prerendered React site** hosted as static files on Vercel.

At build time:
1. Vite builds the client bundle
2. Vite builds an SSR entry from [`src/entry-server.tsx`](../src/entry-server.tsx)
3. [`scripts/prerender.mjs`](../scripts/prerender.mjs) renders each SEO-important route to HTML
4. The script also generates `sitemap.xml`, `robots.txt`, and `llms.txt`
5. The temporary server bundle is removed from `dist/`

At runtime:
- Vercel serves the generated HTML directly
- React hydrates through [`src/main.tsx`](../src/main.tsx)
- The site behaves like a normal React app after hydration, but the initial response already contains the real page

## Why This Approach

This project is primarily a marketing and nonprofit information site, not a data-heavy web application.

The prerendered approach gives us:
- immediate HTML for Google Search
- stable route metadata
- fast first paint
- simpler Vercel hosting
- lower migration risk than a full framework rewrite

## Content Sources

Project content is centralized in:
- [`src/content/projects.ts`](../src/content/projects.ts)

That file drives:
- project listing pages
- project detail pages
- related content
- project SEO metadata
- generated route list for prerendering
- generated sitemap entries

If a new project route is added, update the content source first.

## Metadata Strategy

Each page owns its own:
- `<title>`
- meta description
- Open Graph tags
- canonical URL
- robots directives when needed
- JSON-LD structured data where useful

Metadata is still declared in page components with `react-helmet-async`, but because pages are prerendered, those tags are now present in the initial HTML response.

## Vercel Strategy

The project is deployed as a static output on Vercel.

[`vercel.json`](../vercel.json) is responsible for:
- security headers
- the permanent redirect from `/membership` to `/monthly-investment`

Important:
- there is intentionally **no SPA catch-all rewrite**
- direct route requests should resolve to static files produced during prerender

## Analytics Strategy

Production tracking includes:
- Vercel Analytics
- Google Analytics
- Hotjar

Analytics are production-only and are gated to `www.belizekids.org`.

This prevents:
- local QA noise
- Vercel preview traffic in reports
- duplicate data from alternate hostnames
- misleading event volume during development

GA4 automatic pageviews are disabled in `index.html`. Route pageviews are sent from [`RouteAnalytics`](../src/components/RouteAnalytics.tsx), and shared event logic lives in [`src/lib/analytics.ts`](../src/lib/analytics.ts).

Pageviews keep campaign query parameters, wait for the real Helmet title, update the Google tag page context after each SPA navigation, and classify 404s as `not_found`. Core Web Vitals and script exceptions are also sent to GA4 so the same property can show traffic quality and site health.

See [`docs/analytics.md`](analytics.md) for event names, the GA4 Admin checklist, debug steps, and guardrails.

## Known Tradeoffs

- The client bundle is still larger than ideal because the site uses animation-heavy React components and synchronous route imports for SSR stability.
- This is materially better for SEO than the old SPA model, but not as far as a full Astro or Next.js migration could go.
- If future performance work becomes a priority, the next step is reducing client-side animation weight and reintroducing safe code splitting around non-critical UI.

## Guardrails For Future Changes

Do not:
- reintroduce client-only route rendering for important pages
- add a Vercel rewrite that forces every path back to a single SPA shell
- move canonical project data into duplicate component-level constants
- point social metadata to brittle third-party image hosts
- force every heading to `text-belize-green` in global CSS (breaks contrast on green panels)
- apply 44×44 min sizes to every link and button (breaks footer, logos, and icon buttons)
- set `img { height: auto }` globally (breaks `h-full` / `object-cover` crops)

Prefer:
- real links over JS-only navigation
- first-party assets
- build-time generation for crawlable content
- route-specific metadata with canonical URLs
- explicit heading color per surface
- sized image frames with `object-cover` for photo cards

See [`docs/design.md`](design.md) for the visual rules behind those guardrails.
