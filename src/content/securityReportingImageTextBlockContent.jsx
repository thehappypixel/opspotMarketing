import {
  QrCodeIcon,
  SignalIcon,
  MapPinIcon,
  MapIcon,
  ClipboardDocumentCheckIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import mobileLocation from "../assets/images/mobile-location.png";
import activityTracking from "../assets/images/security-reporting-activity-reporting.png";
import dynamicFiltering from "../assets/images/security-reporting-dynamic-filtering.png";
import seamlessSharing from "../assets/images/security-reporting-seamless-sharing.png";

const SecurityReportingImageTextBlockContent = [
  {
    firstItem: "text",
    header: "Dynamic report filtering",
    body: "Easily filter reports by activity, guard, customer, or location for unparalleled flexibility.",
    imageUrl: dynamicFiltering,
    // listItems: [
    //   {
    //     icon: <MapIcon className="h-5 w-5" />,
    //     text: "Custom filters",
    //   },
    // ],
  },
  {
    firstItem: "image",
    header: "Robust activity tracking",
    body: "Track every activity—from checkpoints and incident reports to emergency calls—with real-time detail that can be viewed and shared.",
    imageUrl: activityTracking,
    // listItems: [
    //   {
    //     icon: <QrCodeIcon className="h-5 w-5" />,
    //     text: "Checkpoints",
    //   },
    //   {
    //     icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
    //     text: "Incident reports",
    //   },
    //   {
    //     icon: <SignalIcon className="h-5 w-5" />,
    //     text: "Emergency calls",
    //   },
    // ],
  },
  {
    firstItem: "text",
    header: "Comprehensive location tracking",
    body: "All guard activities are automatically GPS tagged in the field, ensuring every detail is recorded.",
    imageUrl: mobileLocation,
    // listItems: [
    //   {
    //     icon: <MapPinIcon className="h-5 w-5" />,
    //     text: "Accurate GPS tracking",
    //   },
    // ],
  },

  {
    firstItem: "image",
    header: "Seamless sharing & export",
    body: "Save reports as PDFs or email them directly to stakeholders and customers, keeping everyone informed effortlessly.",
    imageUrl: seamlessSharing,
    // listItems: [
    //   {
    //     icon: <ShareIcon className="h-5 w-5" />,
    //     text: "Export & share",
    //   },
    // ],
  },
];

export default SecurityReportingImageTextBlockContent;
