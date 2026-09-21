import React from "react";
import { BuildingOffice2Icon, ShieldCheckIcon } from "@heroicons/react/24/outline";

// Static "who we serve" section. Server-rendered to HTML (no JS).
// Positions Opspot around team size (small teams) rather than industry verticals,
// which is the wedge against enterprise tools like TrackTik and Trackforce.
const audiences = [
  {
    icon: <ShieldCheckIcon className="h-7 w-7 text-brand-primary" />,
    title: "Small guard companies",
    body: "Independent and contract security firms running a handful to a few dozen guards. Get patrols, scheduling, and reporting in one place without the enterprise price tag or setup headache.",
  },
  {
    icon: <BuildingOffice2Icon className="h-7 w-7 text-brand-primary" />,
    title: "In-house security teams",
    body: "Property managers, facilities, and campuses running their own guards. Give your team a simple app they will actually use, and give yourself real visibility into what happens on site.",
  },
];

export default function WhoWeServe() {
  return (
    <div className="w-full bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-lg leading-tight font-bold mb-4">
          Built for small security teams
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto">
          Most guard software is built for large enterprise operations, so it
          comes with the complexity and cost to match. Opspot is built for
          smaller teams that want the essentials done well.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {audiences.map((audience) => (
          <div
            key={audience.title}
            className="border border-gray-200 rounded-xl p-8 text-left"
          >
            <div className="mb-5">{audience.icon}</div>
            <h3 className="text-md font-bold mb-3">{audience.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              {audience.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
