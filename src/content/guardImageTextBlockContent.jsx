import mobileGuard from "../assets/images/mobile-guard.png";
import incidentManagement from "../assets/images/incident-management.png";
import securityReporting from "../assets/images/security-reporting.png";
import mobileActivityReports from "../assets/images/mobile-activity-reports.png";
import mobileClockinOut from "../assets/images/mobile-shift-clockin-clockout.png";
import mobileCheckpoint from "../assets/images/mobile-checkpoint.png";
import mobileLocation from "../assets/images/mobile-location.png";
import mobileTour from "../assets/images/mobile-tour.png";

import {
  QrCodeIcon,
  SignalIcon,
  MapPinIcon,
  MapIcon,
  ClockIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

const GuardImageTextBlockContent = [
  {
    firstItem: "text",
    header: "Clocking in and out",
    body: "Accurately track attendance with digital clock-in and clock-out. Every shift is recorded automatically, reducing paperwork and payroll errors.",
    imageUrl: mobileClockinOut,
    listItems: [
      {
        icon: <ClockIcon className="h-5 w-5" />,
        text: "Accurate time tracking",
      },
      {
        icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
        text: "Automatic shift records",
      },
    ],
  },
  {
    firstItem: "image",
    header: "Automatic daily activity reports",
    body: "Daily Activity Reports (DARs) are automatically generated and tied to each guard's shift — giving you a complete timeline of tasks, patrols, and incidents with zero extra effort.",
    imageUrl: mobileActivityReports,
    listItems: [
      {
        icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
        text: "Auto-generated DARs",
      },
      {
        icon: <ClockIcon className="h-5 w-5" />,
        text: "Shift-linked reporting",
      },
    ],
  },
  {
    firstItem: "text",
    header: "Real-time location tracking",
    body: "Know where guards are at all times. Every activity is GPS-tagged to improve accountability, visibility, and safety during patrols.",
    imageUrl: mobileLocation,
    listItems: [
      { icon: <MapPinIcon className="h-5 w-5" />, text: "GPS precision" },
      { icon: <SignalIcon className="h-5 w-5" />, text: "Real-time updates" },
    ],
  },
  {
    firstItem: "image",
    header: "Flexible checkpoint logging",
    body: "Log checkpoints however your site requires — QR codes, NFC tags, or manual entry. Ideal for indoor, outdoor, and high-security environments.",
    imageUrl: mobileCheckpoint,
    listItems: [
      { icon: <QrCodeIcon className="h-5 w-5" />, text: "QR code scanning" },
      { icon: <SignalIcon className="h-5 w-5" />, text: "NFC support" },
      {
        icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
        text: "Manual entry option",
      },
    ],
  },
  {
    firstItem: "text",
    header: "Guided patrol tours",
    body: "Guards follow structured tours that walk them through every required task, checkpoint, and inspection — ensuring consistent patrol quality every time.",
    imageUrl: mobileTour,
    listItems: [
      { icon: <MapIcon className="h-5 w-5" />, text: "Step-by-step tours" },
      {
        icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
        text: "Task-based guidance",
      },
    ],
  },
];

export default GuardImageTextBlockContent;
