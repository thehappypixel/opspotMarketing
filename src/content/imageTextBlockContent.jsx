import ph1 from "../assets/images/block-ph-1.png";
import ph2 from "../assets/images/block-ph-2.png";
import ph3 from "../assets/images/block-ph-3.png";
import ph4 from "../assets/images/block-ph-4.png";

import { QrCodeIcon } from "@heroicons/react/24/outline";
import { SignalIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { MapIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const ImageTextBlockContent = [
  {
    firstItem: "text",
    header: "Simplified task management for enhanced security",
    body: "Assign and manage tours and checkpoints through a best-in-class interface.",
    imageUrl: ph1,
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
    header: "Keep your team safe & accountable",
    body: "Enhance safety with real-time location tracking of team members and emergency contact information",
    imageUrl: ph2,
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
    header: "Seamless Mobile Incident Reporting",
    body: "Track all incidents efficiently for improved security management",
    imageUrl: ph3,
  },
  {
    firstItem: "image",
    header: "Professional Reporting at Your Fingertips",
    body: "Enhance transparency and accountability with automated PDF and email reports",
    imageUrl: ph4,
  },
];

export default ImageTextBlockContent;
