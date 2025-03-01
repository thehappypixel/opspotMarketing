import React from "react";
import Navigation from "../../components/navigation";
import ImageTextBlock from "../../components/imageTextBlock";
import IncidentManagementImageTextBlockContent from "../../content/incidentManagementImageTextBlockContent";
import incidentImage from "../../assets/images/incident-management-screen.png";
import Footer from "../../components/footer";
import DemoSignup from "../../components/demoSignup";

function IncidentManagementScreen() {
  return (
    <>
      <Navigation />
      <div className="mt-24 py-16 sm:px-4 lg:px-24 w-full bg-black">
        <h2 className="text-xl leading-tight font-bold text-white text-center">
          Incident management
        </h2>
        <p className="pt-6 mb-12 text-md tracking-wider leading-snug font-normal text-white text-center">
          Incident management subhead
        </p>
        <div className="flex justify-center">
          <img
            src={incidentImage}
            alt="Incident reporting screenshot"
            className="w-3/4"
          />
        </div>
      </div>
      <div className="bg-white flex flex-col" id="features">
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
