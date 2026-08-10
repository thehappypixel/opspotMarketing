// Global, delegated click tracking for the Astro (MPA) site.
//
// In CRA these events fired from React onClick handlers. Here most links/buttons
// are server-rendered to static HTML (no per-component JS), so we attach ONE
// delegated listener that reads data-track-* attributes and forwards to the
// existing analytics helpers. Page views need no wiring: every MPA navigation is
// a full load, so gtag (in <head>) and the Opinly pixel auto-fire per page.

import {
  trackButtonClick,
  trackLinkClick,
  trackExternalLink,
} from "../utils/analytics";

export function initAnalyticsClient() {
  document.addEventListener("click", (event) => {
    const el = event.target.closest("[data-track]");
    if (!el) return;

    const kind = el.getAttribute("data-track");
    const d = el.dataset;

    if (kind === "button") {
      trackButtonClick(d.trackText || "", d.trackLocation || "", d.trackDest || "");
    } else if (kind === "external") {
      trackExternalLink(d.trackDest || "", d.trackText || "");
    } else if (kind === "link") {
      trackLinkClick(d.trackText || "", d.trackDest || "", d.trackLocation || "");
    }
  });
}
