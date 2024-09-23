import React, { useEffect, useState } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import Navigation from "./components/navigation";
import Tabs from "./components/tabs";
import ImageTextBlock from "./components/imageTextBlock";
import ImageTextBlockContent from "./content/imageTextBlockContent";
import Pricing from "./components/pricing";
import schedulingImage from "./assets/images/scheduling.png";

function App() {
  const { createOrg } = useKindeAuth();

  useEffect(() => {
    console.log("Client ID", process.env.REACT_APP_KINDE_DOMAIN);
  }, []);

  return (
    <>
      <div className="min-h-screen flex items-center flex-col" id="top">
        <Navigation />
        <div className="header bg-black sm:p-4 w-full flex-grow flex flex-col items-center justify-center">
          <div className="pt-32 max-w-2xl">
            <h1 className="sm:text-xl md:text-xxl lg:text-xxl leading-tight tracking-wider font-bold text-white text-center">
              Intuitive. Efficient. Security Operations.
            </h1>
            <p className="py-6 text-md tracking-wider leading-normal font-normal text-white text-center">
              Affordable yet powerful, designed to meet the needs of small and
              mid-size security teams
            </p>
            <div className="py-2 flex justify-center">
              <a
                onClick={() => createOrg()}
                className="block px-12 py-4 rounded-lg text-sm font-medium text-white hover:text-gray-50 bg-brand-primary hover:bg-opacity-85 transition duration-150 ease-in-out hover:cursor-pointer"
              >
                Start free with email
              </a>
            </div>
          </div>
          <Tabs />
        </div>
      </div>
      <div className="bg-white flex flex-col" id="features">
        {ImageTextBlockContent.map((block) => (
          <ImageTextBlock
            key={block.header}
            firstItem={block.firstItem}
            header={block.header}
            body={block.body}
            imageUrl={block.imageUrl}
            listItems={block.listItems}
          />
        ))}

        <div className="p-4 mt-6 mb-16 bg-white rounded-lg flex flex-col items-center justify-center w-full">
          <h2 className="text-xl leading-tight font-bold text-center">
            Scheduling
          </h2>
          <p className="pb-6 text-sm">(coming soon)</p>
          <div className="w-full flex justify-center">
            <div className="bg-black rounded-lg w-3/4">
              <img
                src={schedulingImage}
                alt="Scheduling"
                className="w-full h-auto object-cover rounded-lg"
                style={{ maxHeight: "100%", display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Pricing />
    </>
  );
}

export default App;
