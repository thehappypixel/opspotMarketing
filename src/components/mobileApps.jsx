import React from "react";
import iosImage from "../assets/images/ios-badge.svg";
import googlePlayImage from "../assets/images/google-play-badge.svg";
import { imgSrc } from "../utils/img";

// Static app-store badges section. Server-rendered to HTML (no JS).
export default function MobileApps() {
  return (
    <div className="w-full bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="md:max-w-md">
          <h2 className="pb-4 text-lg leading-tight font-bold">
            Apple? Android? We’ve got you covered.
          </h2>
          <p className="text-md text-gray-700 tracking-wide">
            Opspot provides a seamless experience for your guards; whether
            you’re using iOS, Android, or both.
          </p>
        </div>

        <div className="flex flex-shrink-0 items-center space-x-4">
          <a href="https://apps.apple.com/ca/app/opspot/id6587551457">
            <img
              src={imgSrc(iosImage)}
              alt="Download on the App Store"
              className="min-h-[60px] max-h-[60px] flex-shrink-0 object-contain"
            />
          </a>

          <a href="https://play.google.com/store/apps/details?id=com.anonymous.opspot&pcampaignid=web_share">
            <img
              src={imgSrc(googlePlayImage)}
              alt="Get it on Google Play"
              className="min-h-[60px] max-h-[60px] flex-shrink-0 object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
