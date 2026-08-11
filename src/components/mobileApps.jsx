import React from "react";
import iosImage from "../assets/images/ios-badge.svg";
import googlePlayImage from "../assets/images/google-play-badge.svg";
import { imgSrc } from "../utils/img";

// Static app-store badges section. Server-rendered to HTML (no JS).
export default function MobileApps() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white py-24">
      <h2 className="pb-4 px-12 text-lg leading-tight font-bold text-center">
        Apple? Android? We’ve got you covered.
      </h2>
      <p className="w-3/4 text-center">
        <span className="text-md text-gray-700 tracking-wide">
          Opspot provides a seamless experience for your guards; whether you’re
          using iOS, Android, or both.
        </span>
        <span className="text-gray-600 text-xsm block pt-4">
          Currently only available in Canada and the United States.
        </span>
      </p>

      <div className="lg:w-1/4 flex justify-center space-x-4 pt-6 mb-24">
        <a href="https://apps.apple.com/ca/app/opspot/id6587551457">
          <div className="flex">
            <img
              src={imgSrc(iosImage)}
              alt="Download on the App Store"
              className="min-h-[60px] max-h-[60px] flex-shrink-0 object-contain"
            />
          </div>
        </a>

        <a href="https://play.google.com/store/apps/details?id=com.anonymous.opspot&pcampaignid=web_share">
          <div className="flex">
            <img
              src={imgSrc(googlePlayImage)}
              alt="Get it on Google Play"
              className="min-h-[60px] max-h-[60px] flex-shrink-0 object-contain"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
