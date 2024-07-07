import React, { useEffect, useState } from "react";
import logoLight from "../assets/images/opspot-logo-light.svg";
import logoDark from "../assets/images/opspot-logo-dark.svg";

const Navigation = () => {
  const [navState, setNavState] = useState({
    bg: "bg-black",
    text: "text-white",
  });

  const [hasScrolled, setHasScrolled] = useState(false);

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

  return (
    <nav
      className={`w-full fixed top-0 py-4 z-10 ${
        hasScrolled ? "transition duration-300" : ""
      } ${navState.bg + " " + navState.text}`}
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <img src={navState.logo} alt="Logo" width="225" />

          <div className="flex space-x-4">
            <a href="#" className="px-3 py-2 text-sm font-medium">
              Features
            </a>
            <a href="#" className="px-3 py-2 text-sm font-medium">
              Pricing
            </a>
            <a href="#" className="px-3 py-2 text-sm font-medium">
              Resources
            </a>
          </div>

          <div className="">
            <button className="mr-3 px-6 py-2 text-xxsm font-medium">
              Sign in
            </button>
            <button className="px-6 py-2 bg-brand-primary text-white rounded-lg text-xxsm font-medium hover:bg-gray-600">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
