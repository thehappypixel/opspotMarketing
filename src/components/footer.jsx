import React from "react";
import logoLight from "../assets/images/opspot-logo-light.svg";
import { imgSrc } from "../utils/img";

const footerSections = [
  {
    heading: "Product",
    links: [
      { label: "Mobile guard", to: "/mobile-guard" },
      { label: "Incident management", to: "/incident-management" },
      { label: "Security reporting", to: "/security-reporting" },
      { label: "Scheduling", to: "/scheduling" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    heading: "Resources",
    links: [
      {
        label: "Security operations guides",
        to: "/resources/security-operations-guides",
      },
      { label: "Comparisons", to: "/ressources/comparisons" },
      { label: "Blog", to: "/blog" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Contact", to: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand column */}
        <div>
          <img src={imgSrc(logoLight)} alt="Opspot" className="h-6 mb-4" />
          <p className="text-gray-500 text-xxs leading-relaxed max-w-xs">
            Security operations software for small and mid-size teams.
          </p>
        </div>

        {/* Link columns */}
        {footerSections.map((section) => (
          <div key={section.heading}>
            <p className="text-gray-600 text-xxs font-medium uppercase tracking-widest mb-4">
              {section.heading}
            </p>
            <ul className="flex flex-col gap-3">
              {section.links.map((link) => (
                <li key={link.to}>
                  <a
                    href={link.to}
                    className="text-gray-400 text-xxs hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-900 px-10 py-4 flex justify-between items-center">
        <p className="text-gray-600 text-xxs">
          © 2026 Opspot Software Inc.
        </p>
        <a
          href="https://www.linkedin.com/company/opspot-io"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-white transition-colors"
          aria-label="Opspot on LinkedIn"
          data-track="external"
          data-track-dest="https://www.linkedin.com/company/opspot-io"
          data-track-text="footer_linkedin"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
