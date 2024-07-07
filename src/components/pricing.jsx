import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { plans, categories } from "../content/pricingContent";

const Pricing = () => {
  return (
    <div className="py-16 px-24 w-full bg-black">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 bg-black text-white"></th>
              {plans.map((plan, index) => (
                <th
                  key={index}
                  className={`px-6 py-6 rounded-t-lg ${
                    plan.highlight
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  {plan.type === "plan" && (
                    <div className="text-left">
                      <h2 className="text-md font-black">{plan.name}</h2>
                      <p className="text-xsm font-medium">{plan.description}</p>
                      <p className="mt-4 text-lg font-black">{plan.price}</p>

                      <button
                        className={`mt-4 py-3 px-6 rounded-lg font-bold ${
                          plan.highlight
                            ? "bg-brand-primary text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        {plan.buttonText}
                      </button>
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {categories.map((category, index) => (
              <tr key={index}>
                <td className="px-6 py-4 font-medium text-sm bg-black text-white align-top">
                  {category}
                </td>
                {plans.map((plan, planIndex) => (
                  <td
                    key={planIndex}
                    className={`px-6 py-6 align-top ${
                      plan.highlight
                        ? `bg-white text-black ${
                            index === categories.length - 1
                              ? "rounded-b-lg"
                              : ""
                          }`
                        : "bg-black text-gray-200"
                    }`}
                  >
                    <ul className="list-none">
                      {plan.features[category].length > 0 ? (
                        plan.features[category].map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center space-x-2 py-1"
                          >
                            <CheckCircleIcon
                              className={`w-6 h-6 ${
                                plan.highlight
                                  ? "text-brand-primary"
                                  : "text-success"
                              }`}
                            />
                            <span
                              className={`${
                                plan.highlight ? "text-black" : "text-gray-200"
                              }`}
                            >
                              {feature}
                            </span>
                          </li>
                        ))
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
    </div>
  );
};

export default Pricing;
