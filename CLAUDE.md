# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The **Opspot marketing website** — a B2B SaaS marketing site for Opspot, a security guard management software product. It is an **Astro** static site (`astro build` outputs static HTML) that renders interactive UI with **React islands** (`@astrojs/react`) and styles with Tailwind. Deployed on Digital Ocean App Platform.

> **Note:** This was originally a Create React App SPA and was migrated to Astro. Source still lives under `src/` and shared UI is written as `.jsx` React components, but pages are now Astro files under `src/pages/` and routing is file-based (no React Router).

The site has:
- Standard B2B marketing pages (Home, product feature pages, Pricing, About, Contact)
- A contact form
- A blog (`/blog`)
- SEO-focused content sections under Resources: **Security Operations Guides** and **Comparisons**

CTAs on this site redirect users to the main Opspot web app at `PUBLIC_APP_URL` (see `src/config.js`).

---

## Commands

```bash
npm run dev        # Astro dev server at localhost:4321 (alias: npm start)
npm run build      # Production build to /dist
npm run preview    # Serve the production build locally
```

> There is no test script configured. Env vars use the Astro convention: browser-exposed values are prefixed `PUBLIC_` and read via `import.meta.env.PUBLIC_*`. See `.env.example` for the full list; local dev works without a `.env` because `src/config.js` provides fallbacks.

---

## Site pages

| Page | Route | Type |
|------|-------|------|
| Home | `/` | Marketing — hero + feature highlights |
| Mobile Guard | `/mobile-guard` | Product feature page |
| Incident Management | `/incident-management` | Product feature page |
| Security Reporting | `/security-reporting` | Product feature page |
| Guard Scheduling | `/scheduling` | Product feature page |
| Pricing | `/pricing` | Pricing table + FAQ |
| Contact | `/contact` | Contact form |
| About | `/about` | Static |
| Blog | `/blog` | Blog index |
| Blog post | `/blog/:slug` | Blog article |
| Security Operations Guides | `/resources/security-operations-guides` | SEO content index |
| Guide article | `/resources/security-operations-guides/:slug` | SEO content article |
| How-to articles | `/resources/how-to-articles` | Resources page |
| Walkthroughs | `/resources/walkthroughs` | Resources page |
| Comparisons | `/ressources/comparisons` | SEO content index (see note below) |
| Comparison article | `/ressources/comparisons/:slug` | SEO content article |

Pages are Astro files under `src/pages/`; the folder path is the route. Dynamic routes (`[slug].astro`) enumerate their pages via `getStaticPaths()`, which maps over the relevant content array — so adding a content object is enough, no route changes needed.

> **URL typo:** The Comparisons section uses `/ressources/` (double-s). This is intentional — it's the canonical URL used in nav links, footer, content links, and canonicals. A corrected `/resources/comparisons` route redirects to it; the redirect is defined in `astro.config.mjs` (`redirects`), not a component. The typo path is the live one.

---

## Adding new content articles

This is the most common content task. Both resource sections use the same pattern: **content is defined as JS/JSX objects in a content file, and a generic renderer reads them by slug from the URL.** No new routes or new components are needed when adding articles.

### Security Operations Guides

**Content file:** `src/content/securityOperationsGuidesContent.jsx`
**Index page:** `src/pages/resources/security-operations-guides/index.astro` (cards via `src/components/guideCard.jsx`)
**Article page:** `src/pages/resources/security-operations-guides/[slug].astro` (renders `src/components/guideArticleBody.jsx`)
**URL pattern:** `/resources/security-operations-guides/:slug`
**Image folder:** `src/assets/images/guides/`

These are useful educational articles targeting security operations keywords. Each article should be written for SEO — the `meta.description` and `meta.keywords` fields are passed as props to `Layout.astro`, which injects them into the page `<head>` (title, meta description/keywords, Open Graph, and JSON-LD). Articles are listed newest-first (the array is `.reverse()`d in the index).

**Article object structure:**

```js
{
  id: "kebab-case-slug",            // same as slug
  slug: "kebab-case-slug",          // used in URL
  title: "Article title",
  intro: "One-sentence teaser shown on the index card",
  readTime: 8,                      // minutes, shown in the article header
  image: importedImage,             // import at top of file
  imageAlt: "Alt text for image",
  meta: {
    description: "SEO meta description",
    keywords: "comma, separated, keywords",
  },
  articleIntro: (<>JSX paragraphs shown before sections</>),
  sections: [
    {
      type: "why" | "challenges" | "considerations" | "best-practices" | "getting-started" | ...,
      title: "Section heading",
      content: (<>JSX content</>),
      image: null,        // or imported image
      imageAlt: null,     // or string
    },
    // ...more sections
  ],
  callout: (<>JSX for the brand callout block at the end</>),
}
```

