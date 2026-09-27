import React from "react";
import Button from "./button";
import {
  ChatBubbleLeftRightIcon,
  ArrowsRightLeftIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

// Static onboarding / migration section. Server-rendered to HTML (no JS).
// PLG framing: self-serve setup is the default, and done-for-you data migration
// is a free, optional add-on for teams switching from another tool.
// Uses brand-primary icons to match the accent style used site-wide (Who we
// serve, About "What we believe") rather than one-off tinted number badges.
const steps = [
  {
    icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-brand-primary" />,
    title: "Quick chat",
    body: "Tell us how your team works and we'll set up your account, sites, and users.",
  },
  {
    icon: <ArrowsRightLeftIcon className="h-8 w-8 text-brand-primary" />,
    title: "We move your data",
    body: "Coming from spreadsheets or another tool? We bring your sites, guards, and schedules across.",
  },
  {
    icon: <CheckCircleIcon className="h-8 w-8 text-brand-primary" />,
    title: "You're live",
    body: "Even with a full migration, most teams are up and running within a week.",
  },
];

export default function Onboarding() {
  return (
    <div className="w-full bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <p className="text-brand-primary text-xxs font-medium uppercase tracking-widest mb-4">
          Free migration support
        </p>
        <h2 className="text-white text-lg leading-tight font-bold mb-4">
          Easy to set up yourself, but you don't have to
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
          Most teams can get started with Opspot on their own in minutes. If
          you're switching from spreadsheets or another tool, we'll move your
          data across for free.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {steps.map((item) => (
          <div key={item.title} className="text-left">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-white text-md font-bold mb-3">{item.title}</h3>
            <p className="text-gray-400 text-xs leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          text="Talk to us about migrating"
          link="/contact"
          type="ghost"
          density="tight"
          location="onboarding_section"
        />
      </div>
    </div>
  );
}
