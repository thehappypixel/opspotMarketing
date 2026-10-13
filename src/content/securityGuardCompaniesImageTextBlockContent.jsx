import React from "react";
import {
  CalendarDaysIcon,
  DocumentDuplicateIcon,
  QrCodeIcon,
  MapPinIcon,
  ClipboardDocumentCheckIcon,
  ShareIcon,
  FlagIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";

import scheduling from "../assets/images/scheduling.png";
import mobileTour from "../assets/images/mobile-tour.png";
import incidentManagement from "../assets/images/incident-management.png";
import securityReporting from "../assets/images/security-reporting.png";

const SecurityGuardCompaniesImageTextBlockContent = [
  {
    firstItem: "text",
    header: "Schedule guards across every customer site",
    body: "Build shifts for each site with the activities, checkpoints, and tours your contract calls for. Save your regular rotations as templates so next week takes minutes, not an afternoon.",
    imageUrl: scheduling,
    listItems: [
      {
        icon: <CalendarDaysIcon className="h-5 w-5" />,
        text: "Site-based shifts",
      },
      {
        icon: <DocumentDuplicateIcon className="h-5 w-5" />,
        text: "Reusable templates",
      },
    ],
    ctaText: "Guard scheduling",
    ctaLink: "/scheduling",
  },
  {
    firstItem: "image",
    header: "Proof your guards did the work",
    body: "Guards clock in, follow guided tours, and scan QR or NFC checkpoints from their phone. Every scan is GPS-tagged and time-stamped, so you can show a customer exactly when their site was patrolled.",
    imageUrl: mobileTour,
    listItems: [
      { icon: <QrCodeIcon className="h-5 w-5" />, text: "Checkpoint scans" },
      { icon: <MapPinIcon className="h-5 w-5" />, text: "GPS-tagged activity" },
    ],
    ctaText: "Mobile guard app",
    ctaLink: "/mobile-guard",
  },
  {
    firstItem: "text",
    header: "Incident reports your customers can trust",
    body: "Guards file incidents on the spot with notes, photos, and location attached. Supervisors see them right away and can review and send a clean report to the customer without retyping anything.",
    imageUrl: incidentManagement,
    listItems: [
      { icon: <FlagIcon className="h-5 w-5" />, text: "Fast incident filing" },
      { icon: <CameraIcon className="h-5 w-5" />, text: "Photos and notes" },
    ],
    ctaText: "Incident management",
    ctaLink: "/incident-management",
  },
  {
    firstItem: "image",
    header: "Customer reporting without the paperwork",
    body: "Daily activity reports build themselves from each shift. Filter by site, guard, or activity, then export a PDF or send it straight to the customer. Good reporting is how you keep contracts and win referrals.",
    imageUrl: securityReporting,
    listItems: [
      {
        icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
        text: "Automatic DARs",
      },
      { icon: <ShareIcon className="h-5 w-5" />, text: "Send to customers" },
    ],
    ctaText: "Security reporting",
    ctaLink: "/security-reporting",
  },
];

export default SecurityGuardCompaniesImageTextBlockContent;
