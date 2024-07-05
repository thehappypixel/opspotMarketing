import React, { useState } from "react";
import {
  PhoneIcon as PhoneOutline,
  ClockIcon as ClockOutline,
  MapIcon as MapOutline,
  ExclamationTriangleIcon as ExclamationOutline,
  DocumentTextIcon as DocumentOutline,
} from "@heroicons/react/24/outline";
import {
  PhoneIcon as PhoneSolid,
  ClockIcon as ClockSolid,
  MapIcon as MapSolid,
  ExclamationTriangleIcon as ExclamationSolid,
  DocumentTextIcon as DocumentSolid,
} from "@heroicons/react/24/solid";

import mobileImage from "../assets/images/screen-location.png";
import shiftsImage from "../assets/images/screen-location.png";
import locationImage from "../assets/images/screen-location.png";
import incidentsImage from "../assets/images/screen-location.png";
import reportingImage from "../assets/images/screen-location.png";

const Tabs = () => {
  const [tabs, setTabs] = useState([
    {
      name: "Mobile",
      iconOutline: <PhoneOutline className="h-6 w-6 mb-1" />,
      iconSolid: <PhoneSolid className="h-6 w-6 mb-1" />,
      imageUrl: mobileImage,
      current: true,
    },
    {
      name: "Shifts",
      iconOutline: <ClockOutline className="h-6 w-6 mb-1" />,
      iconSolid: <ClockSolid className="h-6 w-6 mb-1" />,
      imageUrl: shiftsImage,
      current: false,
    },
    {
      name: "Location",
      iconOutline: <MapOutline className="h-6 w-6 mb-1" />,
      iconSolid: <MapSolid className="h-6 w-6 mb-1" />,
      imageUrl: locationImage,
      current: false,
    },
    {
      name: "Incidents",
      iconOutline: <ExclamationOutline className="h-6 w-6 mb-1" />,
      iconSolid: <ExclamationSolid className="h-6 w-6 mb-1" />,
      imageUrl: incidentsImage,
      current: false,
    },
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
      <div className="pt-16">
        <div>
          <div className="sm:hidden">
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
          <div className="hidden sm:block">
            <nav className="flex  space-x-12" aria-label="Tabs">
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
                  className="cursor-pointer flex flex-col items-center"
                >
                  <span
                    className={classNames(
                      tab.current
                        ? "bg-white text-black"
                        : "text-white hover:text-gray-700",
                      "rounded-md p-4 mx-4"
                    )}
                  >
                    {tab.current ? tab.iconSolid : tab.iconOutline}
                  </span>
                  <span
                    className={`pt-2 text-white text-center text-xsm ${
                      tab.current ? "font-bold" : "font-light"
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
      <div className="p-4 mt-6 mb-16 max-w-6xl bg-white rounded-lg">
        {activeTab && (
          <img
            src={activeTab.imageUrl}
            alt={activeTab.name}
            className="w-full h-auto rounded-lg"
          />
        )}
      </div>
    </>
  );
};

export default Tabs;
