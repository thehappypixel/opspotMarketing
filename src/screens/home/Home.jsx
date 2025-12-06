import React from "react";
import { Link } from "react-router-dom";
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
      <div className="mt-32 py-16 sm:px-4 lg:px-14 w-full bg-black">
        <h1 className="text-xl leading-tight font-bold text-white text-center w-3/4 mx-auto">
          Simple, powerful & affordable tools to manage your security guard team
        </h1>
        <div className="flex justify-center">
          <p className="pt-6 mb-6 text-sm tracking-wider leading-relaxed font-normal text-white text-center w-1/2 mx-auto">
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
            link={`${
              process.env.REACT_APP_DOMAIN || "http://localhost:3000"
            }/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`}
          />
          <Link
            to="/contact"
            className="text-white text-sm font-medium px-6 hover:text-opacity-80 transition duration-150 ease-in-out"
          >
            Request a demo
          </Link>
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
