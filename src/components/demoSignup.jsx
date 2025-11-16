import React from "react";
import Button from "./button";
import simpleOpaque from "../assets/images/simple-opaque.png";
import { useBreakpoints } from "../utils/windowSizing";

export default function DemoSignup() {
  const { isSM, isMD, isLG } = useBreakpoints();

  let backgroundSize;
  if (isSM) {
    backgroundSize = "150%";
  } else if (isMD) {
    backgroundSize = "70%";
  } else if (isLG) {
    backgroundSize = "50%";
  }

  return (
    <div
      className="flex flex-col justify-center items-center py-32 border-t-2 border-b-2 border-gray-200 bg-white"
      style={{
        backgroundImage: `url(${simpleOpaque})`,
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundSize,
      }}
    >
      <div className="w-3/4">
        <h2 className="text-black text-lg pb-4 font-bold">
          Ready to give Opspot a shot?
        </h2>
        <p
          className={`text-sm mb-8 lg:w-3/4 md:pr-24 ${
            isSM ? "bg-white p-4 rounded-md" : "bg-transparent"
          }`}
        >
          Request a demo or sign up today and discover how our platform can
          transform your security operations. Our team is here to guide you
          every step of the way.
        </p>
        <div className="flex sm:flex-col md:flex-row">
          <span className="md:mr-4 sm:mr-0 sm:mb-4 md:mb-0">
            <Button
              text="Contact us for a demo"
              icon={false}
              density="tight"
              type="secondary"
              link="contact"
            />
          </span>
          <Button
            text="Get started for free"
            icon={true}
            iconPosition="right"
            density="tight"
            link={`${process.env.REACT_APP_AUTH_BASE_URL || 'http://localhost:3000'}/auth/register/?priceId=${process.env.REACT_APP_STARTER_PLAN}`}
          />
        </div>
      </div>
    </div>
  );
}
