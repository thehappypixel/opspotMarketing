const plans = [
  {
    name: "STARTER",
    description: "Great to get started",
    price: "FREE",
    buttonText: "Get started with FREE",
    type: "plan",
    highlight: false,
    features: {
      Users: ["Up to 3 field users", "Unlimited ops users"],
      Location: ["5 locations"],
      "Shift management": ["Clock in and out", "Break management"],
      "Task management": [
        "10 checkpoints per location",
        "2 images per checkpoint",
        "3 tours per location",
      ],
      Safety: ["Live GPS tracking", "Emergency calls"],
      Reporting: [
        "Incident reports",
        "Activity tracking",
        "Starter email & PDF reports",
      ],
      "Data & Security": [],
      "Branding & integrations": [],
    },
  },
  {
    name: "Pro",
    description: "Best for small teams",
    price: "$10 USD / user",
    buttonText: "Get started with Pro",
    type: "plan",
    highlight: true,
    features: {
      Users: ["As many as you pay for", "Unlimited ops users"],
      Location: ["15 locations"],
      "Shift management": [
        "Clock in and out",
        "Break management",
        "Geo fencing",
      ],
      "Task management": [
        "50 checkpoints per location",
        "2 images per checkpoint",
        "3 tours per location",
      ],
      Safety: [
        "Live GPS tracking",
        "Emergency calls",
        "Lone worker",
        "Person down",
      ],
      Reporting: [
        "Incident reports",
        "Activity tracking",
        "Starter email & PDF reports",
        "Custom email & PDF reports",
      ],
      "Data & Security": ["Offline mode"],
      "Branding & integrations": [],
    },
  },
  {
    name: "Business+",
    description: "Great to get started",
    price: "$15 USD / user",
    buttonText: "Get started with Business+",
    type: "plan",
    highlight: false,
    features: {
      Users: ["As many as you pay for", "Unlimited ops users"],
      Location: ["Unlimited locations"],
      "Shift management": [
        "Clock in and out",
        "Break management",
        "Geo fencing",
      ],
      "Task management": [
        "Unlimited checkpoints",
        "5 images per checkpoint",
        "Unlimited tours",
      ],
      Safety: [
        "Live GPS tracking",
        "Emergency calls",
        "Lone worker",
        "Person down",
      ],
      Reporting: [
        "Incident reports",
        "Activity tracking",
        "Starter email & PDF reports",
        "Custom email & PDF reports",
        "Scheduled reporting",
      ],
      "Data & Security": ["Offline mode", "SSO"],
      "Branding & integrations": ["Custom branding"],
    },
  },
];

const categories = [
  "Users",
  "Location",
  "Shift management",
  "Task management",
  "Safety",
  "Reporting",
  "Data & Security",
  "Branding & integrations",
];

export { plans, categories };
