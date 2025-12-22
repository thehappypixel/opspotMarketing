/**
 * Google Analytics utility functions
 * Provides helper functions for tracking events and page views
 */

/**
 * Check if current traffic should be marked as internal
 * Returns true if:
 * - Running in development mode, OR
 * - localStorage has 'ga_internal_traffic' set to 'true'
 */
const isInternalTraffic = () => {
  if (typeof window === "undefined") return false;

  // Check if user manually marked themselves as internal traffic
  const manualFlag = localStorage.getItem("ga_internal_traffic");
  if (manualFlag === "true") return true;

  // Mark as internal in development mode
  if (process.env.NODE_ENV === "development") return true;

  return false;
};

/**
 * Track a custom event in Google Analytics
 * @param {string} eventName - The name of the event (e.g., 'button_click', 'form_submit')
 * @param {string} eventCategory - The category of the event (e.g., 'engagement', 'navigation')
 * @param {string} eventLabel - Optional label for the event (e.g., button text, link destination)
 * @param {string} eventValue - Optional numeric value for the event
 */
export const trackEvent = (
  eventName,
  eventCategory,
  eventLabel = "",
  eventValue = null
) => {
  if (typeof window !== "undefined") {
    if (window.gtag) {
      const eventParams = {
        event_category: eventCategory,
        event_label: eventLabel,
      };

      if (eventValue !== null) {
        eventParams.value = eventValue;
      }

      // Add traffic_type parameter for internal traffic filtering
      if (isInternalTraffic()) {
        eventParams.traffic_type = "internal";
      }

      // Log to console in development for debugging
      if (process.env.NODE_ENV === "development") {
        console.log("📊 GA Event:", eventName, eventParams);
      }

      window.gtag("event", eventName, eventParams);
    } else {
      // Log warning if gtag is not available
      if (process.env.NODE_ENV === "development") {
        console.warn(
          "⚠️ Google Analytics gtag not available. Event not tracked:",
          eventName,
          { category: eventCategory, label: eventLabel }
        );
      }
    }
  } else {
    // Log if window is not available (shouldn't happen in browser)
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "⚠️ Window object not available. Event not tracked:",
        eventName
      );
    }
  }
};

/**
 * Track a page view in Google Analytics
 * @param {string} pagePath - The path of the page (e.g., '/pricing', '/contact')
 * @param {string} pageTitle - Optional page title
 */
export const trackPageView = (pagePath, pageTitle = "") => {
  if (typeof window !== "undefined") {
    if (window.gtag) {
      const configParams = {
        page_path: pagePath,
        page_title: pageTitle,
      };

      // Add traffic_type parameter for internal traffic filtering
      if (isInternalTraffic()) {
        configParams.traffic_type = "internal";
      }

      // Log to console in development for debugging
      if (process.env.NODE_ENV === "development") {
        console.log("📄 GA Page View:", pagePath, pageTitle);
      }

      window.gtag("config", "G-6JNFK4F9RY", configParams);
    } else {
      if (process.env.NODE_ENV === "development") {
        console.warn(
          "⚠️ Google Analytics gtag not available. Page view not tracked:",
          pagePath
        );
      }
    }
  }
};

/**
 * Track button clicks - convenience function for CTA buttons
 * @param {string} buttonText - The text on the button
 * @param {string} buttonLocation - Where the button is located (e.g., 'hero', 'navigation', 'footer')
 * @param {string} destination - Where the button leads (e.g., '/signup', '/contact')
 */
export const trackButtonClick = (
  buttonText,
  buttonLocation,
  destination = ""
) => {
  trackEvent(
    "button_click",
    "engagement",
    `${buttonText} | ${buttonLocation}`,
    null
  );

  // Also track as a specific CTA if it's a signup or demo button
  if (
    buttonText.toLowerCase().includes("sign up") ||
    buttonText.toLowerCase().includes("get started")
  ) {
    trackEvent(
      "cta_signup",
      "conversion",
      `${buttonLocation} | ${destination}`
    );
  } else if (
    buttonText.toLowerCase().includes("demo") ||
    buttonText.toLowerCase().includes("request")
  ) {
    trackEvent("cta_demo", "conversion", `${buttonLocation} | ${destination}`);
  }
};

/**
 * Track navigation link clicks
 * @param {string} linkText - The text of the link
 * @param {string} destination - Where the link leads
 * @param {string} location - Where the link is located (e.g., 'navigation', 'footer', 'mobile_menu')
 */
export const trackLinkClick = (
  linkText,
  destination,
  location = "navigation"
) => {
  trackEvent(
    "link_click",
    "navigation",
    `${linkText} | ${location} | ${destination}`
  );
};

/**
 * Track form submissions
 * @param {string} formName - The name/type of the form (e.g., 'contact', 'signup')
 * @param {boolean} success - Whether the form submission was successful
 */
export const trackFormSubmit = (formName, success = true) => {
  const eventName = success ? "form_submit_success" : "form_submit_error";
  trackEvent(eventName, "engagement", formName);

  if (success && formName === "contact") {
    trackEvent("contact_form_submit", "conversion", "contact");
  }
};

/**
 * Track external link clicks (links to other domains)
 * @param {string} url - The external URL
 * @param {string} linkText - The text of the link
 */
export const trackExternalLink = (url, linkText = "") => {
  trackEvent("external_link_click", "outbound", `${linkText} | ${url}`);
};
