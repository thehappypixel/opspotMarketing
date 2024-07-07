import React, { useEffect, useState } from "react";
import Navigation from "./components/navigation";
import Tabs from "./components/tabs";

import ImageTextBlock from "./components/imageTextBlock";
import ImageTextBlockContent from "./content/imageTextBlockContent";

import Pricing from "./components/pricing";

function App() {
  return (
    <>
      <div className="min-h-screen flex items-center flex-col">
        <Navigation />
        <div className="header bg-black w-full flex-grow flex flex-col items-center justify-center">
          <div className="pt-32 max-w-2xl">
            <h1 className="text-xlg leading-tight tracking-wider font-bold text-white text-center ">
              Security re-defined with simplicity
            </h1>
            <p className="py-6 text-md tracking-wider leading-snug font-normal text-white text-center ">
              Something about small business and no frills but not cheap -
              affordabe
            </p>
            <div className="py-2 flex justify-center">
              <button className="px-12 py-4 bg-brand-primary text-white rounded-lg text-sm font-medium hover:bg-gray-600">
                Start free with email
              </button>
            </div>
          </div>
          <Tabs />
        </div>
      </div>
      <div className="bg-white py-6 flex flex-col">
        {ImageTextBlockContent.map((block) => (
          <ImageTextBlock
            firstItem={block.firstItem}
            header={block.header}
            body={block.body}
            imageUrl={block.imageUrl}
            listItems={block.listItems}
          />
        ))}
      </div>
      <Pricing />
    </>
  );
}

export default App;
