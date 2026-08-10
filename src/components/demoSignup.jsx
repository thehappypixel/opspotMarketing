import React from "react";
import Button from "./button";
import { registerUrl } from "../config";

export default function DemoSignup() {
  return (
    <div className="bg-black py-24 md:py-32 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-white text-lg leading-tight font-bold mb-6">
          Ready to simplify guard management?
        </h2>
        <p className="text-gray-400 text-sm mb-10 leading-relaxed">
          Try Opspot free today, no credit card required. With live GPS
          tracking, patrol tours, and instant incident reporting, you'll see how
          easy security workforce management can be.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button
            text="Get started for free"
            icon={true}
            iconPosition="right"
            density="tight"
            location="demo_signup_section"
            link={registerUrl()}
          />
          <Button
            text="Request a demo"
            icon={false}
            density="tight"
            type="ghost"
            location="demo_signup_section"
            link="/contact"
          />
        </div>
      </div>
    </div>
  );
}
