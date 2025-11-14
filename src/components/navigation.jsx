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
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const [navState, setNavState] = useState({
    bg: "bg-black",
    text: "text-gray-200",
    link: "hover:bg-gray-100 text-gray-700 hover:text-black",
    logo: logoLight,
    container: "bg-gray-50 border border-gray-500",
  });
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const { login } = useKindeAuth();

  // List of routes that should mark the Product nav item as active.
  const productRoutes = [
    "/mobile-guard",
    "/incident-management",
    "/security-reporting",
  ];
  const isProductActive = productRoutes.includes(location.pathname);

  const productMenuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        productMenuRef.current &&
        !productMenuRef.current.contains(event.target)
      ) {
        setProductMenuOpen(false);
      }
    }
    if (productMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [productMenuOpen]);

  // Change navigation appearance on scroll.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavState({
          bg: "bg-white",
          text: "text-gray-700",
          link: "hover:bg-gray-100 hover:text-black",
          logo: logoDark,
          container: "bg-gray-25 border border-gray-100",
        });
        setHasScrolled(true);
      } else {
        setNavState({
          bg: "bg-black",
          text: "text-gray-200",
          link: "hover:bg-gray-100 text-gray-700 hover:text-black",
          logo: logoLight,
          container: "bg-gray-50 border border-gray-500",
        });
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  // Helper to check if a route is active based on the pathname.
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`w-full fixed top-0 py-4 z-10 ${
        hasScrolled ? "transition duration-300" : ""
      } ${navState.bg} ${navState.text}`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="md:w-64 sm:w-48 flex justify-start">
          <Link
            to="/"
            onClick={() => {
              setMenuOpen(false);
              setProductMenuOpen(false);
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
            className={`inline-flex items-center space-x-2 px-2 py-1 rounded-lg shadow-md ${navState.container}`}
          >
            {/* Product Menu */}
            <div className="relative" ref={productMenuRef}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setProductMenuOpen(!productMenuOpen);
                }}
                className={`md:px-2 lg:px-3 py-1 text-xsm font-medium rounded-md transition duration-150 ease-in-out ${
                  navState.link
                } ${isProductActive || productMenuOpen ? "bg-gray-100" : ""}`}
              >
                Product <ChevronDownIcon className="h-4 w-4 inline" />
              </button>

              {/* Dropdown Menu */}
              {productMenuOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 py-3 flex rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20 min-w-max border border-gray-300">
                  <div className="whitespace-nowrap">
                    <Link
                      to="/mobile-guard"
                      onClick={() => setProductMenuOpen(false)}
                      className="flex items-center px-2 py-1 mb-1 text-xsm text-gray-700 hover:text-black hover:bg-gray-100 rounded-md transition duration-150 ease-in-out"
                      reloadDocument
                    >
                      <DevicePhoneMobileIcon className="mr-2 h-5 w-5 text-gray-700" />
                      Mobile guard
                    </Link>
                    <Link
                      to="/incident-management"
                      onClick={() => setProductMenuOpen(false)}
                      className="flex items-center px-2 py-1 mb-1 text-xsm text-gray-700 hover:text-black hover:bg-gray-100 rounded-md transition duration-150 ease-in-out"
                      reloadDocument
                    >
                      <FlagIcon className="mr-2 h-5 w-5 text-gray-700" />
                      Incident management
                    </Link>
                    <Link
                      to="/security-reporting"
                      onClick={() => setProductMenuOpen(false)}
                      className="flex items-center px-2 py-1 text-xsm text-gray-700 hover:text-black hover:bg-gray-100 rounded-md transition duration-150 ease-in-out"
                      reloadDocument
                    >
                      <ClipboardDocumentCheckIcon className="mr-2 h-5 w-5 text-gray-700" />
                      Security reporting
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Pricing */}
            <Link
              to="/pricing"
              className={`md:px-2 lg:px-3 py-1 text-xsm font-medium rounded-md transition duration-150 ease-in-out ${
                navState.link
              } ${isActive("/pricing") ? "bg-gray-100" : ""}`}
              reloadDocument
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`md:px-2 lg:px-3 py-1 text-xsm font-medium rounded-md transition duration-150 ease-in-out ${
                navState.link
              } ${isActive("/contact") ? "bg-gray-100" : ""}`}
              reloadDocument
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="sm:hidden md:flex justify-end items-center space-x-3">
          <a
            href={
              process.env.NODE_ENV === "development"
                ? "http://localhost:3000/auth/login/"
                : "https://app.opspot.io/auth/login/"
            }
            className={`block mr-3 px-6 py-2 text-xxs font-medium hover:text-opacity-85 transition duration-150 ease-in-out ${navState.text}`}
          >
            Login
          </a>
          <a
            href={
              process.env.NODE_ENV === "development"
                ? `http://localhost:3000/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`
                : `https://app.opspot.io/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`
            }
            className="block px-6 py-2 rounded-lg text-xxs font-medium text-white hover:text-gray-50 bg-brand-primary hover:bg-opacity-85 transition duration-150 ease-in-out"
          >
            Sign up
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <a
            href={
              process.env.NODE_ENV === "development"
                ? `http://localhost:3000/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`
                : `https://app.opspot.io/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`
            }
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
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
              reloadDocument
            >
              Mobile guard
            </Link>
            <Link
              to="/incident-management"
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
              reloadDocument
            >
              Incident management
            </Link>
            <Link
              to="/security-reporting"
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
              reloadDocument
            >
              Security reporting
            </Link>
            <Link
              to="/pricing"
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 text-xsm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
              reloadDocument
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
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
                href={
                  process.env.NODE_ENV === "development"
                    ? "http://localhost:3000/auth/login/"
                    : "https://app.opspot.io/auth/login/"
                }
                className={`block text-left px-8 py-3 rounded-lg text-base font-medium hover:text-opacity-65 hover:cursor-pointer transition duration-150 ease-in-out ${navState.text}`}
              >
                Sign in
              </a>
              <a
                href={
                  process.env.NODE_ENV === "development"
                    ? `http://localhost:3000/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`
                    : `https://app.opspot.io/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`
                }
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
