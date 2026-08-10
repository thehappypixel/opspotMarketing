import React from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { plans, categories } from "../content/pricingContent";
import { registerUrl } from "../config";

// Static pricing table. The annual toggle is intentionally not rendered (kept
// in content for future use), so this is fully server-rendered — no JS. Signup
// clicks are tracked via the delegated analytics handler (data-track-*).
export default function PricingTable() {
  // Show only the first two plans (third kept for future use).
  const visiblePlans = plans.slice(0, 2);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-fixed">
        <thead>
          <tr>
            <th className="lg:px-6 sm:hidden md:hidden bg-black text-white align-top w-1/3"></th>
            {visiblePlans.map((plan, index) => (
              <th
                key={index}
                className={`px-6 py-6 rounded-t-lg align-top w-2/3 sm:w-auto ${
                  plan.highlight ? "bg-white text-black" : "bg-black text-white"
                }`}
              >
                {plan.type === "plan" && (
                  <div className="text-left">
                    <h2 className="text-md font-black">{plan.name}</h2>
                    <p className="text-xs font-medium">{plan.description}</p>
                    <p className="mt-4 text-md font-black">
                      {plan.price.monthly !== "Free" && "USD"}{" "}
                      {plan.price.monthly}
                      {plan.price.monthly !== "Free" && " / guard"}{" "}
                    </p>

                    <a
                      href={registerUrl(plan.id.monthly)}
                      data-track="external"
                      data-track-dest={registerUrl(plan.id.monthly)}
                      data-track-text={plan.buttonText}
                      data-track-cta="cta_signup"
                      data-track-cta-label={`pricing_${plan.name
                        .toLowerCase()
                        .replace(/\s+/g, "_")}`}
                      className={`block mt-4 py-3 px-6 rounded-lg font-bold text-center lg:w-full sm:w-60 hover:bg-opacity-85 transition duration-150 ease-in-out ${
                        plan.highlight
                          ? "bg-brand-primary text-white hover:text-gray-50"
                          : "bg-white text-gray-600 hover:text-black"
                      }`}
                    >
                      {plan.buttonText}
                    </a>
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td className="px-6 py-6 sm:hidden font-medium text-sm bg-black text-white align-top w-1/3">
                {category}
              </td>
              {visiblePlans.map((plan, planIndex) => (
                <td
                  key={planIndex}
                  className={`sm:px-2 lg:px-6 py-6 align-top w-2/3 sm:w-auto ${
                    plan.highlight
                      ? `bg-white text-black ${
                          index === categories.length - 1 ? "rounded-b-lg" : ""
                        }`
                      : "bg-black text-gray-200"
                  }`}
                >
                  <ul className="list-none">
                    {plan.features[category].length > 0 ? (
                      plan.features[category].map((feature, featureIndex) => {
                        const featureText =
                          typeof feature === "string" ? feature : feature.text;
                        const isIncluded =
                          typeof feature === "string"
                            ? true
                            : feature.included !== false;

                        return (
                          <li
                            key={featureIndex}
                            className="flex items-center space-x-2 py-1"
                          >
                            {isIncluded ? (
                              <CheckCircleIcon
                                className={`flex-shrink-0 sm:w-4 sm:h-4 lg:w-6 lg:h-6 sm:ml-4 md:ml-0 lg:ml-0 ${
                                  plan.highlight
                                    ? "text-brand-primary"
                                    : "text-success"
                                }`}
                              />
                            ) : (
                              <XCircleIcon
                                className={`flex-shrink-0 sm:w-4 sm:h-4 lg:w-6 lg:h-6 sm:ml-4 md:ml-0 lg:ml-0 text-danger`}
                              />
                            )}
                            <span
                              className={`${
                                plan.highlight ? "text-black" : "text-gray-200"
                              }`}
                            >
                              {featureText}
                            </span>
                          </li>
                        );
                      })
                    ) : (
                      <span className="text-white">-</span>
                    )}
                  </ul>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
