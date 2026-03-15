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

- Route definitions: [`/Users/enzo/belizekids/src/App.tsx`](/Users/enzo/belizekids/src/App.tsx)
- Client bootstrap + hydration: [`/Users/enzo/belizekids/src/main.tsx`](/Users/enzo/belizekids/src/main.tsx)
- SSR/prerender entry: [`/Users/enzo/belizekids/src/entry-server.tsx`](/Users/enzo/belizekids/src/entry-server.tsx)
- Static prerender script: [`/Users/enzo/belizekids/scripts/prerender.mjs`](/Users/enzo/belizekids/scripts/prerender.mjs)
- Shared site metadata: [`/Users/enzo/belizekids/src/lib/site.ts`](/Users/enzo/belizekids/src/lib/site.ts)
- Project content source of truth: [`/Users/enzo/belizekids/src/content/projects.ts`](/Users/enzo/belizekids/src/content/projects.ts)
- Vercel production config: [`/Users/enzo/belizekids/vercel.json`](/Users/enzo/belizekids/vercel.json)
- CI validation: [`/Users/enzo/belizekids/.github/workflows/ci.yml`](/Users/enzo/belizekids/.github/workflows/ci.yml)

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
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

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
- Keep project copy centralized in [`/Users/enzo/belizekids/src/content/projects.ts`](/Users/enzo/belizekids/src/content/projects.ts)

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

Localhost is intentionally excluded from analytics bootstrapping so local QA and static verification do not generate noise or throw analytics errors.

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

Detailed implementation notes live in [`/Users/enzo/belizekids/docs/architecture.md`](/Users/enzo/belizekids/docs/architecture.md).
