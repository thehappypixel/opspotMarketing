import React from "react";

const ImageTextBlock = ({ firstItem, header, body, imageUrl, listItems }) => {
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
          <div className="flex space-x-4">
            {listItems.map((item) => (
              <div className="flex items-center space-x-2">
                <span>{item.icon}</span>
                <span className="text-xs">{item.text}</span>
              </div>
            ))}
          </div>
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
