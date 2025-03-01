import React from "react";
import { Link } from "react-router-dom";

const PricingFAQGrid = () => {
  // Example data – replace with your own
  const cards = [
    {
      title: "What form of payments do you accept?",
      text: "We accept payments via major credit cards including Visa, Mastercard, American Express, and Discover. Our transactions are processed securely through Stripe.",
    },
    {
      title: "What if my trial has run out but I need more time?",
      text: "If your trial period expires, you can upgrade to a paid plan at any time. We also offer flexible options to extend your trial if needed.",
    },
    {
      title: "Do you offer refunds?",
      text: "Yes, we offer refunds under certain conditions. Please review our refund policy or contact support for more details.",
    },
    {
      title: "How do I update my billing information?",
      text: "You can update your billing information directly from your account settings. Changes will be processed securely through Stripe.",
    },
    {
      title: "How do I cancel my subscription?",
      text: (
        <>
          You can cancel your subscription at any time by downgrading to a free
          account. Please{" "}
          <Link to="/contact" className="text-blue-500 hover:underline">
            contact us
          </Link>{" "}
          if you want to remove your account entirely.
        </>
      ),
    },
    {
      title: "Is my payment information secure?",
      text: "Absolutely. We use Stripe's robust encryption and security measures to ensure your payment details remain safe.",
    },
  ];

  return (
    <div className="mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg border border-gray-600 transition duration-200"
          >
            <h3 className="text-sm font-bold mb-2 text-white">{card.title}</h3>
            <p className="text-xsm text-gray-200">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingFAQGrid;
