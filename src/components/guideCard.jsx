import React from "react";
import { Link } from "react-router-dom";

const GuideCard = ({ title, intro, image, imageAlt, link }) => {
  return (
    <Link
      to={link}
      className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition duration-150 ease-in-out group flex flex-col"
    >
      <div className="aspect-video bg-gray-800 overflow-hidden">
        <img
          src={image}
          alt={imageAlt || title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex-1">
        <h2 className="text-md font-bold text-white mb-3 group-hover:text-gray-200 transition duration-150">
          {title}
        </h2>
        <p className="text-xsm text-gray-300 leading-relaxed">{intro}</p>
      </div>
    </Link>
  );
};

export default GuideCard;
