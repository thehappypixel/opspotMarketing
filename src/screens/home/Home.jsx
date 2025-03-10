import React from "react";
import Navigation from "../../components/navigation";
import HomeTabs from "./HomeTabs";
import ImageTextBlock from "../../components/imageTextBlock";
import HomeImageTextBlockContent from "../../content/homeImageTextBlockContent";
import Button from "../../components/button";
import Footer from "../../components/footer";
import DemoSignup from "../../components/demoSignup";

function HomeScreen() {
  return (
    <>
      <div className="min-h-screen flex items-center flex-col">
        <Navigation />
        <div className="header bg-black sm:p-4 w-full flex-grow flex flex-col items-center justify-center">
          <div className="pt-32 max-w-2xl">
            <h1 className="sm:text-xl md:text-xxl lg:text-xxl leading-tight tracking-wider font-bold text-white text-center">
              Intuitive. Efficient. Security Operations.
            </h1>
            <p className="py-6 text-md tracking-wider leading-normal font-normal text-white text-center">
              Affordable yet powerful software to manage your security
              workforce. Opspot is designed to keep your guards safe and on
              task.
            </p>
            <div className="py-2 flex justify-center">
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
          </div>
          {/* <HomeTabs /> */}
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
