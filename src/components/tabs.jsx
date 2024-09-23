import React, { useState } from "react";
import {
  DevicePhoneMobileIcon as PhoneOutline,
  ClipboardDocumentCheckIcon as ListOutline,
  ClockIcon as ClockOutline,
  ExclamationTriangleIcon as ExclamationOutline,
  DocumentTextIcon as DocumentOutline,
} from "@heroicons/react/24/outline";
import {
  DevicePhoneMobileIcon as PhoneSolid,
  ClipboardDocumentCheckIcon as ListSolid,
  ClockIcon as ClockSolid,
  ExclamationTriangleIcon as ExclamationSolid,
  DocumentTextIcon as DocumentSolid,
} from "@heroicons/react/24/solid";

import mobileImage from "../assets/images/screen-mobile.png";
import locationImage from "../assets/images/screen-location.png";
// import incidentsImage from "../assets/images/screen-location.png";
import reportingImage from "../assets/images/screen-reporting.png";

const Tabs = () => {
  const [tabs, setTabs] = useState([
    {
      name: "Tasks",
      iconOutline: <ListOutline className="h-6 w-6 mb-1" />,
      iconSolid: <ListSolid className="h-6 w-6 mb-1" />,
      imageUrl: locationImage,
      current: true,
    },
    {
      name: "Mobile",
      iconOutline: <PhoneOutline className="h-6 w-6 mb-1" />,
      iconSolid: <PhoneSolid className="h-6 w-6 mb-1" />,
      imageUrl: mobileImage,
      current: false,
    },
    // {
    //   name: "Incidents",
    //   iconOutline: <ExclamationOutline className="h-6 w-6 mb-1" />,
    //   iconSolid: <ExclamationSolid className="h-6 w-6 mb-1" />,
    //   imageUrl: incidentsImage,
    //   current: false,
    // },
    {
      name: "Reporting",
      iconOutline: <DocumentOutline className="h-6 w-6 mb-1" />,
      iconSolid: <DocumentSolid className="h-6 w-6 mb-1" />,
      imageUrl: reportingImage,
      current: false,
    },
  ]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const activeTab = tabs.find((tab) => tab.current);

  return (
    <>
      <div className="pt-16 sm:w-full sm:overflow-x-hidden">
        <div>
          <div className="visible lg:hidden sm:hidden md:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            <select
              id="tabs"
              name="tabs"
              className="block w-full rounded-md border-gray-300 focus:border-brand-primary focus:ring-brand-primary"
              defaultValue={tabs.find((tab) => tab.current).name}
              onChange={(e) => {
                const selectedTab = e.target.value;
                setTabs(
                  tabs.map((tab) => ({
                    ...tab,
                    current: tab.name === selectedTab,
                  }))
                );
              }}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-center">
            <nav className="flex sm:space-x-0 lg:space-x-12" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setTabs(
                      tabs.map((t) => ({
                        ...t,
                        current: t.name === tab.name,
                      }))
                    );
                  }}
                  aria-current={tab.current ? "page" : undefined}
                  className={`cursor-pointer flex flex-col items-center text-white transition duration-150 ease-in-out ${
                    !tab.current ? "hover:text-opacity-75" : ""
                  }`}
                >
                  <span
                    className={classNames(
                      tab.current ? "bg-white text-black" : "",
                      "rounded-md p-4 mx-4"
                    )}
                  >
                    {tab.current ? tab.iconSolid : tab.iconOutline}
                  </span>
                  <span
                    className={`pt-2 text-center text-xs ${
                      tab.current ? "font-normal" : "font-light"
                    }`}
                  >
                    {tab.name}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="mt-6 sm:m-6 mb-16 max-w-6xl rounded-lg">
        {activeTab && (
          <img
            src={activeTab.imageUrl}
            alt={activeTab.name}
            className="w-full h-auto rounded-md"
          />
        )}
      </div>
    </>
  );
};

export default Tabs;
