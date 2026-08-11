import React from "react";

const PillButton = ({ text, link, onClick }) => {
  return (
    <a
      href={link}
      onClick={onClick}
      className="pill-button inline-flex items-center px-4 py-2 rounded-full text-xsm font-medium text-white bg-brand-primary hover:bg-brand-200 transition duration-150 ease-in-out"
    >
      {text}
    </a>
  );
};

export default PillButton;
