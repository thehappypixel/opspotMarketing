import React from "react";
import {
  MapPinIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { PhotoIcon } from "@heroicons/react/24/outline";
import incidentFlexible from "../assets/images/incident-flexible-customizable-reporting.png";
import incidentLocation from "../assets/images/incident-location-gps-tracking.png";
import incidentSharing from "../assets/images/incident-report-sharing.png";

const IncidentManagementImageTextBlockContent = [
  {
    firstItem: "text",
    header: "Flexible, customizable reports",
    body: "Our platform empowers guards to tailor each report to the incident's specific needs. Adjust fields, add notes, attach images, and provide the details that matter most.",
    imageUrl: incidentFlexible,
    // listItems: [
    //   {
    //     icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
    //     text: "Customizable fields",
    //   },
    // ],
  },
  {
    firstItem: "image",
    header: "Accurate location tracking",
    body: "Every report is automatically tagged with accurate GPS coordinates, ensuring the precise location of each incident is recorded.",
    imageUrl: incidentLocation,
    // listItems: [
    //   {
    //     icon: <MapPinIcon className="h-5 w-5" />,
    //     text: "Location data",
    //   },
    // ],
  },
  {
    firstItem: "text",
    header: "Seamless incident sharing",
    body: "Once incidents are captured, operations can easily review and share comprehensive visual reports with customers, ensuring transparency and enabling swift resolution.",
    imageUrl: incidentSharing,
    // listItems: [
    //   {
    //     icon: <PhotoIcon className="h-5 w-5" />,
    //     text: "View & share images",
    //   },
    // ],
  },
];

export default IncidentManagementImageTextBlockContent;
