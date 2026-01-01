import React from "react";
import logoMark from "../assets/images/logo-mark.svg";

export default function Footer() {
  return (
    <footer className="footer py-12 bg-white">
      <div className="flex flex-col items-center">
        <img src={logoMark} alt="Opspot Logo" className="h-8 mb-4" />
        <p className="text-gray-400 text-xsm text-center">
          Copyright Opspot Software Inc. 2026
        </p>
      </div>
    </footer>
  );
}
