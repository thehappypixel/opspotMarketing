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
  headerClassName = "text-lg leading-tight font-bold mb-6",
  bodyClassName = "text-sm mb-6 text-gray-500 leading-relaxed",
}) => {
  return (
    <div className="py-12 w-full">
      <div className="md:max-w-6xl md:mx-auto md:px-4 flex flex-col lg:flex-row overflow-hidden">
        <div
          className={`flex-1 flex flex-col justify-center p-12 ${
            firstItem !== "text" ? "order-2" : "order-1"
          }`}
        >
          <h2 className={headerClassName}>{header}</h2>
          <p className={bodyClassName}>{body}</p>
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
            // Must not be a <p>: the Button renders a block <div> inside its <a>,
            // and the HTML parser auto-closes a <p> at that <div>, splitting the
            // anchor and dropping the flex wrapper (breaks icon alignment).
            <div>
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
            </div>
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
