import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { plans, categories } from "../content/pricingContent";

const Pricing = () => {
  return (
    <div className="py-16 sm:px-4 lg:px-24 w-full bg-black" id="pricing">
      <h2 className="text-xl leading-tight font-bold text-white text-center">
        Pricing
      </h2>
      <p className="py-6 mb-12 text-md tracking-wider leading-snug font-normal text-white text-center">
        Simple pricing for solutions you actually need. Prices in USD.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full table-fixed">
          <thead>
            <tr>
              <th className="lg:px-6 sm:hidden md:hidden bg-black text-white align-top w-1/3"></th>
              {plans.map((plan, index) => (
                <th
                  key={index}
                  className={`px-6 py-6 rounded-t-lg align-top w-2/3 sm:w-auto ${
                    plan.highlight
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  {plan.type === "plan" && (
                    <div className="text-left">
                      <h2 className="text-md font-black">{plan.name}</h2>
                      <p className="text-xs font-medium">{plan.description}</p>
                      <p className="mt-4 text-lg font-black">{plan.price}</p>

                      <button
                        className={`mt-4 py-3 px-6 rounded-lg font-bold lg:w-full sm:w-60 hover:bg-opacity-85 transition duration-150 ease-in-out ${
                          plan.highlight
                            ? "bg-brand-primary text-white hover:text-gray-50"
                            : "bg-white text-gray-600 hover:text-black"
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
          <tbody>
            {categories.map((category, index) => (
              <tr key={index}>
                <td className="px-6 py-6 sm:hidden font-medium text-sm bg-black text-white align-top w-1/3">
                  {category}
                </td>
                {plans.map((plan, planIndex) => (
                  <td
                    key={planIndex}
                    className={`sm:px-2 lg:px-6 py-6 align-top w-2/3 sm:w-auto ${
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
                              className={`flex-shrink-0 sm:w-4 sm:h-4 lg:w-6 lg:h-6 sm:ml-4 md:ml-0 lg:ml-0 ${
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
