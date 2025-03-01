import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";

const ImageTextBlock = ({
  firstItem,
  header,
  body,
  ctaLink,
  ctaText,
  imageUrl,
  listItems,
}) => {
  return (
    <div className="py-16 w-full flex flex-col lg:flex-row overflow-hidden">
      <div
        className={`flex-1 flex flex-col justify-center p-12 ${
          firstItem !== "text" ? "order-2" : "order-1"
        }`}
      >
        <h2 className="text-lg leading-tight font-bold mb-6">{header}</h2>
        <p className="text-md mb-6">{body}</p>
        {listItems && (
          <div className="flex space-x-4 mb-6">
            {listItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span>{item.icon}</span>
                <span className="text-xs">{item.text}</span>
              </div>
            ))}
          </div>
        )}
        {ctaText && ctaLink && (
          <p>
            {/* text, link, type = "primary", // default to primary if no type is
            provided density = "default", icon = false, iconPosition = "left", */}
            <Button
              text={ctaText}
              link={ctaLink}
              type="subtle"
              icon="true"
              iconPosition="right"
            />
            {/* <Link
              to={ctaLink}
              className="text-sm text-brand-primary hover:text-brand-200 transition duration-150 ease-in-out"
            >
              {ctaText}
            </Link> */}
          </p>
        )}
      </div>
      <div
        className={`flex-1 relative ${
          firstItem !== "text" ? "order-1" : "order-2"
        }`}
      >
        <img
          src={imageUrl}
          alt={header}
          className="w-full h-full object-cover"
          style={{ maxHeight: "100%", display: "block" }}
        />
      </div>
    </div>
  );
};

export default ImageTextBlock;
