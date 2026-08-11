import React from "react";
import {
  MapPinIcon,
  ClipboardDocumentCheckIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

import incidentFlexible from "../assets/images/incident-flexible-customizable-reporting.png";
import incidentLocation from "../assets/images/incident-location-gps-tracking.png";
import incidentSharing from "../assets/images/incident-report-sharing.png";

const IncidentManagementImageTextBlockContent = [
  {
    firstItem: "text",
    header: "Flexible, customizable reports",
    body: "Build incident reports that fit the situation, not the other way around. Guards can adjust fields, add detailed notes, attach images, and capture every critical detail without slowing down.",
    imageUrl: incidentFlexible,
    listItems: [
      {
        icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
        text: "Custom fields & notes",
      },
      {
        icon: <PhotoIcon className="h-5 w-5" />,
        text: "Attach photos & evidence",
      },
    ],
  },
  {
    firstItem: "image",
    header: "Accurate location tracking",
    body: "Each incident is automatically GPS-tagged with precise coordinates, giving supervisors and clients full clarity on where events occurred: no guesswork, no missing data.",
    imageUrl: incidentLocation,
    listItems: [
      {
        icon: <MapPinIcon className="h-5 w-5" />,
        text: "Precise GPS coordinates",
      },
      {
        icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
        text: "Auto-tagged incident locations",
      },
    ],
  },
  {
    firstItem: "text",
    header: "Seamless incident sharing",
    body: "Incident reports are instantly available for operations to review, export, and share. Provide clients with clear, visual, professional reports that build trust and speed up resolution.",
    imageUrl: incidentSharing,
    listItems: [
      {
        icon: <PhotoIcon className="h-5 w-5" />,
        text: "Visual, client-ready reports",
      },
      {
        icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
        text: "Easy review & export",
      },
    ],
  },
];

export default IncidentManagementImageTextBlockContent;
