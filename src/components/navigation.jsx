import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
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
  DocumentTextIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import {
  trackLinkClick,
  trackExternalLink,
  trackEvent,
} from "../utils/analytics";

const Navigation = () => {
  const location = useLocation();
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
  const { login } = useKindeAuth();

  // List of routes that should mark the Product nav item as active.
  const productRoutes = [
    "/mobile-guard",
    "/incident-management",
    "/security-reporting",
    "/scheduling",
  ];
  const isProductActive = productRoutes.includes(location.pathname);

  // List of routes that should mark the Resources nav item as active.
  const resourcesRoutes = [
    "/resources/security-operations-guides",
    "/resources/how-to-articles",
    "/resources/walkthroughs",
  ];
  const isResourcesActive = resourcesRoutes.includes(location.pathname);

  // Check if current route should have white background (default is black)
  // Individual guide articles have white background, listing page has black
  const whiteBackgroundRoutes = ["/contact"];
  const isWhiteBackgroundPage =
    whiteBackgroundRoutes.includes(location.pathname) ||
    (location.pathname.startsWith("/resources/security-operations-guides/") &&
      location.pathname !== "/resources/security-operations-guides");

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

  // Set initial navigation state based on page background
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
              // Only revert to black if not a white background page
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

  // Update body background color based on page background
  useEffect(() => {
    if (isWhiteBackgroundPage) {
      document.body.style.backgroundColor = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#000000";
    }

    // Cleanup function to reset on unmount
    return () => {
      document.body.style.backgroundColor = "#000000";
    };
  }, [isWhiteBackgroundPage]);

  // Helper to check if a route is active based on the pathname.
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`w-full fixed top-0 py-4 z-10 ${
        hasScrolled ? "transition duration-300" : ""
      } ${navState.bg} ${navState.text}`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="md:w-40 lg:w-64 sm:w-48 flex justify-start flex-shrink-0">
          <Link
            to="/"
            onClick={() => {
              setMenuOpen(false);
              setProductMenuOpen(false);
              setResourcesMenuOpen(false);
              trackLinkClick("Logo", "/", "navigation");
            }}
            reloadDocument
          >
            <img
              src={navState.logo}
              alt="Logo"
              width="175"
              className="h-12 hover:opacity-80 transition-opacity duration-150 ease-in-out"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        {/* Desktop Navigation Container */}
        <div className="hidden md:flex flex-grow items-center justify-center">
          {/* Navigation Menu */}
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

              {/* Dropdown Menu */}
              {productMenuOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 py-3 flex rounded-md shadow-lg bg-white z-20 min-w-max border border-gray-100">
                  <div className="whitespace-nowrap">
                    <Link
                      to="/mobile-guard"
                      onClick={() => {
                        setProductMenuOpen(false);
                        trackLinkClick(
                          "Mobile guard",
                          "/mobile-guard",
                          "navigation_dropdown"
                        );
                      }}
                      className="flex items-center px-2 py-1 mb-2 text-xsm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out"
                      reloadDocument
                    >
                      <DevicePhoneMobileIcon className="mr-2 h-5 w-5" />
                      Mobile guard
                    </Link>
                    <Link
                      to="/incident-management"
                      onClick={() => {
                        setProductMenuOpen(false);
                        trackLinkClick(
                          "Incident management",
                          "/incident-management",
                          "navigation_dropdown"
                        );
                      }}
                      className="flex items-center px-2 py-1 mb-2 text-xsm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out"
                      reloadDocument
                    >
                      <FlagIcon className="mr-2 h-5 w-5" />
                      Incident management
                    </Link>
                    <Link
                      to="/security-reporting"
                      onClick={() => {
                        setProductMenuOpen(false);
                        trackLinkClick(
                          "Security reporting",
                          "/security-reporting",
                          "navigation_dropdown"
                        );
                      }}
                      className="flex items-center px-2 py-1 mb-2 text-xsm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out"
                      reloadDocument
                    >
                      <ClipboardDocumentCheckIcon className="mr-2 h-5 w-5" />
                      Security reporting
                    </Link>
                    <Link
                      to="/scheduling"
                      onClick={() => {
                        setProductMenuOpen(false);
                        trackLinkClick(
                          "Guard Scheduling",
                          "/scheduling",
                          "navigation_dropdown"
                        );
                      }}
                      className="flex items-center px-2 py-1 text-xsm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out"
                      reloadDocument
                    >
                      <CalendarDaysIcon className="mr-2 h-5 w-5" />
                      Guard Scheduling
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Pricing */}
            <Link
              to="/pricing"
              onClick={() =>
                trackLinkClick("Pricing", "/pricing", "navigation")
              }
              className={`md:px-2 lg:px-3 py-1 text-xsm font-medium rounded-md transition-colors duration-150 ease-in-out whitespace-nowrap ${
                navState.linkText
              } ${navState.linkHover} ${
                isActive("/pricing") ? "bg-gray-100" : ""
              }`}
              reloadDocument
            >
              Pricing
            </Link>

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
                    <Link
                      to="/resources/security-operations-guides"
                      onClick={() => {
                        setResourcesMenuOpen(false);
                        trackLinkClick(
                          "Security operations guides",
                          "/resources/security-operations-guides",
                          "navigation_dropdown"
                        );
                      }}
                      // className="flex items-center px-2 py-1 mb-2 text-xsm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out"
                      className="flex items-center px-2 py-1 text-xsm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out"
                      reloadDocument
                    >
                      <BookOpenIcon className="mr-2 h-5 w-5" />
                      Security operations guides
                    </Link>
                    {/* <Link
                      to="/resources/how-to-articles"
                      onClick={() => {
                        setResourcesMenuOpen(false);
                        trackLinkClick(
                          "How to articles",
                          "/resources/how-to-articles",
                          "navigation_dropdown"
                        );
                      }}
                      className="flex items-center px-2 py-1 mb-2 text-xsm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out"
                      reloadDocument
                    >
                      <DocumentTextIcon className="mr-2 h-5 w-5" />
                      How to articles
                    </Link> */}
                    {/* <Link
                      to="/resources/walkthroughs"
                      onClick={() => {
                        setResourcesMenuOpen(false);
                        trackLinkClick(
                          "Walkthroughs",
                          "/resources/walkthroughs",
                          "navigation_dropdown"
                        );
                      }}
                      className="flex items-center px-2 py-1 text-xsm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out"
                      reloadDocument
                    >
                      <PlayIcon className="mr-2 h-5 w-5" />
                      Walkthroughs
                    </Link> */}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={() =>
                trackLinkClick("Contact", "/contact", "navigation")
              }
              className={`md:px-2 lg:px-3 py-1 text-xsm font-medium rounded-md transition-colors duration-150 ease-in-out whitespace-nowrap ${
                navState.linkText
              } ${navState.linkHover} ${
                isActive("/contact") ? "bg-gray-100" : ""
              }`}
              reloadDocument
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="sm:hidden md:flex justify-end items-center space-x-2 lg:space-x-3 flex-shrink-0">
          <a
            href={`${
              process.env.REACT_APP_DOMAIN || "http://localhost:3000"
            }/auth/login/`}
            onClick={() => {
              const loginUrl = `${
                process.env.REACT_APP_DOMAIN || "http://localhost:3000"
              }/auth/login/`;
              trackExternalLink(loginUrl, "Login");
            }}
            className={`block mr-2 lg:mr-3 px-4 lg:px-6 py-2 text-xsm font-medium hover:text-opacity-85 transition duration-150 ease-in-out whitespace-nowrap ${navState.text}`}
          >
            Login
          </a>
          <a
            href={`${
              process.env.REACT_APP_DOMAIN || "http://localhost:3000"
            }/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`}
            onClick={() => {
              const signupUrl = `${
                process.env.REACT_APP_DOMAIN || "http://localhost:3000"
              }/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`;
              trackExternalLink(signupUrl, "Sign up");
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
            href={`${
              process.env.REACT_APP_DOMAIN || "http://localhost:3000"
            }/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`}
            onClick={() => {
              const signupUrl = `${
                process.env.REACT_APP_DOMAIN || "http://localhost:3000"
              }/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`;
              trackExternalLink(signupUrl, "Sign up");
              trackEvent(
                "cta_signup",
                "conversion",
                "navigation_mobile_header"
              );
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
              <Link
                to="/"
                onClick={() => {
                  setMenuOpen(false);
                  setProductMenuOpen(false);
                  setResourcesMenuOpen(false);
                  trackLinkClick("Logo", "/", "mobile_menu");
                }}
                reloadDocument
              >
                <img
                  src={navState.logo}
                  alt="Logo"
                  width="225"
                  className="h-12"
                />
              </Link>
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
            <Link
              to="/mobile-guard"
              onClick={() => {
                setMenuOpen(false);
                trackLinkClick("Mobile guard", "/mobile-guard", "mobile_menu");
              }}
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
              reloadDocument
            >
              Mobile guard
            </Link>
            <Link
              to="/incident-management"
              onClick={() => {
                setMenuOpen(false);
                trackLinkClick(
                  "Incident management",
                  "/incident-management",
                  "mobile_menu"
                );
              }}
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
              reloadDocument
            >
              Incident management
            </Link>
            <Link
              to="/security-reporting"
              onClick={() => {
                setMenuOpen(false);
                trackLinkClick(
                  "Security reporting",
                  "/security-reporting",
                  "mobile_menu"
                );
              }}
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
              reloadDocument
            >
              Security reporting
            </Link>
            <Link
              to="/scheduling"
              onClick={() => {
                setMenuOpen(false);
                trackLinkClick(
                  "Guard Scheduling",
                  "/scheduling",
                  "mobile_menu"
                );
              }}
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
              reloadDocument
            >
              Guard Scheduling
            </Link>
            {/* <Link
              to="/resources/security-operations-guides"
              onClick={() => {
                setMenuOpen(false);
                trackLinkClick("Security operations guides", "/resources/security-operations-guides", "mobile_menu");
              }}
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
              reloadDocument
            >
              Security operations guides
            </Link> */}
            {/* <Link
              to="/resources/how-to-articles"
              onClick={() => {
                setMenuOpen(false);
                trackLinkClick(
                  "How to articles",
                  "/resources/how-to-articles",
                  "mobile_menu"
                );
              }}
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
              reloadDocument
            >
              How to articles
            </Link>
            <Link
              to="/resources/walkthroughs"
              onClick={() => {
                setMenuOpen(false);
                trackLinkClick(
                  "Walkthroughs",
                  "/resources/walkthroughs",
                  "mobile_menu"
                );
              }}
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
              reloadDocument
            >
              Walkthroughs
            </Link> */}
            <Link
              to="/pricing"
              onClick={() => {
                setMenuOpen(false);
                trackLinkClick("Pricing", "/pricing", "mobile_menu");
              }}
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
              reloadDocument
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              onClick={() => {
                setMenuOpen(false);
                trackLinkClick("Contact", "/contact", "mobile_menu");
              }}
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
              reloadDocument
            >
              Contact
            </Link>
            {/* <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
            >
              About
            </Link> */}
            {/* <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
              reloadDocument
            >
              Contact
            </Link> */}
            <div className="border-t border-gray-500 pt-6 flex justify-start space-x-4">
              <a
                href={`${
                  process.env.REACT_APP_DOMAIN || "http://localhost:3000"
                }/auth/login/`}
                onClick={() => {
                  const loginUrl = `${
                    process.env.REACT_APP_DOMAIN || "http://localhost:3000"
                  }/auth/login/`;
                  trackExternalLink(loginUrl, "Sign in");
                }}
                className={`block text-left px-8 py-3 rounded-lg text-base font-medium hover:text-opacity-65 hover:cursor-pointer transition duration-150 ease-in-out ${navState.text}`}
              >
                Sign in
              </a>
              <a
                href={`${
                  process.env.REACT_APP_DOMAIN || "http://localhost:3000"
                }/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`}
                onClick={() => {
                  const signupUrl = `${
                    process.env.REACT_APP_DOMAIN || "http://localhost:3000"
                  }/auth/register/?priceId=${
                    process.env.REACT_APP_STARTER_PLAN
                  }`;
                  trackExternalLink(signupUrl, "Sign up");
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
