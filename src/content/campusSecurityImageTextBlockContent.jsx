import React from "react";
import {
  MapIcon,
  QrCodeIcon,
  MapPinIcon,
  SignalIcon,
  FlagIcon,
  CameraIcon,
  CalendarDaysIcon,
  ClipboardDocumentCheckIcon,
  FunnelIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

import mobileTour from "../assets/images/mobile-tour.png";
import mobileLocation from "../assets/images/mobile-location.png";
import incidentManagement from "../assets/images/incident-management.png";
import scheduling from "../assets/images/scheduling.png";
import securityReporting from "../assets/images/security-reporting.png";

const CampusSecurityImageTextBlockContent = [
  {
    firstItem: "text",
    header: "Patrol every building, lot, and residence hall",
    body: "Set up guided tours for the routes your officers walk every night. Place QR or NFC checkpoints at doors, parking structures, and residence halls so you know each stop was actually covered.",
    imageUrl: mobileTour,
    listItems: [
      { icon: <MapIcon className="h-5 w-5" />, text: "Guided patrol routes" },
      { icon: <QrCodeIcon className="h-5 w-5" />, text: "QR and NFC checkpoints" },
    ],
    ctaText: "Mobile guard app",
    ctaLink: "/mobile-guard",
  },
  {
    firstItem: "image",
    header: "Know where your officers are",
    body: "Officer activity is GPS-tagged in real time, so supervisors can see coverage across a spread-out campus and respond faster when something comes up on the other side of it.",
    imageUrl: mobileLocation,
    listItems: [
      { icon: <MapPinIcon className="h-5 w-5" />, text: "Live location" },
      { icon: <SignalIcon className="h-5 w-5" />, text: "Real-time updates" },
    ],
  },
  {
    firstItem: "text",
    header: "Document incidents the moment they happen",
    body: "Officers report incidents from their phone with notes, photos, and the exact location attached. Everything lands in one place for supervisors to review instead of in a stack of paper forms.",
    imageUrl: incidentManagement,
    listItems: [
      { icon: <FlagIcon className="h-5 w-5" />, text: "Mobile incident reports" },
      { icon: <CameraIcon className="h-5 w-5" />, text: "Photos and notes" },
    ],
    ctaText: "Incident management",
    ctaLink: "/incident-management",
  },
  {
    firstItem: "image",
    header: "Staff the campus around the academic calendar",
    body: "Build schedules for each part of campus and save them as templates. Adjust quickly for move-in week, exams, events, and breaks without starting from scratch.",
    imageUrl: scheduling,
    listItems: [
      {
        icon: <CalendarDaysIcon className="h-5 w-5" />,
        text: "Schedule templates",
      },
      {
        icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
        text: "Tasks built into shifts",
      },
    ],
    ctaText: "Guard scheduling",
    ctaLink: "/scheduling",
  },
  {
    firstItem: "text",
    header: "Clear records for administration",
    body: "Every patrol, checkpoint, and incident is logged and searchable. Filter by building, officer, or activity type and export a PDF when leadership, risk management, or annual reporting needs it.",
    imageUrl: securityReporting,
    listItems: [
      { icon: <FunnelIcon className="h-5 w-5" />, text: "Filter by building" },
      { icon: <ShareIcon className="h-5 w-5" />, text: "PDF export" },
    ],
    ctaText: "Security reporting",
    ctaLink: "/security-reporting",
  },
];

export default CampusSecurityImageTextBlockContent;
