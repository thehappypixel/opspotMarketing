import React from "react";

const ImageTextBlock = ({ firstItem, header, body, imageUrl }) => {
  return (
    <div className="w-full flex overflow-hidden">
      <div
        className={`w-1/2 flex flex-col justify-center p-12 ${
          firstItem !== "text" ? "order-2" : ""
        }`}
      >
        <h2 className="text-lg leading-snug font-bold mb-4">{header}</h2>
        <p className="text-md mb-4">{body}</p>
        <div className="flex space-x-4">
          {/* Replace with your actual meta data items */}
          <div className="flex items-center space-x-2">
            <span>📅</span>
            <span>Date</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>🕒</span>
            <span>Time</span>
          </div>
        </div>
      </div>
      <div
        className={`w-1/2 flex-shrink-0 relative ${
          firstItem !== "text" ? "order-1" : ""
        }`}
      >
        <img
          src={imageUrl}
          alt={header}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ImageTextBlock;
