# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The **Opspot marketing website** — a B2B SaaS marketing site for Opspot, a security guard management software product. It is a React SPA (Create React App) deployed on Digital Ocean App Platform.

The site has:
- Standard B2B marketing pages (Home, product feature pages, Pricing, About, Contact)
- A contact form
- Two SEO-focused content sections under Resources: **Security Operations Guides** and **Comparisons**

CTAs on this site redirect users to the main Opspot web app at `REACT_APP_DOMAIN`.

---

## Commands

```bash
npm start          # Dev server at localhost:3000
npm run build      # Production build to /build
npm test           # Run tests (watch mode)
npm test -- --watchAll=false  # Run tests once
```

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
| Security Operations Guides | `/resources/security-operations-guides` | SEO content index |
| Guide article | `/resources/security-operations-guides/:slug` | SEO content article |
| Comparisons | `/ressources/comparisons` | SEO content index (see note below) |
| Comparison article | `/ressources/comparisons/:slug` | SEO content article |

> **URL typo:** The Comparisons section uses `/ressources/` (double-s). This is intentional — it's the canonical URL used in nav links, Helmet tags, and article back-links. A corrected `/resources/comparisons` route also exists as a redirect alias but the typo path is the live one.

---

## Adding new content articles

This is the most common content task. Both resource sections use the same pattern: **content is defined as JS/JSX objects in a content file, and a generic renderer reads them by slug from the URL.** No new routes or new components are needed when adding articles.

### Security Operations Guides

**Content file:** `src/content/securityOperationsGuidesContent.jsx`
**Index page:** `src/screens/resources/Guides.jsx`
**Article renderer:** `src/screens/resources/guides/GuideArticle.jsx`
**URL pattern:** `/resources/security-operations-guides/:slug`
**Image folder:** `src/assets/images/guides/`

These are useful educational articles targeting security operations keywords. Each article should be written for SEO — the `meta.description` and `meta.keywords` fields are injected into the page `<head>` via `react-helmet-async`. Articles are listed newest-first (the array is `.reverse()`d in the index).

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
**Index page:** `src/screens/resources/Comparisons.jsx`
**Article renderer:** `src/screens/resources/comparisons/ComparisonArticle.jsx`
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
Plan definitions and Stripe price IDs are in `src/content/pricingContent.jsx`. Price IDs come from env vars (`REACT_APP_STARTER_PLAN`, `REACT_APP_PROFESSIONAL_PLAN_MONTHLY/YEARLY`, `REACT_APP_PREMIUM_PLAN_MONTHLY/YEARLY`). Only the first two plans are rendered (`plans.slice(0, 2)`); the third is kept for future use.

### Navigation
The nav starts black (transparent-style) and transitions to white on scroll. Article detail pages and `/contact` use a white nav from the start. This is controlled by the `whiteBackgroundRoutes` list and route-prefix checks in `src/components/navigation.jsx`.

### Analytics
Google Analytics 4 (measurement ID `G-6JNFK4F9RY`) via `window.gtag`. All dev traffic is automatically tagged `traffic_type: "internal"`. Helper functions in `src/utils/analytics.js`: `trackButtonClick`, `trackLinkClick`, `trackFormSubmit`, `trackExternalLink`, `trackEvent`.

### Auth / sign-up CTAs
Auth is handled by Kinde (`src/contexts/KindeWrapper.js`). Sign-up and login links are plain `<a>` tags pointing to `REACT_APP_DOMAIN/auth/register` and `/auth/login`. The `priceId` query param pre-selects the plan on registration.

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

Hosted on Digital Ocean App Platform. Environment variables are set in the DO dashboard (not in `.env`). See `DIGITAL_OCEAN_SETUP.md` for the full variable list and setup instructions.

## Archived files

Files prefixed `ARCH-` (e.g., `src/components/ARCH-pricing.jsx`) are unused components kept for reference — do not edit or import them.
