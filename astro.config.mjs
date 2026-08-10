// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// The marketing site's public origin — used for canonical URLs, Open Graph
// tags, and the auto-generated sitemap. Overridable per-environment via
// PUBLIC_SITE_URL (set in DigitalOcean App Platform for production).
const SITE = process.env.PUBLIC_SITE_URL || "https://opspot.io";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [
    react(),
    // Let our existing tailwind.config.js own the config; don't inject a
    // base stylesheet (we manage global CSS ourselves in src/styles/global.css).
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
