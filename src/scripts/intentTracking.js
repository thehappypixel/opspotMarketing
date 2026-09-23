// Buyer-intent tracking for the marketing site.
//
// Layers behavioral "intent" signals on top of the basic click tracking in
// analyticsClient.js, so GA4 can distinguish an interested buyer from noise.
// Everything routes through the shared trackEvent helper, so internal-traffic
// filtering (dev mode + the ga_internal_traffic flag) still applies and nothing
// fires when gtag is unavailable.
//
// GA4 events emitted (all under event_category "intent"):
//   view_pricing          landed on the pricing page
//   view_product          landed on a product page (label = which one)
//   high_intent_browsing  viewed 3+ distinct product/pricing pages this session
//   returning_visitor     a prior visitor started a new session (label = days since first seen)
//   scroll_depth          reached 50% / 90% of a product or pricing page
//   engaged_time          stayed 30s / 60s on a product or pricing page
//
// Page views happen as full loads (Astro MPA), so this runs fresh per page.

import { trackEvent } from "../utils/analytics";

// Product pages worth scoring, mapped to a human label for the GA report.
const PRODUCT_PAGES = {
  "/mobile-guard": "Mobile guard",
  "/incident-management": "Incident management",
  "/security-reporting": "Security reporting",
  "/scheduling": "Scheduling",
};

const PRICING_PATH = "/pricing";

// sessionStorage / localStorage keys.
const SESSION_PAGES_KEY = "opspot_intent_pages";
const HIGH_INTENT_FIRED_KEY = "opspot_intent_high_fired";
const SESSION_STARTED_KEY = "opspot_session_started";
const FIRST_SEEN_KEY = "opspot_first_seen";

// Strip a trailing slash so "/pricing" and "/pricing/" match (root stays "/").
function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

// Storage can throw (private mode, blocked cookies); degrade silently.
function safeGet(storage, key) {
  try {
    return storage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(storage, key, value) {
  try {
    storage.setItem(key, value);
  } catch {
    /* storage unavailable — intent tracking degrades gracefully */
  }
}

// A prior visitor returning is a strong intent signal. Fire once per session.
function trackReturningVisitor() {
  const now = Date.now();
  const firstSeen = safeGet(localStorage, FIRST_SEEN_KEY);

  if (!firstSeen) {
    safeSet(localStorage, FIRST_SEEN_KEY, String(now));
    return; // brand-new visitor
  }

  if (!safeGet(sessionStorage, SESSION_STARTED_KEY)) {
    safeSet(sessionStorage, SESSION_STARTED_KEY, String(now));
    const daysSince = Math.floor((now - Number(firstSeen)) / 86400000);
    trackEvent(
      "returning_visitor",
      "intent",
      `days_since_first:${daysSince}`,
      daysSince
    );
  }
}

// Count distinct product/pricing pages seen this session; 3+ = high intent.
function trackSessionBrowsing(path) {
  let pages;
  try {
    pages = JSON.parse(safeGet(sessionStorage, SESSION_PAGES_KEY) || "[]");
  } catch {
    pages = [];
  }
  if (!Array.isArray(pages)) pages = [];

  if (!pages.includes(path)) {
    pages.push(path);
    safeSet(sessionStorage, SESSION_PAGES_KEY, JSON.stringify(pages));
  }

  if (pages.length >= 3 && !safeGet(sessionStorage, HIGH_INTENT_FIRED_KEY)) {
    safeSet(sessionStorage, HIGH_INTENT_FIRED_KEY, "1");
    trackEvent("high_intent_browsing", "intent", pages.join(" > "), pages.length);
  }
}

// Fire once each when the reader reaches 50% and 90% of the page.
function initScrollDepth(label) {
  const thresholds = [
    { pct: 50, hit: false },
    { pct: 90, hit: false },
  ];

  const onScroll = () => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    if (scrollable <= 0) return;
    const pct = (doc.scrollTop / scrollable) * 100;

    let remaining = false;
    for (const t of thresholds) {
      if (!t.hit && pct >= t.pct) {
        t.hit = true;
        trackEvent("scroll_depth", "intent", `${label} | ${t.pct}%`, t.pct);
      }
      if (!t.hit) remaining = true;
    }
    if (!remaining) window.removeEventListener("scroll", onScroll);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
}

// Fire at 30s and 60s of dwell, as long as the tab is still visible.
function initEngagedTime(label) {
  [30, 60].forEach((seconds) => {
    setTimeout(() => {
      if (!document.hidden) {
        trackEvent("engaged_time", "intent", `${label} | ${seconds}s`, seconds);
      }
    }, seconds * 1000);
  });
}

export function initIntentTracking() {
  if (typeof window === "undefined") return;

  const path = normalizePath(window.location.pathname);
  const isPricing = path === PRICING_PATH;
  const productLabel = PRODUCT_PAGES[path];
  const isProduct = Boolean(productLabel);

  // Runs on every page.
  trackReturningVisitor();

  if (isPricing) {
    trackEvent("view_pricing", "intent", "pricing");
    trackSessionBrowsing(path);
  } else if (isProduct) {
    trackEvent("view_product", "intent", productLabel);
    trackSessionBrowsing(path);
  }

  // Depth + dwell only matter on the high-value pages.
  if (isPricing || isProduct) {
    initScrollDepth(isPricing ? "Pricing" : productLabel);
    initEngagedTime(isPricing ? "Pricing" : productLabel);
  }
}
