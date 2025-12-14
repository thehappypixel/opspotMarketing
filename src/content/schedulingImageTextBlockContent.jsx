import React from "react";
import {
  ClockIcon,
  ClipboardDocumentCheckIcon,
  DocumentDuplicateIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

import schedulingImage from "../assets/images/scheduling.png";

const SchedulingImageTextBlockContent = [
  {
    firstItem: "text",
    header: "Quick and easy schedule creation",
    body: "Create schedules in minutes, not hours. Build shifts with activities, checkpoints, and tours that your guards need to complete. The simply and inutitive interface means you spend less time on admin work and more time managing your operations.",
    imageUrl: schedulingImage,
    listItems: [
      {
        icon: <CalendarDaysIcon className="h-5 w-5" />,
        text: "Intuitive schedule builder",
      },
      {
        icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
        text: "Add activities and checkpoints",
      },
    ],
  },
  {
    firstItem: "image",
    header: "Schedule templates for efficiency",
    body: "Save time by creating reusable schedule templates. Set up your standard weekly or monthly schedules once, then copy and adjust as needed. Perfect for sites with consistent guard requirements or rotating shifts.",
    imageUrl: schedulingImage,
    listItems: [
      {
        icon: <DocumentDuplicateIcon className="h-5 w-5" />,
        text: "Create reusable templates",
      },
      {
        icon: <ClockIcon className="h-5 w-5" />,
        text: "Copy and edit week to week",
      },
    ],
  },
  {
    firstItem: "text",
    header: "Guided shift activities for guards",
    body: "When guards clock in, they see their scheduled activities, checkpoints, and tours right in the mobile app. No confusion, no missed tasks. Guards know exactly what to do and when—making their shifts more efficient and your operations more reliable.",
    imageUrl: schedulingImage,
    listItems: [
      {
        icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
        text: "Clear activity lists",
      },
      {
        icon: <ClockIcon className="h-5 w-5" />,
        text: "Shift-aligned checkpoints and tours",
      },
    ],
  },
];

export default SchedulingImageTextBlockContent;
