import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// Presentational link/button. Server-rendered by Astro to static HTML (no JS).
// Click analytics are handled globally via the data-track-* attributes below
// (see src/scripts/analyticsClient.js) instead of an onClick handler.
export default function Button({
  text,
  link,
  type = "primary", // default to primary if no type is provided
  density = "default",
  icon = false,
  iconPosition = "left",
  location = "unknown", // Location context for analytics (e.g., 'hero', 'navigation', 'footer')
}) {
  // Map density variants to padding classes (used for primary and secondary)
  const densityClasses = {
    default: "px-12 py-4",
    comfortable: "px-16 py-6",
    tight: "px-6 py-3",
  };

  // Base classes applied to every button
  const baseClasses =
    "group block transition duration-150 ease-in-out cursor-pointer";

  // Determine the button styling based on the type
  let buttonClasses = "";
  if (type === "secondary") {
    buttonClasses = `${
      densityClasses[density] || densityClasses.default
    } rounded-lg md:text-sm font-medium text-brand-primary bg-white border-2 border-brand-primary hover:text-brand-200 hover:border-brand-200 hover:bg-brand-200 hover:bg-opacity-75 hover:text-white`;
  } else if (type === "ghost") {
    // For use on dark/black backgrounds — white outlined style
    buttonClasses = `${
      densityClasses[density] || densityClasses.default
    } rounded-lg md:text-sm font-medium text-white bg-transparent border-2 border-white/30 hover:border-white/60 hover:bg-white/10`;
  } else if (type === "subtle") {
    buttonClasses = "text-brand-primary border-brand-primary";
  } else {
    // primary
    buttonClasses = `${
      densityClasses[density] || densityClasses.default
    } rounded-lg md:text-sm font-medium text-white bg-brand-primary border-2 border-brand-primary hover:bg-brand-200 hover:border-brand-200`;
  }

  return (
    <a
      href={link}
      data-track="button"
      data-track-text={text}
      data-track-location={location}
      data-track-dest={link}
      className={`${baseClasses} ${buttonClasses}`}
    >
      <div className="flex items-center">
        {icon && iconPosition === "left" && (
          <ArrowRightIcon className="h-5 w-5 mr-2 transition-transform duration-150 group-hover:translate-x-2" />
        )}
        <span>{text}</span>
        {icon && iconPosition === "right" && (
          <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform duration-150 group-hover:translate-x-2" />
        )}
      </div>
    </a>
  );
}
