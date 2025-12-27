import React from "react";
import {
  ClockIcon,
  ClipboardDocumentCheckIcon,
  DocumentDuplicateIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

import schedulingImage from "../assets/images/scheduling.png";
import quickScheduleCreationImage from "../assets/images/quick-schedule-creation.png";
import templateImage from "../assets/images/scheduling-templates.png";
import clearShiftsImage from "../assets/images/scheduling-guided-shifts.png";

const SchedulingImageTextBlockContent = [
  {
    firstItem: "text",
    header: "Quick schedule creation",
    body: "Create schedules in minutes, not hours. Build shifts with activities, checkpoints, and tours in a simple, intuitive interface that reduces admin time and keeps your operations running smoothly.",
    imageUrl: quickScheduleCreationImage,
    listItems: [
      {
        icon: <CalendarDaysIcon className="h-5 w-5" />,
        text: "Intuitive schedule builder",
      },
      {
        icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
        text: "Add activities, checkpoints, and tours",
      },
      {
        icon: <DocumentDuplicateIcon className="h-5 w-5" />,
        text: "Designed for fast, repeatable scheduling",
      },
    ],
  },
  {
    firstItem: "image",
    header: "Schedule templates for shift management efficiency",
    body: "Save time by creating reusable schedule templates. Set up your standard weekly or monthly schedules once, then copy and adjust them as needed; ideal for consistent sites or rotating shifts.",
    imageUrl: templateImage,
    listItems: [
      // {
      //   icon: <DocumentDuplicateIcon className="h-5 w-5" />,
      //   text: "Create reusable shift",
      // },
      // {
      //   icon: <ClockIcon className="h-5 w-5" />,
      //   text: "Copy and edit schedules week to week",
      // },
      {
        icon: <ClockIcon className="h-5 w-5" />,
        text: "Reduce repetitive work",
      },
    ],
  },
  {
    firstItem: "text",
    header: "Clear, guided shifts for guards",
    body: "When guards clock in, they see their scheduled activities, checkpoints, and tours directly in the mobile app. No confusion, no missed tasks. Just clear direction throughout the shift.",
    imageUrl: clearShiftsImage,
    listItems: [
      {
        icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
        text: "Clear activity lists",
      },
      // {
      //   icon: <ClockIcon className="h-5 w-5" />,
      //   text: "Shift-aligned checkpoints and tours",
      // },
      {
        icon: <CalendarDaysIcon className="h-5 w-5" />,
        text: "Better adherence, fewer follow-ups",
      },
    ],
  },
];

export default SchedulingImageTextBlockContent;
