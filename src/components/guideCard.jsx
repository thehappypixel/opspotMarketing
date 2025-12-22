import React from "react";
import { Link } from "react-router-dom";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import PillButton from "./pillButton";

const GuideCard = ({ title, intro, image, imageAlt, link, readTime }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 ease-in-out group flex flex-col shadow-md hover:shadow-xl hover:-translate-y-2">
      <Link to={link} className="flex flex-col flex-1">
        <div className="aspect-video bg-white overflow-hidden">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          {/* Read time metadata */}
          {readTime && (
            <div className="flex items-center text-xs text-gray-400 mb-2">
              <BookOpenIcon className="h-4 w-4 mr-1.5" />
              <span>{readTime} min read</span>
            </div>
          )}
          <h2 className="text-sm font-bold tracking-tight leading-6 text-gray-600 mb-3">
            {title}
          </h2>
          <p className="text-xsm text-gray-600 leading-relaxed mb-0 flex-1">
            {intro}
          </p>
        </div>
      </Link>

      {/* Read more button */}
      <div className="px-6 pb-6">
        <PillButton text="Read guide" link={link} />
      </div>
    </div>
  );
};

export default GuideCard;
