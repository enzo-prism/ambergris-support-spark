# Belize Kids Website

Production website for Belize Kids, a nonprofit supporting children in Belize through transparent investments in education, healthcare, and community development.

Live properties:
- Production site: [www.belizekids.org](https://www.belizekids.org)
- Vercel project: `belize-kids`
- GitHub repo: `enzo-prism/ambergris-support-spark`

## What Changed

This site is no longer shipped as a plain client-rendered SPA for production SEO.

It now uses a **static-first prerender pipeline**:
- Vite builds the client bundle
- Vite builds a lightweight SSR entry
- `scripts/prerender.mjs` renders the important routes to HTML at build time
- Vercel serves those generated HTML files directly
- React hydrates on the client for interactivity

That means Google and other crawlers get real content, metadata, canonicals, and structured data in the initial HTML response instead of having to wait for browser-side rendering.

## Stack

- Vite
- React 18
- TypeScript
- React Router
- Tailwind CSS
- shadcn/ui
- `react-helmet-async` for route metadata
- Vercel Analytics
- Google Analytics
- Hotjar

## Key Architecture

- Route definitions: [`src/App.tsx`](src/App.tsx)
- Client bootstrap + hydration: [`src/main.tsx`](src/main.tsx)
- SSR/prerender entry: [`src/entry-server.tsx`](src/entry-server.tsx)
- Static prerender script: [`scripts/prerender.mjs`](scripts/prerender.mjs)
- Shared site metadata: [`src/lib/site.ts`](src/lib/site.ts)
- Project content source of truth: [`src/content/projects.ts`](src/content/projects.ts)
- Vercel production config: [`vercel.json`](vercel.json)
- CI validation: [`.github/workflows/ci.yml`](.github/workflows/ci.yml)

## Routes

Primary routes:
- `/`
- `/projects`
- `/projects/:slug`
- `/leadership`
- `/doctors`
- `/monthly-investment`
- `/privacy`
- `/terms`

Redirects:
- `/membership` permanently redirects to `/monthly-investment`

Generated static pages are emitted into `dist/` for each route during `npm run build`.

## Scripts

```bash
nvm use
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

Local setup notes:
- CI and Vercel both run on Node 24.x. Use [`.nvmrc`](.nvmrc) to match production locally.
- If the local directory is not linked to Vercel yet, run `vercel link --yes --scope enzo-design-prisms-projects --project belize-kids`.
- Pull local environment metadata with `vercel pull --yes --environment=development --scope enzo-design-prisms-projects`.

Build pipeline:
- `npm run build:client` builds the browser bundle
- `npm run build:ssr` builds the server-render entry used for prerendering
- `npm run prerender` renders static HTML plus SEO support files

## SEO Notes

Production SEO depends on keeping the build static-first.

Important rules:
- Do not replace the generated static route files with SPA rewrites
- Do not move critical content behind client-only rendering
- Keep route titles, descriptions, canonicals, and structured data in the page components
- Keep project copy centralized in [`src/content/projects.ts`](src/content/projects.ts)

Generated SEO assets:
- `dist/sitemap.xml`
- `dist/robots.txt`
- `dist/llms.txt`

The copies in `public/` are kept aligned with the generated output for repo clarity, but the build step is the real source of truth.

## Analytics

Current analytics integrations:
- Vercel Analytics
- Google Analytics (`G-ESGDVFXLGZ`)
- Hotjar (`6410191`)

Analytics collection is intentionally production-only. Events are sent only from `www.belizekids.org`, so local development, Vercel previews, branch aliases, and the bare domain do not pollute reporting.

GA4 pageviews are managed manually:
- `index.html` loads the Google tag with `send_page_view: false`
- `src/components/RouteAnalytics.tsx` sends the initial pageview and each React Router navigation
- `src/lib/analytics.ts` centralizes GA4, Vercel Analytics, Hotjar bootstrap, event names, and shared event parameters

Use `?ga_debug=1` on production URLs when checking events in GA4 DebugView.

More detail lives in [`docs/analytics.md`](docs/analytics.md).

## Deploying

Local verification before shipping:

```bash
npm run lint
npm run build
```

Production deployment is handled through Vercel. The site is expected to deploy from `main`.

Recommended release flow:
1. Commit changes on `main`
2. Push to GitHub
3. Deploy to Vercel production
4. Verify:
   - homepage HTML contains real content
   - deep routes load directly
   - `/membership` redirects correctly
   - `robots.txt` and `sitemap.xml` resolve
   - analytics events fire on production

## Maintenance Checklist

When editing this project, verify:
- `npm run lint` passes
- `npm run build` passes
- prerendered HTML exists for important routes
- canonical URLs use `https://www.belizekids.org`
- Open Graph images are stable and first-party
- navigation still works without relying on JavaScript for basic links

## Additional Docs

Detailed implementation notes live in [`docs/architecture.md`](docs/architecture.md).
Analytics notes live in [`docs/analytics.md`](docs/analytics.md).
Design rules and layout pitfalls live in [`docs/design.md`](docs/design.md).
