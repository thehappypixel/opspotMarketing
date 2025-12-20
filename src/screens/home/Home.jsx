import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "../../components/navigation";
import HomeTabs from "./HomeTabs";
import ImageTextBlock from "../../components/imageTextBlock";
import HomeImageTextBlockContent from "../../content/homeImageTextBlockContent";
import Button from "../../components/button";
import Footer from "../../components/footer";
import DemoSignup from "../../components/demoSignup";
import mobileImage from "../../assets/images/opspot-security-guard-software.png";
import { trackLinkClick } from "../../utils/analytics";

function HomeScreen() {
  const siteUrl = process.env.REACT_APP_DOMAIN || "https://opspot.com";

  return (
    <>
      <Helmet>
        <title>
          Opspot - Simple, Powerful & Affordable Security Guard Management
          Software
        </title>
        <meta
          name="description"
          content="Manage your security guard team with Opspot's all-in-one platform. Track patrols, incidents, schedules, and GPS tracking. Simple, powerful, and affordable security operations software built for security teams."
        />
        <meta
          name="keywords"
          content="security guard management software, security operations software, guard patrol software, incident management, GPS tracking, security reporting, mobile guard app, security team management"
        />
        <link rel="canonical" href={`${siteUrl}/`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta
          property="og:title"
          content="Opspot - Simple, Powerful & Affordable Security Guard Management Software"
        />
        <meta
          property="og:description"
          content="Manage your security guard team with Opspot's all-in-one platform. Track patrols, incidents, schedules, and GPS tracking. Simple, powerful, and affordable security operations software."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${siteUrl}/`} />
        <meta
          property="twitter:title"
          content="Opspot - Simple, Powerful & Affordable Security Guard Management Software"
        />
        <meta
          property="twitter:description"
          content="Manage your security guard team with Opspot's all-in-one platform. Track patrols, incidents, schedules, and GPS tracking."
        />
      </Helmet>
      <Navigation />
      <div className="mt-32 pt-16 sm:px-4 lg:px-14 w-full bg-black">
        <h1 className="sm:text-lg md:text-xl leading-tight font-bold text-white text-center md:w-3/4 mx-auto">
          Simple, powerful & affordable tools to manage your security guard team
        </h1>
        <div className="flex justify-center">
          <p className="pt-6 mb-6 text-sm tracking-wider leading-relaxed font-normal text-white text-center md:w-1/2 mx-auto">
            Patrols, incidents, schedules, and GPS tracking all in one place,
            helping your team stay organized, responsive, and safe.
          </p>
        </div>
        <div className="py-4 mb-12 flex justify-center items-center gap-4">
          <Button
            text="Get started for free"
            icon={true}
            iconPosition="right"
            density="tight"
            location="hero"
            link={`${
              process.env.REACT_APP_DOMAIN || "http://localhost:3000"
            }/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`}
          />
          <Link
            to="/contact"
            onClick={() => trackLinkClick("Request a demo", "/contact", "hero")}
            className="text-white md:text-sm font-medium px-6 hover:text-opacity-80 transition duration-150 ease-in-out"
          >
            Request a demo
          </Link>
        </div>
        <div>
          <img
            src={mobileImage}
            alt="Opspot Security Guard Software Screenshot"
            className="lg:w-7/8 mx-auto"
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
