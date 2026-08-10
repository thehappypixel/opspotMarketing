import React, { useEffect, useState, useRef } from "react";
import logoLight from "../assets/images/opspot-logo-light.svg";
import logoDark from "../assets/images/opspot-logo-dark.svg";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  DevicePhoneMobileIcon,
  FlagIcon,
  ClipboardDocumentCheckIcon,
  CalendarDaysIcon,
  BookOpenIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import {
  trackLinkClick,
  trackExternalLink,
  trackEvent,
} from "../utils/analytics";
import { registerUrl, loginUrl } from "../config";
import { imgSrc } from "../utils/img";

// Interactive header. Hydrated as a client:load island. `pathname` is passed in
// from the Astro page (Astro.url.pathname) so active-state and page-background
// logic works during SSR without touching window.
const Navigation = ({ pathname = "/" }) => {
  const [navState, setNavState] = useState({
    bg: "bg-black",
    text: "text-gray-200",
    linkText: "text-gray-700",
    linkHover: "hover:bg-gray-100 hover:text-black",
    logo: logoLight,
    container: "bg-gray-50 border border-gray-500",
  });
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);

  const productRoutes = [
    "/mobile-guard",
    "/incident-management",
    "/security-reporting",
    "/scheduling",
  ];
  const isProductActive = productRoutes.includes(pathname);

  const resourcesRoutes = [
    "/resources/security-operations-guides",
    "/resources/how-to-articles",
    "/resources/walkthroughs",
    "/ressources/comparisons",
    "/resources/comparisons",
  ];
  const isResourcesActive =
    resourcesRoutes.includes(pathname) ||
    (pathname.startsWith("/resources/security-operations-guides/") &&
      pathname !== "/resources/security-operations-guides") ||
    (pathname.startsWith("/ressources/comparisons/") &&
      pathname !== "/ressources/comparisons") ||
    (pathname.startsWith("/resources/comparisons/") &&
      pathname !== "/resources/comparisons");

  // Pages with a white background (nav starts light instead of dark).
  const whiteBackgroundRoutes = ["/contact"];
  const isWhiteBackgroundPage =
    whiteBackgroundRoutes.includes(pathname) ||
    (pathname.startsWith("/resources/security-operations-guides/") &&
      pathname !== "/resources/security-operations-guides") ||
    (pathname.startsWith("/ressources/comparisons/") &&
      pathname !== "/ressources/comparisons") ||
    (pathname.startsWith("/resources/comparisons/") &&
      pathname !== "/resources/comparisons");

  const productMenuRef = useRef(null);
  const resourcesMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        productMenuRef.current &&
        !productMenuRef.current.contains(event.target)
      ) {
        setProductMenuOpen(false);
      }
      if (
        resourcesMenuRef.current &&
        !resourcesMenuRef.current.contains(event.target)
      ) {
        setResourcesMenuOpen(false);
      }
    }
    if (productMenuOpen || resourcesMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [productMenuOpen, resourcesMenuOpen]);

  // Set initial navigation state based on page background.
  useEffect(() => {
    if (isWhiteBackgroundPage) {
      setNavState({
        bg: "bg-white",
        text: "text-gray-700",
        linkText: "text-gray-700",
        linkHover: "hover:bg-gray-100 hover:text-black",
        logo: logoDark,
        container: "bg-gray-25 border border-gray-100",
      });
      setHasScrolled(true);
    } else {
      setNavState({
        bg: "bg-black",
        text: "text-gray-200",
        linkText: "text-gray-700",
        linkHover: "hover:bg-gray-100 hover:text-black",
        logo: logoLight,
        container: "bg-gray-50 border border-gray-500",
      });
      setHasScrolled(false);
    }
  }, [isWhiteBackgroundPage]);

  // Change navigation appearance on scroll.
  useEffect(() => {
    let ticking = false;
    let currentScrolled = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 0;
          if (scrolled !== currentScrolled) {
            currentScrolled = scrolled;
            if (scrolled) {
              setNavState({
                bg: "bg-white",
                text: "text-gray-700",
                linkText: "text-gray-700",
                linkHover: "hover:bg-gray-100 hover:text-black",
                logo: logoDark,
                container: "bg-gray-25 border border-gray-100",
              });
              setHasScrolled(true);
            } else {
              if (!isWhiteBackgroundPage) {
                setNavState({
                  bg: "bg-black",
                  text: "text-gray-200",
                  linkText: "text-gray-700",
                  linkHover: "hover:bg-gray-100 hover:text-black",
                  logo: logoLight,
                  container: "bg-gray-50 border border-gray-500",
                });
                setHasScrolled(false);
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isWhiteBackgroundPage]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  // Update body background color based on page background.
  useEffect(() => {
    if (isWhiteBackgroundPage) {
      document.body.style.backgroundColor = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#000000";
    }
    return () => {
      document.body.style.backgroundColor = "#000000";
    };
  }, [isWhiteBackgroundPage]);

  const isActive = (path) => pathname === path;

  return (
    <nav
      className={`w-full fixed top-0 py-4 z-10 ${
        hasScrolled ? "transition duration-300" : ""
      } ${navState.bg} ${navState.text}`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="md:w-40 lg:w-64 sm:w-48 flex justify-start flex-shrink-0">
          <a
            href="/"
            onClick={() => trackLinkClick("Logo", "/", "navigation")}
          >
            <img
              src={imgSrc(navState.logo)}
              alt="Logo"
              width="175"
              className="h-12 hover:opacity-80 transition-opacity duration-150 ease-in-out"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-grow items-center justify-center">
          <div
            className={`inline-flex items-center space-x-2 px-1 py-1 rounded-lg shadow-md ${navState.container}`}
          >
            {/* Product Menu */}
            <div className="relative" ref={productMenuRef}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setProductMenuOpen(!productMenuOpen);
                }}
                className={`md:px-2 lg:px-3 py-1 text-xsm font-medium tracking-wide rounded-md transition-colors duration-150 ease-in-out whitespace-nowrap ${
                  navState.linkText
                } ${navState.linkHover} ${
                  isProductActive || productMenuOpen ? "bg-gray-100" : ""
                }`}
              >
                Product <ChevronDownIcon className="h-3 w-3 inline ml-0.5" />
              </button>

              {productMenuOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 py-3 flex rounded-md shadow-lg bg-white z-20 min-w-max border border-gray-100">
                  <div className="whitespace-nowrap">
                    <a
                      href="/mobile-guard"
                      onClick={() =>
                        trackLinkClick(
                          "Mobile guard",
                          "/mobile-guard",
                          "navigation_dropdown"
                        )
                      }
                      className="flex items-center px-2 py-1 mb-2 text-xsm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out"
                    >
                      <DevicePhoneMobileIcon className="mr-2 h-5 w-5" />
                      Mobile guard
                    </a>
                    <a
                      href="/incident-management"
                      onClick={() =>
                        trackLinkClick(
                          "Incident management",
                          "/incident-management",
                          "navigation_dropdown"
                        )
                      }
                      className="flex items-center px-2 py-1 mb-2 text-xsm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out"
                    >
                      <FlagIcon className="mr-2 h-5 w-5" />
                      Incident management
                    </a>
                    <a
                      href="/security-reporting"
                      onClick={() =>
                        trackLinkClick(
                          "Security reporting",
                          "/security-reporting",
                          "navigation_dropdown"
                        )
                      }
                      className="flex items-center px-2 py-1 mb-2 text-xsm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out"
                    >
                      <ClipboardDocumentCheckIcon className="mr-2 h-5 w-5" />
                      Security reporting
                    </a>
                    <a
                      href="/scheduling"
                      onClick={() =>
                        trackLinkClick(
                          "Guard scheduling",
                          "/scheduling",
                          "navigation_dropdown"
                        )
                      }
                      className="flex items-center px-2 py-1 text-xsm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out"
                    >
                      <CalendarDaysIcon className="mr-2 h-5 w-5" />
                      Guard scheduling
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Pricing */}
            <a
              href="/pricing"
              onClick={() => trackLinkClick("Pricing", "/pricing", "navigation")}
              className={`md:px-2 lg:px-3 py-1 text-xsm font-medium rounded-md transition-colors duration-150 ease-in-out whitespace-nowrap ${
                navState.linkText
              } ${navState.linkHover} ${
                isActive("/pricing") ? "bg-gray-100" : ""
              }`}
            >
              Pricing
            </a>

            {/* Resources Menu */}
            <div className="relative" ref={resourcesMenuRef}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setResourcesMenuOpen(!resourcesMenuOpen);
                }}
                className={`md:px-2 lg:px-3 py-1 text-xsm font-medium rounded-md transition-colors duration-150 ease-in-out whitespace-nowrap ${
                  navState.linkText
                } ${navState.linkHover} ${
                  isResourcesActive || resourcesMenuOpen ? "bg-gray-100" : ""
                }`}
              >
                Resources <ChevronDownIcon className="h-3 w-3 inline ml-0.5" />
              </button>

              {resourcesMenuOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 py-3 flex rounded-md shadow-lg bg-white z-20 min-w-max border border-gray-100">
                  <div className="whitespace-nowrap">
                    <a
                      href="/resources/security-operations-guides"
                      onClick={() =>
                        trackLinkClick(
                          "Security operations guides",
                          "/resources/security-operations-guides",
                          "navigation_dropdown"
                        )
                      }
                      className="flex items-center px-2 py-1 text-xsm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out"
                    >
                      <BookOpenIcon className="mr-2 h-5 w-5" />
                      Security operations guides
                    </a>
                    <a
                      href="/ressources/comparisons"
                      onClick={() =>
                        trackLinkClick(
                          "Comparisons",
                          "/ressources/comparisons",
                          "navigation_dropdown"
                        )
                      }
                      className="flex items-center px-2 py-1 text-xsm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out"
                    >
                      <ScaleIcon className="mr-2 h-5 w-5" />
                      Comparisons
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/contact"
              onClick={() => trackLinkClick("Contact", "/contact", "navigation")}
              className={`md:px-2 lg:px-3 py-1 text-xsm font-medium rounded-md transition-colors duration-150 ease-in-out whitespace-nowrap ${
                navState.linkText
              } ${navState.linkHover} ${
                isActive("/contact") ? "bg-gray-100" : ""
              }`}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="sm:hidden md:flex justify-end items-center space-x-2 lg:space-x-3 flex-shrink-0">
          <a
            href={loginUrl()}
            onClick={() => trackExternalLink(loginUrl(), "Login")}
            className={`block mr-2 lg:mr-3 px-4 lg:px-6 py-2 text-xsm font-medium hover:text-opacity-85 transition duration-150 ease-in-out whitespace-nowrap ${navState.text}`}
          >
            Login
          </a>
          <a
            href={registerUrl()}
            onClick={() => {
              trackExternalLink(registerUrl(), "Sign up");
              trackEvent("cta_signup", "conversion", "navigation_header");
            }}
            className="block px-4 lg:px-6 py-2 rounded-lg text-xsm font-medium text-white hover:text-gray-50 bg-brand-primary hover:bg-opacity-85 transition duration-150 ease-in-out whitespace-nowrap"
          >
            Sign up
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <a
            href={registerUrl()}
            onClick={() => {
              trackExternalLink(registerUrl(), "Sign up");
              trackEvent("cta_signup", "conversion", "navigation_mobile_header");
            }}
            className="block w-full text-left px-3 py-2 mr-3 rounded-lg text-base font-medium text-white hover:text-gray-50 hover:cursor-pointer bg-brand-primary hover:bg-opacity-85 transition duration-150 ease-in-out"
          >
            Sign up
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${navState.text} focus:outline-none`}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden fixed top-0 inset-0 ${navState.bg} ${navState.text} px-4`}
        >
          <div className="pt-4">
            <div className="flex justify-between items-center">
              <a
                href="/"
                onClick={() => trackLinkClick("Logo", "/", "mobile_menu")}
              >
                <img src={imgSrc(navState.logo)} alt="Logo" width="225" className="h-12" />
              </a>
              <button
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-base font-medium"
              >
                <XMarkIcon
                  className={`h-6 w-6 hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
                />
              </button>
            </div>
          </div>
          <div className="space-y-6 pt-6">
            <a
              href="/mobile-guard"
              onClick={() =>
                trackLinkClick("Mobile guard", "/mobile-guard", "mobile_menu")
              }
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
            >
              Mobile guard
            </a>
            <a
              href="/incident-management"
              onClick={() =>
                trackLinkClick(
                  "Incident management",
                  "/incident-management",
                  "mobile_menu"
                )
              }
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
            >
              Incident management
            </a>
            <a
              href="/security-reporting"
              onClick={() =>
                trackLinkClick(
                  "Security reporting",
                  "/security-reporting",
                  "mobile_menu"
                )
              }
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
            >
              Security reporting
            </a>
            <a
              href="/scheduling"
              onClick={() =>
                trackLinkClick("Guard scheduling", "/scheduling", "mobile_menu")
              }
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
            >
              Guard scheduling
            </a>
            <a
              href="/pricing"
              onClick={() =>
                trackLinkClick("Pricing", "/pricing", "mobile_menu")
              }
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
            >
              Pricing
            </a>
            <a
              href="/contact"
              onClick={() =>
                trackLinkClick("Contact", "/contact", "mobile_menu")
              }
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
            >
              Contact
            </a>
            <div className="border-t border-gray-500 pt-6 flex justify-start space-x-4">
              <a
                href={loginUrl()}
                onClick={() => trackExternalLink(loginUrl(), "Sign in")}
                className={`block text-left px-8 py-3 rounded-lg text-base font-medium hover:text-opacity-65 hover:cursor-pointer transition duration-150 ease-in-out ${navState.text}`}
              >
                Sign in
              </a>
              <a
                href={registerUrl()}
                onClick={() => {
                  trackExternalLink(registerUrl(), "Sign up");
                  trackEvent("cta_signup", "conversion", "mobile_menu");
                }}
                className="block text-left px-8 py-3 rounded-lg text-base font-medium text-white hover:text-gray-50 bg-brand-primary hover:bg-opacity-85 transition duration-150 ease-in-out hover:cursor-pointer"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
