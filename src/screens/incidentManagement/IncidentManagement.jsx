import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "../../components/navigation";
import ImageTextBlock from "../../components/imageTextBlock";
import IncidentManagementImageTextBlockContent from "../../content/incidentManagementImageTextBlockContent";
import incidentImage from "../../assets/images/incident-management-screen.png";
import Footer from "../../components/footer";
import DemoSignup from "../../components/demoSignup";
import Button from "../../components/button";

function IncidentManagementScreen() {
  const siteUrl = process.env.REACT_APP_SITE_URL || "https://opspot.io";

  return (
    <>
      <Helmet>
        <title>
          Incident Management Software - Fast, Accurate Field Incident Reporting
          | Opspot
        </title>
        <meta
          name="description"
          content="Empower your security team with fast, accurate field incident reporting. Customizable reports with photos, GPS location tracking, and automatic time stamps. No more delays in incident documentation."
        />
        <meta
          name="keywords"
          content="incident management software, security incident reporting, field incident reporting, incident report software, security incident management, GPS incident tracking, incident documentation software"
        />
        <link rel="canonical" href={`${siteUrl}/incident-management`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/incident-management`} />
        <meta
          property="og:title"
          content="Incident Management Software - Fast, Accurate Field Incident Reporting | Opspot"
        />
        <meta
          property="og:description"
          content="Empower your security team with fast, accurate field incident reporting. Customizable reports with photos and GPS tracking."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`${siteUrl}/incident-management`}
        />
        <meta
          property="twitter:title"
          content="Incident Management Software - Fast, Accurate Field Incident Reporting | Opspot"
        />
        <meta
          property="twitter:description"
          content="Empower your security team with fast, accurate field incident reporting. Customizable reports with photos and GPS tracking."
        />
      </Helmet>
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
            location="incident_management_hero"
            link={`${
              process.env.REACT_APP_DOMAIN || "http://localhost:3000"
            }/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`}
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
