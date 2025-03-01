import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Button({
  text,
  link,
  type = "primary", // default to primary if no type is provided
  density = "default",
  icon = false,
  iconPosition = "left",
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
    } rounded-lg text-sm font-medium text-brand-primary bg-white border-2 border-brand-primary hover:text-brand-200 hover:border-brand-200 hover:bg-brand-200 hover:bg-opacity-75 hover:text-white`;
  } else if (type === "subtle") {
    buttonClasses = "text-brand-primary border-brand-primary";
  } else {
    // primary
    buttonClasses = `${
      densityClasses[density] || densityClasses.default
    } rounded-lg text-sm font-medium text-white bg-brand-primary border-2 border-brand-primary hover:bg-brand-200 hover:border-brand-200`;
  }

  return (
    <a href={link} className={`${baseClasses} ${buttonClasses}`}>
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
