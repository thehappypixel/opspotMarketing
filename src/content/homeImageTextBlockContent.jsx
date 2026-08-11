import mobileGuard from "../assets/images/mobile-guard.png";
import incidentManagement from "../assets/images/incident-flexible-customizable-reporting.png";
import securityReporting from "../assets/images/security-reporting-activity-reporting.png";
import scheduling from "../assets/images/scheduling-security-guard-shifts.png";

import { QrCodeIcon } from "@heroicons/react/24/outline";
import { SignalIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { MapIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

const HomeImageTextBlockContent = [
  {
    firstItem: "text",
    header: "Mobile patrol app for security guard operations",
    body: "Equip your guards with an intuitive mobile patrol app for tours, checkpoints, and daily tasks. Designed so simple your team won’t need training. All activity is logged automatically and accessible through your web dashboard for oversight and reporting.",
    ctaLink: "/mobile-guard",
    ctaText: "Explore mobile guard features",
    imageUrl: mobileGuard,
    listItems: [
      {
        icon: <QrCodeIcon className="h-5 w-5" />,
        text: "QR checkpoints",
      },
      {
        icon: <SignalIcon className="h-5 w-5" />,
        text: "NFC",
      },
      {
        icon: <MapPinIcon className="h-5 w-5" />,
        text: "GPS tracking",
      },
    ],
  },
  {
    firstItem: "image",
    header: "Fast, accurate incident reporting",
    body: "Give your guards a simple, guided solution to document incidents with photos, notes, and automatic time and location stamps. Supervisors receive instant access to reports, ensuring accountability and faster response times.",
    ctaLink: "/incident-management",
    ctaText: "Learn about incident management",
    imageUrl: incidentManagement,
    listItems: [
      {
        icon: <MapIcon className="h-5 w-5" />,
        text: "Time & location tracking",
      },
      {
        icon: <ExclamationTriangleIcon className="h-5 w-5" />,
        text: "Emergency calls",
      },
    ],
  },
  {
    firstItem: "text",
    header: "Professional security reporting",
    body: "Generate accurate activity reports, incident summaries, and patrol performance data in seconds. Deliver clean, professional reports to your clients with one click. No spreadsheets, no paperwork, no missed details.",
    ctaLink: "/security-reporting",
    ctaText: "See reporting capabilities",
    imageUrl: securityReporting,
  },
  {
    firstItem: "image",
    header: "Simple guard scheduling and shift management",
    body: "Create schedules quickly with activities, checkpoints, and tours. Use templates to copy schedules week to week, saving hours of admin time. Guards clock in and follow their scheduled activities in the mobile app, making it fast and easy to know what to do and complete their duties.",
    ctaLink: "/scheduling",
    ctaText: "Learn about guard scheduling",
    imageUrl: scheduling,
    listItems: [
      {
        icon: <CalendarDaysIcon className="h-5 w-5" />,
        text: "Quick schedule creation",
      },
      {
        icon: <DocumentDuplicateIcon className="h-5 w-5" />,
        text: "Templates and copy schedules",
      },
    ],
  },
];

export default HomeImageTextBlockContent;
