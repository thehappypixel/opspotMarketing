import React from "react";
import Button from "./button";
import simpleOpaque from "../assets/images/simple-opaque.png";
import { useBreakpoints } from "../utils/windowSizing";

export default function DemoSignup() {
  const { isSM, isMD, isLG } = useBreakpoints();

  let backgroundSize;
  let backgroundPosition;

  if (isSM) {
    backgroundSize = "150%";
    backgroundPosition = "130% center"; // Further right on mobile to crop properly
  } else if (isMD) {
    backgroundSize = "70%";
    backgroundPosition = "120% center";
  } else if (isLG) {
    backgroundSize = "50%";
    backgroundPosition = "120% center";
  } else {
    backgroundSize = "50%";
    backgroundPosition = "120% center";
  }

  return (
    <div
      className="flex flex-col justify-center items-center py-32 border-t-2 border-b-2 border-gray-200 bg-white"
      style={{
        backgroundImage: `url(${simpleOpaque})`,
        backgroundPosition,
        backgroundRepeat: "no-repeat",
        backgroundSize,
      }}
    >
      <div className="w-3/4">
        {/* <h2 className="text-lg leading-tight font-bold mb-6">{header}</h2>
      <p className="text-md mb-6 text-gray-700 tracking-wide">{body}</p> */}

        <h2 className="text-black text-lg pb-4 font-bold">
          Ready to simplify guard management?
        </h2>
        <p
          className={`text-md text-gray-700 tracking-wide mb-8 lg:w-3/4 md:pr-24 ${
            isSM ? "bg-white p-4 rounded-md" : "bg-transparent"
          }`}
        >
          Try Opspot free today, no credit card required. With live GPS
          tracking, patrol tours, and instant incident reporting, you'll see how
          easy security workforce management can be.
        </p>
        <div className="flex sm:flex-col md:flex-row">
          <span className="md:mr-4 sm:mr-0 sm:mb-4 md:mb-0">
            <Button
              text="Get started for free"
              icon={true}
              iconPosition="right"
              density="tight"
              location="demo_signup_section"
              link={`${
                process.env.REACT_APP_DOMAIN || "http://localhost:3000"
              }/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`}
            />
          </span>
          <Button
            text="Request a demo"
            icon={false}
            density="tight"
            type="secondary"
            location="demo_signup_section"
            link="contact"
          />
        </div>
      </div>
    </div>
  );
}
