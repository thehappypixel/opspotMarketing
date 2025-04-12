import React from "react";
import Navigation from "../../components/navigation";
import ImageTextBlock from "../../components/imageTextBlock";
import IncidentManagementImageTextBlockContent from "../../content/incidentManagementImageTextBlockContent";
import incidentImage from "../../assets/images/incident-management-screen.png";
import Footer from "../../components/footer";
import DemoSignup from "../../components/demoSignup";
import Button from "../../components/button";

function IncidentManagementScreen() {
  return (
    <>
      <Navigation />
      <div className="mt-24 py-16 sm:px-4 lg:px-24 w-full bg-black">
        <h2 className="text-xl leading-tight font-bold text-white text-center">
          Incident management
        </h2>
        <div className="flex justify-center">
          <p className="pt-6 mb-6 text-md tracking-wider leading-snug font-normal text-white text-center md:w-3/4 lg:w-1/2 ">
            Empower your security team with fast, accurate field incident
            reporting. No more delays.
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
            src={incidentImage}
            alt="Incident reporting screenshot"
            className="w-3/4"
          />
        </div>
      </div>
      <div className="bg-white flex flex-col">
        {IncidentManagementImageTextBlockContent.map((block) => (
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
