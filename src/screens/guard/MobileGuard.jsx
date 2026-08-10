import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "../../components/navigation";
import MobileApps from "./mobileApps";
import ImageTextBlock from "../../components/imageTextBlock";
import GuardImageTextBlockContent from "../../content/guardImageTextBlockContent";
import mobileImage from "../../assets/images/screen-mobile.png";
import DemoSignup from "../../components/demoSignup";
import Footer from "../../components/footer";
import Button from "../../components/button";

function MobileGuardScreen() {
  const siteUrl = process.env.REACT_APP_SITE_URL || "https://opspot.io";

  return (
    <>
      <Helmet>
        <title>
          Mobile Guard & Patrol App - Security Guard Mobile Software | Opspot
        </title>
        <meta
          name="description"
          content="Empower your guards with simple, reliable mobile tools for patrols, tours, and real-time activity tracking. QR code checkpoints, NFC support, live GPS tracking, and automatic daily activity reports. All in one mobile guard app."
        />
        <meta
          name="keywords"
          content="mobile guard app, security guard mobile app, patrol app, guard patrol software, mobile security software, QR code checkpoints, GPS tracking guards, security guard clock in, daily activity reports"
        />
        <link rel="canonical" href={`${siteUrl}/mobile-guard`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/mobile-guard`} />
        <meta
          property="og:title"
          content="Mobile Guard & Patrol App - Security Guard Mobile Software | Opspot"
        />
        <meta
          property="og:description"
          content="Empower your guards with simple, reliable mobile tools for patrols, tours, and real-time activity tracking. All in one mobile guard app."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${siteUrl}/mobile-guard`} />
        <meta
          property="twitter:title"
          content="Mobile Guard & Patrol App - Security Guard Mobile Software | Opspot"
        />
        <meta
          property="twitter:description"
          content="Empower your guards with simple, reliable mobile tools for patrols, tours, and real-time activity tracking."
        />
      </Helmet>
      <Navigation />
      <div className="mt-24 pt-16 sm:px-4 lg:px-24 w-full bg-black">
        <h2 className="text-xl leading-tight font-bold text-white text-center">
          Mobile guard & patrol
        </h2>
        <div className="flex justify-center">
          <p className="pt-6 mb-6 text-md tracking-wider leading-snug font-normal text-white text-center md:w-3/4 lg:w-1/2">
            Empower your guards with simple, reliable mobile tools for patrols,
            tours, and real-time activity tracking. All in one app.
          </p>
        </div>
        <div className="py-4 mb-8 flex justify-center">
          <Button
            text="Get started for free"
            icon={true}
            iconPosition="right"
            density="tight"
            location="mobile_guard_hero"
            link={`${
              process.env.REACT_APP_DOMAIN || "http://localhost:3000"
            }/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`}
          />
        </div>
        <div>
          <img src={mobileImage} alt="Mobile guard and operations screenshot" />
        </div>
      </div>
      <div className="bg-white flex flex-col">
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
