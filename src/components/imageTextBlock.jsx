import React from "react";
import Button from "./button";
import { imgSrc } from "../utils/img";

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
    <div className="py-12 w-full">
      <div className="md:max-w-6xl md:mx-auto md:px-4 flex flex-col lg:flex-row overflow-hidden">
        <div
          className={`flex-1 flex flex-col justify-center p-12 ${
            firstItem !== "text" ? "order-2" : "order-1"
          }`}
        >
          <h2 className="text-lg leading-tight font-bold mb-6">{header}</h2>
          <p className="text-md mb-6 text-gray-700 tracking-wide">{body}</p>
          {listItems && (
            <div className="flex space-x-4 mb-6">
              {listItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-gray-500">{item.icon}</span>
                  <span className="text-xs text-gray-700 tracking-wide">
                    {item.text}
                  </span>
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
                location={`image_text_block_${header
                  .toLowerCase()
                  .replace(/\s+/g, "_")}`}
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
          className={`flex-1 relative lg:max-w-md ${
            firstItem !== "text" ? "order-1" : "order-2"
          }`}
        >
          <img
            src={imgSrc(imageUrl)}
            alt={header}
            className="lg:w-full lg:h-full md:w-3/4 md:h-3/4 md:mx-auto object-contain"
            style={{ maxHeight: "100%", display: "block" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageTextBlock;
