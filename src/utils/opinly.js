/**
 * Thin wrapper around the Opinly analytics pixel.
 *
 * The pixel itself is loaded once, globally, via a <script> tag in
 * public/index.html. Because that script is async, window.opinly may not be
 * present the instant we want to call it — these helpers guard for that and
 * briefly queue calls until the pixel finishes loading, so early events aren't
 * dropped. All calls are no-ops (never throw) if the pixel fails to load.
 */

const READY_RETRY_MS = 300;
const READY_MAX_ATTEMPTS = 20; // ~6s total, then give up silently

// Run `fn` once window.opinly exists, retrying a bounded number of times.
function whenReady(fn, attempt = 0) {
  if (typeof window === "undefined") return;

  if (window.opinly) {
    try {
      fn(window.opinly);
    } catch (err) {
      // Never let analytics break the page.
      if (import.meta.env.DEV) {
        console.error("Opinly call failed:", err);
      }
    }
    return;
  }

  if (attempt < READY_MAX_ATTEMPTS) {
    setTimeout(() => whenReady(fn, attempt + 1), READY_RETRY_MS);
  }
}

/**
 * Associate the current visitor with a known email.
 * `email` is required by Opinly — the call is ignored without one, and the
 * first identify wins for a given visitor.
 */
export function identify({ email, userId } = {}) {
  if (!email) return;
  whenReady((opinly) => opinly.identify({ email, userId }));
}

/**
 * Fire a standard Opinly event (e.g. "sign_up", "generate_lead").
 * `opts.externalEventId` lets a server dedupe the same event to one record.
 */
export function trackEvent(name, props = {}, opts) {
  whenReady((opinly) => opinly.track(name, props, opts));
}

/**
 * Manually record a page view. The pixel auto-tracks the first load; call this
 * on client-side route changes so each SPA navigation is counted.
 */
export function page() {
  whenReady((opinly) => opinly.page());
}
