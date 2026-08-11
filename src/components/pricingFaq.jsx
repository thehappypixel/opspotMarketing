import React from "react";

const cards = [
  {
    title: "What form of payments do you accept?",
    text: "We accept payments via major credit cards including Visa, Mastercard, American Express, and Discover. Our transactions are processed securely through Stripe.",
  },
  {
    title: "How do I update my billing information?",
    text: "You can update your billing information directly from your account settings. Changes will be processed securely through Stripe.",
  },
  {
    title: "How do I cancel my subscription?",
    text: "You can cancel your subscription at any time by downgrading to a free account.",
  },
  {
    title: "Is my payment information secure?",
    text: "Absolutely. We use Stripe's robust encryption and security measures to ensure your payment details remain safe.",
  },
];

export default function PricingFAQGrid() {
  return (
    <div className="mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
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
}
