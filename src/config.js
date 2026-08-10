// Central marketing-site config. In Astro, client-exposed env vars must be
// prefixed PUBLIC_ and are read via import.meta.env. Fallbacks keep local dev
// working without a .env; production values are set in DigitalOcean App Platform.

export const SITE_URL = import.meta.env.PUBLIC_SITE_URL || "https://opspot.io";
export const APP_URL = import.meta.env.PUBLIC_APP_URL || "http://localhost:3000";
export const STARTER_PLAN = import.meta.env.PUBLIC_STARTER_PLAN || "";

// Google Analytics measurement id (public by design).
export const GA_ID = "G-6JNFK4F9RY";

export const registerUrl = (priceId = STARTER_PLAN) =>
  `${APP_URL}/auth/register/?priceId=${priceId}`;

export const loginUrl = () => `${APP_URL}/auth/login/`;
