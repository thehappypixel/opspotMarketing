import React from "react";
import Navigation from "../../components/navigation";
import MobileApps from "./mobileApps";
import ImageTextBlock from "../../components/imageTextBlock";
import GuardImageTextBlockContent from "../../content/guardImageTextBlockContent";
import mobileImage from "../../assets/images/screen-mobile.png";
import DemoSignup from "../../components/demoSignup";
import Footer from "../../components/footer";
import Button from "../../components/button";

function MobileGuardScreen() {
  return (
    <>
      <Navigation />
      <div className="mt-24 py-16 sm:px-4 lg:px-24 w-full bg-black">
        <h2 className="text-xl leading-tight font-bold text-white text-center">
          Mobile guard & patrol
        </h2>
        <div className="flex justify-center">
          <p className="pt-6 mb-6 text-md tracking-wider leading-snug font-normal text-white text-center md:w-3/4 lg:w-1/2">
            Equip your mobile guards with real-time, on-the-go security
            management. Cover every corner, every time.
          </p>
        </div>
        <div className="py-4 mb-8 flex justify-center">
          <Button
            text="Get started for free"
            icon={true}
            iconPosition="right"
            density="tight"
            link={
              process.env.NODE_ENV === "development"
                ? `http://localhost:3000/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`
                : `https://app.opspot.io/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`
            }
          />
        </div>
        <div>
          <img src={mobileImage} alt="Mobile guard and operations screenshot" />
        </div>
      </div>
      <div className="bg-white flex flex-col" id="features">
        {GuardImageTextBlockContent.map((block) => (
          <ImageTextBlock
            key={block.header}
            firstItem={block.firstItem}
            header={block.header}
            body={block.body}
            ctaLink={block.ctaLink}
            ctaText={block.ctaText}
            imageUrl={block.imageUrl}
            listItems={block.listItems}
          />
        ))}
      </div>
      <MobileApps />
      <DemoSignup />
      <Footer />
    </>
  );
}

export default MobileGuardScreen;
