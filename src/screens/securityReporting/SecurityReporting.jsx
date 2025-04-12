import React from "react";
import Navigation from "../../components/navigation";
import ImageTextBlock from "../../components/imageTextBlock";
import SecurityReportingImageTextBlockContent from "../../content/securityReportingImageTextBlockContent";
// import mobileGuardImage from "../../assets/images/mobile-guard.png";
import securityReportingScreen from "../../assets/images/secuity-reporting-screen.png";
import mobileImage from "../../assets/images/screen-mobile.png";
import Footer from "../../components/footer";
import Button from "../../components/button";
import DemoSignup from "../../components/demoSignup";

function IncidentManagementScreen() {
  return (
    <>
      <Navigation />
      {/* <div className="mt-24 py-24 sm:px-4 lg:pr-0 lg:pl-32 w-full bg-black">
        <div className="flex flex-1 flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-left sm:px-6 lg:px-0">
            <h2 className="text-xl leading-tight font-bold text-white">
              Flexible security reporting
            </h2>
            <p className="pt-6 mb-12 text-md tracking-wider leading-snug font-normal text-white">
              Showcase value and provide evidence to customers with reports that
              adapt to any need
            </p>
            <div className="py-2">
              <div className="inline-block">
                <Button
                  text="Start free with email"
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
          </div>
          <div className="lg:w-1/2 text-right overflow-hidden">
            <img
              src={securityReportingScreen}
              alt="Security reporting screenshot"
              className="object-cover w-full h-full transform translate-x-8"
            />
          </div>
        </div>
      </div> */}
      <div className="mt-24 py-16 sm:px-4 lg:px-24 w-full bg-black">
        <h2 className="text-xl leading-tight font-bold text-white text-center">
          Flexible security reporting
        </h2>
        <div className="flex justify-center">
          <p className="pt-6 mb-6 text-md tracking-wider leading-snug font-normal text-white text-center md:w-3/4 lg:w-1/2">
            Showcase value and provide evidence to customers with reports that
            adapt to any need.
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
        <div className="flex justify-center">
          <img
            src={securityReportingScreen}
            alt="Security reporting screenshot"
            className="w-3/4"
          />
        </div>
      </div>
      <div className="bg-white flex flex-col">
        {SecurityReportingImageTextBlockContent.map((block) => (
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

export default IncidentManagementScreen;
