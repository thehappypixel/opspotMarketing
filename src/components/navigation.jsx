import React, { useEffect, useState } from "react";
import logoLight from "../assets/images/opspot-logo-light.svg";
import logoDark from "../assets/images/opspot-logo-dark.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navigation = () => {
  const [navState, setNavState] = useState({
    bg: "bg-black",
    text: "text-white",
    logo: logoLight,
  });
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavState({
          bg: "bg-white",
          text: "text-black",
          logo: logoDark,
        });
        setHasScrolled(true);
      } else {
        setNavState({
          bg: "bg-black",
          text: "text-white",
          logo: logoLight,
        });
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <nav
      className={`w-full fixed top-0 py-4 z-10 ${
        hasScrolled ? "transition duration-300" : ""
      } ${navState.bg + " " + navState.text}`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#" onClick={() => setMenuOpen(false)}>
          <img src={navState.logo} alt="Logo" width="225" className="h-12" />
        </a>

        <div className="hidden md:flex space-x-4">
          <a
            href="#features"
            className={`px-3 py-2 text-sm font-medium hover:text-opacity-75 transition duration-150 ease-in-out ${navState.text}`}
          >
            Features
          </a>
          <a
            href="#pricing"
            className={`px-3 py-2 text-sm font-medium hover:text-opacity-75 transition duration-150 ease-in-out ${navState.text}`}
          >
            Pricing
          </a>
          {/* <a href="#" className="px-3 py-2 text-sm font-medium">
            Resources
          </a> */}
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <button
            className={`mr-3 px-6 py-2 text-xxs font-medium hover:text-opacity-85 transition duration-150 ease-in-out ${navState.text}`}
          >
            Sign in
          </button>
          <button className="px-6 py-2 rounded-lg text-xxs font-medium text-white hover:text-gray-50 bg-brand-primary hover:bg-opacity-85 transition duration-150 ease-in-out">
            Sign up
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button className="block w-full text-left px-3 py-2 mr-3 rounded-lg text-base font-medium text-white hover:text-gray-50 bg-brand-primary hover:bg-opacity-85 transition duration-150 ease-in-out">
            Sign up
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${navState.text} focus:outline-none`}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className={`md:hidden fixed top-0 inset-0 ${navState.bg} ${navState.text} px-4`}
        >
          <div className="pt-4">
            <div className="flex justify-between items-center">
              <a href="#" onClick={() => setMenuOpen(false)}>
                <img
                  src={navState.logo}
                  alt="Logo"
                  width="225"
                  className="h-12"
                />
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
              href="#features"
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 text-sm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 text-sm hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
            >
              Pricing
            </a>
            {/* <a href="#" className="block px-3 py-2 text-sm">
              Resources
            </a> */}
            <div className="border-t border-gray-500 pt-6 flex justify-start space-x-4">
              <button
                className={`block text-left px-8 py-3 rounded-lg text-base font-medium hover:text-opacity-65 transition duration-150 ease-in-out ${navState.text}`}
              >
                Sign in
              </button>
              <button className="block text-left px-8 py-3 rounded-lg text-base font-medium text-white hover:text-gray-50 bg-brand-primary hover:bg-opacity-85 transition duration-150 ease-in-out">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
