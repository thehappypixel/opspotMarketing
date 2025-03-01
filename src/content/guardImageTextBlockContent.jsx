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
    body: "Easily record the start and end of each shift with our digital clock in/out feature, ensuring accurate attendance tracking.",
    imageUrl: mobileClockinOut,
    // listItems: [
    //   {
    //     icon: <ClockIcon className="h-5 w-5" />,
    //     text: "Accurate time tracking",
    //   },
    // ],
  },
  {
    firstItem: "image",
    header: "Automatic daily activity reports",
    body: "Daily Activity Reports (DAR) are automatically recorded and linked to each guard's shift, providing a complete record of all activities.",
    imageUrl: mobileActivityReports,
    // listItems: [
    //   {
    //     icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
    //     text: "Automated reports",
    //   },
    // ],
  },
  {
    firstItem: "text",
    header: "Real-time location tracking",
    body: "Every activity is tagged with precise location data, ensuring you have real-time visibility into guard movements.",
    imageUrl: mobileLocation,
    // listItems: [
    //   { icon: <MapPinIcon className="h-5 w-5" />, text: "GPS tracking" },
    // ],
  },
  {
    firstItem: "image",
    header: "Flexible checkpoint logging",
    body: "Record checkpoints using NFC, QR codes, or manual entry—whichever works best in the field.",
    imageUrl: mobileCheckpoint,
    listItems: [
      { icon: <QrCodeIcon className="h-5 w-5" />, text: "QR codes" },
      { icon: <SignalIcon className="h-5 w-5" />, text: "NFC" },
    ],
  },
  {
    firstItem: "text",
    header: "Guided patrol tours",
    body: "Guards follow structured tours that guide them through a sequence of activities, ensuring no task or checkpoint is missed.",
    imageUrl: mobileTour,
    // listItems: [
    //   { icon: <MapIcon className="h-5 w-5" />, text: "Sequential tours" },
    // ],
  },
];

export default GuardImageTextBlockContent;
