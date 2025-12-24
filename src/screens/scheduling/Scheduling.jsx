import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "../../components/navigation";
import ImageTextBlock from "../../components/imageTextBlock";
import SchedulingImageTextBlockContent from "../../content/schedulingImageTextBlockContent";
import schedulingImage from "../../assets/images/opspot-scheduling-guard-software.png";
import Footer from "../../components/footer";
import DemoSignup from "../../components/demoSignup";
import Button from "../../components/button";

function SchedulingScreen() {
  const siteUrl = process.env.REACT_APP_DOMAIN || "https://opspot.com";

  return (
    <>
      <Helmet>
        <title>
          Security Guard Scheduling Software - Create & Manage Guard Schedules |
          Opspot
        </title>
        <meta
          name="description"
          content="Create guard schedules quickly and easily with Opspot's scheduling software. Build schedules with activities, checkpoints, and tours. Use templates to copy schedules week to week. Guards follow their scheduled activities in the mobile app."
        />
        <meta
          name="keywords"
          content="security guard scheduling software, guard schedule management, security workforce scheduling, guard shift scheduling, security operations scheduling, guard management scheduling, schedule templates for security guards"
        />
        <link rel="canonical" href={`${siteUrl}/scheduling`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/scheduling`} />
        <meta
          property="og:title"
          content="Security Guard Scheduling Software - Create & Manage Guard Schedules | Opspot"
        />
        <meta
          property="og:description"
          content="Create guard schedules quickly and easily. Build schedules with activities, checkpoints, and tours. Guards follow their scheduled activities in the mobile app."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${siteUrl}/scheduling`} />
        <meta
          property="twitter:title"
          content="Security Guard Scheduling Software - Create & Manage Guard Schedules | Opspot"
        />
        <meta
          property="twitter:description"
          content="Create guard schedules quickly and easily. Build schedules with activities, checkpoints, and tours."
        />
      </Helmet>
      <Navigation />
      <div className="mt-32 pt-16 sm:px-4 lg:px-14 w-full bg-black">
        <h1 className="sm:text-lg md:text-xl leading-tight font-bold text-white text-center md:w-3/4 mx-auto">
          Guard scheduling
        </h1>
        <div className="flex justify-center">
          <p className="pt-6 mb-6 text-md tracking-wider leading-snug font-normal text-white text-center md:w-3/4 lg:w-1/2">
            Create schedules quickly and easily. Build shifts with activities,
            checkpoints, and tours that your guards complete during their
            shifts.
          </p>
        </div>
        <div className="py-4 mb-8 flex justify-center">
          <Button
            text="Get started for free"
            icon={true}
            iconPosition="right"
            density="tight"
            location="scheduling_hero"
            link={`${
              process.env.REACT_APP_DOMAIN || "http://localhost:3000"
            }/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`}
          />
        </div>
        <div>
          <img
            src={schedulingImage}
            alt="Guard scheduling screenshot"
            className="lg:w-7/8 mx-auto"
          />
        </div>
      </div>
      <div className="bg-white flex flex-col">
        {SchedulingImageTextBlockContent.map((block) => (
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

export default SchedulingScreen;
