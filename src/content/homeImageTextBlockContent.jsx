import mobileGuard from "../assets/images/mobile-guard.png";
import incidentManagement from "../assets/images/incident-flexible-customizable-reporting.png";
import securityReporting from "../assets/images/security-reporting-activity-reporting.png";

import { QrCodeIcon } from "@heroicons/react/24/outline";
import { SignalIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { MapIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const HomeImageTextBlockContent = [
  {
    firstItem: "text",
    header: "Mobile guard",
    body: "Simplified task management and patrol for enhanced security. Guards can complete their patrol tours and checkpoints through a interfance that's so intutive, they won't require training. All activities are accessible via a web interface for analysis and reporting.",
    ctaLink: "/mobile-guard",
    ctaText: "Mobile guard",
    imageUrl: mobileGuard,
    listItems: [
      {
        icon: <QrCodeIcon className="h-5 w-5" />,
        text: "QR Code",
      },
      {
        icon: <SignalIcon className="h-5 w-5" />,
        text: "NFC",
      },
      {
        icon: <MapPinIcon className="h-5 w-5" />,
        text: "GPS",
      },
    ],
  },
  {
    firstItem: "image",
    header: "Incident reporting",
    body: "Keep your team safe & accountable. Enhance safety with real-time location tracking of team members and emergency contact information.",
    ctaLink: "/incident-management",
    ctaText: "Incident management",
    imageUrl: incidentManagement,
    listItems: [
      {
        icon: <MapIcon className="h-5 w-5" />,
        text: "Location",
      },
      {
        icon: <ExclamationTriangleIcon className="h-5 w-5" />,
        text: "Emergency calls",
      },
    ],
  },
  {
    firstItem: "text",
    header: "Security reporting",
    body: "Track all activity, incidents efficiently and create reports for improved security management.",
    ctaLink: "/security-reporting",
    ctaText: "Security reporting",
    imageUrl: securityReporting,
  },
];

export default HomeImageTextBlockContent;
