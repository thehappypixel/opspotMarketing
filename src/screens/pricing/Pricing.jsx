import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { plans, categories } from "../../content/pricingContent";
import Navigation from "../../components/navigation";
import PricingFAQGrid from "./PricingFAQ";
import Footer from "../../components/footer";

const Toggle = ({ isAnnual, setIsAnnual }) => {
  return (
    <div className="flex justify-center mb-8">
      <label className="flex items-center space-x-2 mr-8 cursor-pointer">
        <input
          type="radio"
          name="billing"
          checked={!isAnnual}
          onChange={() => setIsAnnual(false)}
          className="form-radio text-black w-6 h-6"
        />
        <span
          className={`px-1 py-2 text-sm ${
            !isAnnual ? " text-white" : " text-white"
          }`}
        >
          Billed monthly
        </span>
      </label>

      <label className="flex items-center space-x-2 cursor-pointer ml-4">
        <input
          type="radio"
          name="billing"
          checked={isAnnual}
          onChange={() => setIsAnnual(true)}
          className="form-radio text-black w-6 h-6"
        />
        <span
          className={`px-1 py-2 text-sm ${
            isAnnual ? "text-white" : "text-white"
          }`}
        >
          Billed yearly
        </span>
      </label>
    </div>
  );
};

const PricingScreen = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      <Navigation />
      <div className="mt-24 py-16 sm:px-4 lg:px-24 w-full bg-black">
        <h2 className="text-xl leading-tight font-bold text-white text-center">
          Pricing
        </h2>
        <p className="pt-6 mb-12 text-md tracking-wider leading-snug font-normal text-white text-center">
          Simple pricing for solutions you actually need
        </p>
        <div>
          <Toggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
        </div>
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
                        <p className="text-xs font-medium">
                          {plan.description}
                        </p>
                        <p className="mt-4 text-md font-black">
                          {plan.id !== process.env.REACT_APP_STARTER_PLAN &&
                            "USD"}{" "}
                          {isAnnual ? plan.price.annual : plan.price.monthly}
                          {plan.id !== process.env.REACT_APP_STARTER_PLAN &&
                            " / month"}{" "}
                        </p>

                        <a
                          href={
                            process.env.REACT_APP_DOMAIN +
                            "/auth/register?priceId=" +
                            (isAnnual ? plan.id.yearly : plan.id.monthly)
                          }
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
                          plan.features[category].map(
                            (feature, featureIndex) => (
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
                                    plan.highlight
                                      ? "text-black"
                                      : "text-gray-200"
                                  }`}
                                >
                                  {feature}
                                </span>
                              </li>
                            )
                          )
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
        <div className="mt-32">
          <h3 className="text-center text-lg font-bold text-white">
            Frequently asked questions
          </h3>
          <p className="text-center text-sm text-white mt-4">
            Here are some common questions about our pricing.
          </p>
          <div className="pt-6">
            <PricingFAQGrid />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PricingScreen;
