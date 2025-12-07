import React from "react";
import { Helmet } from "react-helmet-async";
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
  const siteUrl = process.env.REACT_APP_DOMAIN || "https://opspot.com";

  return (
    <>
      <Helmet>
        <title>
          Security Reporting Software - Real-time Activity Reports & Analytics |
          Opspot
        </title>
        <meta
          name="description"
          content="Real-time insights into patrols, incidents, and guard activity. Dynamic report filtering, comprehensive location tracking, and seamless PDF export. Professional security reporting all in one place."
        />
        <meta
          name="keywords"
          content="security reporting software, security activity reports, guard activity reporting, security analytics, patrol reports, incident reports, security reporting dashboard, PDF security reports"
        />
        <link rel="canonical" href={`${siteUrl}/security-reporting`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/security-reporting`} />
        <meta
          property="og:title"
          content="Security Reporting Software - Real-time Activity Reports & Analytics | Opspot"
        />
        <meta
          property="og:description"
          content="Real-time insights into patrols, incidents, and guard activity. Professional security reporting all in one place."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`${siteUrl}/security-reporting`}
        />
        <meta
          property="twitter:title"
          content="Security Reporting Software - Real-time Activity Reports & Analytics | Opspot"
        />
        <meta
          property="twitter:description"
          content="Real-time insights into patrols, incidents, and guard activity. Professional security reporting all in one place."
        />
      </Helmet>
      <Navigation />
      {/* <div className="mt-24 py-24 sm:px-4 lg:pr-0 lg:pl-32 w-full bg-black">
        <div className="flex flex-1 flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-left sm:px-6 lg:px-0">
            <h2 className="text-xl leading-tight font-bold text-white">
              Flexible security reporting
            </h2>
            <p className="pt-6 mb-12 text-md tracking-wider leading-snug font-normal text-white">
              Real-time insights into patrols, incidents, and guard activity—all in one place.
            </p>
            <div className="py-2">
              <div className="inline-block">
                <Button
                  text="Start free with email"
                  icon={true}
                  iconPosition="right"
                  density="tight"
                  link={`${process.env.REACT_APP_DOMAIN || 'http://localhost:3000'}/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`}
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
            Real-time insights into patrols, incidents, and guard activity. All
            in one place.
          </p>
        </div>
        <div className="py-4 mb-8 flex justify-center">
          <Button
            text="Get started for free"
            icon={true}
            iconPosition="right"
            density="tight"
            link={`${
              process.env.REACT_APP_DOMAIN || "http://localhost:3000"
            }/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`}
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
