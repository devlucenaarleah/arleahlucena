# Pangasinan Heritage

A complete Next.js App Router + TypeScript website. No API keys or backend are needed.

## Run locally
Requires Node.js 20.9 or newer and npm.

```bash
npm ci
npm run dev
```
Open http://localhost:3000.

## Production
```bash
npm run build
npm start
```
Open http://localhost:3000. The included Node static server serves the generated `out` folder. You can also deploy `out` to any static host. Next.js `output: 'export'` is configured intentionally: this site does not require a server runtime, database or secret keys.

## Included
- Three destinations with accessible native dialog detail panels.
- Category filters, responsive mobile menu, persistent local trip shortlist and downloadable plain-text trip notes.
- Low-data setting persisted locally, automatically honoring navigator.connection.saveData where supported. Photos load only after the preference is read; offscreen photos are lazy-loaded. Turning low-data on stops future image rendering, but cannot reclaim bytes already downloaded.
- Local WebP assets, system fonts, no autoplay media, no third-party client requests.
- Semantic landmarks, skip link, visible keyboard focus, dialog Escape handling, image fallbacks, reduced-motion support.
- Static HTML output; content readable without JavaScript, with enhanced controls requiring JavaScript.

## Files
`app/page.tsx`: editable destination data and interactive page.
`app/globals.css`: responsive design and theme.
`app/layout.tsx`: SEO metadata and document language.
`public/images`: optimized destination photographs.
`public/photo-credits.txt`: image attribution and reuse terms.
`server.mjs`: dependency-free local production static server.

## Verification and limits
Production compilation and TypeScript checks were run. Browser/device end-to-end testing has not been performed. No software can be guaranteed to work in every environment. Browser local storage can be blocked or cleared; the site falls back to session memory. This is an independent demonstration, not an official provincial portal. Current prices, hours and access are deliberately not asserted; official information links are provided. Consult the photo credits: the Balungao demonstration photograph needs permission or replacement before public commercial use.

## Deploy to Vercel
Import this folder as a Git repository, select the Next.js framework preset, and use `npm run build`. No environment variables are required. Alternatively run `npx vercel` from this folder.

## Deploy to Netlify or Cloudflare Pages
Use build command `npm run build` and publish directory `out`. All photos are bundled in `public/images` and copied into the production output; no remote image configuration is required.

## Design
Rose-pink and berry palette, rounded cards, serif headlines, postcard photography, responsive navigation, and preserved trip planner. All dependencies including lucide-react are declared and locked. Run npm ci before starting the application.

## Pink UI update
A stronger pink palette, floating pill navigation, rounded photo cards, postcard hero, larger touch targets, improved mobile dropdown, and clearer destination actions. Existing category filters, saved trips, low-data mode, and trip-note downloads are preserved.
