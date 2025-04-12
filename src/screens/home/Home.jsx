import React from "react";
import Navigation from "../../components/navigation";
import HomeTabs from "./HomeTabs";
import ImageTextBlock from "../../components/imageTextBlock";
import HomeImageTextBlockContent from "../../content/homeImageTextBlockContent";
import Button from "../../components/button";
import Footer from "../../components/footer";
import DemoSignup from "../../components/demoSignup";
import mobileImage from "../../assets/images/opspot-security-dashboard-mobile-guard.png";

function HomeScreen() {
  return (
    <>
      <Navigation />
      <div className="mt-24 py-16 sm:px-4 lg:px-24 w-full bg-black">
        <h1 className="text-xl leading-tight font-bold text-white text-center">
          Intuitive. Efficient.{" "}
          <span className="block">Security Operations.</span>
        </h1>
        <div className="flex justify-center">
          <p className="pt-6 mb-6 text-md tracking-wider leading-snug font-normal text-white text-center md:w-3/4 lg:w-1/2">
            Affordable yet powerful software to manage your security workforce.
            Opspot is designed to keep your guards safe and on task.
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
          <img
            src={mobileImage}
            alt="Mobile guard and operations screenshot"
            className="lg:w-3/4 mx-auto"
          />
        </div>
      </div>
      <div className="bg-white flex flex-col">
        {HomeImageTextBlockContent.map((block) => (
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
      <DemoSignup />
      <Footer />
    </>
  );
}

export default HomeScreen;
