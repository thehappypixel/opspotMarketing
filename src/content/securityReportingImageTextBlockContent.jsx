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
    body: "Quickly filter reports by activity type, guard, customer site, or location. Find exactly what you need; without digging through endless data.",
    imageUrl: dynamicFiltering,
    // listItems: [
    //   { icon: <MapIcon className="h-5 w-5" />, text: "Custom filters" },
    // ],
  },
  {
    firstItem: "image",
    header: "Robust activity tracking",
    body: "Monitor everything happening in the field; from patrol checkpoints and incident reports to emergency calls. Every action is logged with real-time detail for complete operational visibility.",
    imageUrl: activityTracking,
    // listItems: [
    //   { icon: <QrCodeIcon className="h-5 w-5" />, text: "Checkpoints" },
    //   { icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />, text: "Incident reports" },
    //   { icon: <SignalIcon className="h-5 w-5" />, text: "Emergency calls" },
    // ],
  },
  {
    firstItem: "text",
    header: "Comprehensive location tracking",
    body: "Every guard activity is automatically GPS-tagged, giving you precise geolocation data to support accountability, audit trails, and customer reporting.",
    imageUrl: mobileLocation,
    // listItems: [
    //   { icon: <MapPinIcon className="h-5 w-5" />, text: "Accurate GPS tracking" },
    // ],
  },

  {
    firstItem: "image",
    header: "Seamless sharing & export",
    body: "Export reports as PDFs or send them directly to customers and stakeholders. Keep everyone informed with clean, professional reporting. Instantly.",
    imageUrl: seamlessSharing,
    // listItems: [
    //   { icon: <ShareIcon className="h-5 w-5" />, text: "Export & share" },
    // ],
  },
];

export default SecurityReportingImageTextBlockContent;