The `callout` renders in a blue left-bordered box with a megaphone icon. It's used to softly mention Opspot as a solution without hard-selling.

### Comparisons

**Content file:** `src/content/comparisonsContent.jsx`
**Index page:** `src/pages/ressources/comparisons/index.astro`
**Article page:** `src/pages/ressources/comparisons/[slug].astro` (renders `src/components/comparisonArticleBody.jsx`)
**URL pattern:** `/ressources/comparisons/:slug` (note the typo)

These compare Opspot against specific competitor products (e.g., "Opspot vs GuardsPro"). The structure is simpler than guides — sections contain freeform JSX so comparison tables and feature grids can be built inline.

**Article object structure:**

```js
{
  id: "opspot-vs-competitorname",
  slug: "opspot-vs-competitorname",
  title: "Opspot vs CompetitorName",
  intro: "One-sentence teaser for the index card",
  readTime: 7,
  meta: {
    description: "SEO meta description",
    keywords: "comma, separated, keywords",
  },
  articleIntro: (<>JSX intro paragraphs</>),
  sections: [
    {
      title: "Section heading",
      content: (<>JSX — tables, grids, bullet lists</>),
    },
    // ...
  ],
  callout: (<>JSX for closing brand callout</>),
}
```

Comparisons do **not** have a header image (unlike guides).

---

## Static product/marketing pages

Product feature pages (Mobile Guard, Incident Management, Security Reporting, Scheduling) use a shared `<ImageTextBlock>` component fed from content files in `src/content/`:

- `homeImageTextBlockContent.jsx`
- `guardImageTextBlockContent.jsx`
- `incidentManagementImageTextBlockContent.jsx`
- `securityReportingImageTextBlockContent.jsx`
- `schedulingImageTextBlockContent.jsx`

Each exports an array of block objects (`header`, `body`, `imageUrl`, `listItems`, `ctaText`, `ctaLink`, `firstItem`).

---

## Key implementation details

### Contact form
Submissions POST to `https://submit-form.com/ZuXEDAcfM` (Formspark). Validated client-side with `react-hook-form` + Zod.

### Pricing
Plan definitions and Stripe price IDs are in `src/content/pricingContent.jsx`, rendered by `src/components/pricingTable.jsx`. Price IDs come from `PUBLIC_*` env vars (e.g. `PUBLIC_STARTER_PLAN`, `PUBLIC_PROFESSIONAL_PLAN_MONTHLY`) read via `import.meta.env`.

### Navigation
The nav starts black (transparent-style) and transitions to white on scroll. Article detail pages and `/contact` use a white nav from the start. This is controlled by the `whiteBackgroundRoutes` list and route-prefix checks in `src/components/navigation.jsx`.

### Analytics
Google Analytics 4 (measurement ID `G-6JNFK4F9RY`) via `window.gtag`. All dev traffic is automatically tagged `traffic_type: "internal"`. Helper functions in `src/utils/analytics.js`: `trackButtonClick`, `trackLinkClick`, `trackFormSubmit`, `trackExternalLink`, `trackEvent`.

### Auth / sign-up CTAs
This marketing site does not handle auth itself. Sign-up and login are plain `<a>` links to the main app, built by the `registerUrl()` / `loginUrl()` helpers in `src/config.js`, which point to `PUBLIC_APP_URL/auth/register` and `/auth/login`. `registerUrl(priceId)` adds a `priceId` query param to pre-select a plan on registration (defaults to `PUBLIC_STARTER_PLAN`).

### Styling
Tailwind CSS with a **custom font size scale** — the defaults are overridden:

| Class | Size |
|-------|------|
| `text-xxs` | 12px |
| `text-xs` | 14px |
| `text-sm` | 16px (body copy) |
| `text-md` | 20px |
| `text-lg` | 36px |
| `text-xl` | 50px |
| `text-xxl` | 60px |

Breakpoints: `sm`=320px, `md`=768px, `lg`=976px, `xl`=1440px.
Brand colors: `brand-primary` (#5177fc), `brand-secondary` (#ec5e33).

---

## Deployment

Hosted on Digital Ocean App Platform (`astro build` → static `/dist`). Production environment variables are set in the DO dashboard, not committed. `.env.example` documents the variables for local dev; `PUBLIC_*` vars are inlined into the client bundle at build time, while unprefixed vars (e.g. `OPINLY_API_KEY`) stay server-side. See `DIGITAL_OCEAN_SETUP.md` for the full setup instructions.

## Archived files

Any file prefixed `ARCH-` is an unused component kept for reference only — do not edit or import them. (None currently exist, but the convention stands if you archive something.)
