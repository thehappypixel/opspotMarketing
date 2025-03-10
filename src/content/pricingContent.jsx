const plans = [
  {
    name: "STARTER",
    description: "Everything you need to begin",
    price: { monthly: "Free", annual: "Free" },
    buttonText: "Get started with free",
    type: "plan",
    id: {
      monthly: `${process.env.REACT_APP_STARTER_PLAN}`,
      yearly: `${process.env.REACT_APP_STARTER_PLAN}`,
    },
    highlight: false,
    features: {
      Users: ["Up to 3 field users", "Unlimited ops users"],
      Location: ["5 locations"],
      "Shift management": [
        "Clock in and out",
        // "Break management"
      ],
      "Task management": [
        "5 checkpoints",
        "2 images per checkpoint",
        "Unlimited tours",
      ],
      Safety: ["Live GPS tracking", "Emergency calls"],
      Reporting: ["Incident reports", "Activity tracking"],
      // "Data & Security": [],
      // "Branding & integrations": [],
    },
  },
  {
    name: "Pro",
    description: "Best value for money",
    price: { monthly: "$250", annual: "$199" },
    buttonText: "Start 2 week trial",
    type: "plan",
    id: {
      monthly: `${process.env.REACT_APP_PROFESSIONAL_PLAN_MONTHLY}`,
      yearly: `${process.env.REACT_APP_PROFESSIONAL_PLAN_YEARLY}`,
    },
    highlight: true,
    features: {
      Users: ["Up to 10 guards", "Unlimited ops users"],
      Location: ["Unlimited locations"],
      "Shift management": [
        "Clock in and out",
        // "Break management",
        // "Geo fencing",
      ],
      "Task management": [
        "Unlimited checkpoints",
        "2 images per checkpoint",
        "Unlimited tours",
      ],
      Safety: [
        "Live GPS tracking",
        "Emergency calls",
        // "Lone worker",
        // "Person down",
      ],
      Reporting: [
        "Incident reports",
        "Activity tracking",
        // "Starter email & PDF reports",
        // "Custom email & PDF reports",
      ],
      // "Data & Security": ["Offline mode"],
      // "Branding & integrations": [],
    },
  },
  {
    name: "Premium",
    description: "Get the most out of Opspot",
    price: { monthly: "$400", annual: "$350" },
    buttonText: "Start 2 week trial",
    type: "plan",
    id: {
      monthly: `${process.env.REACT_APP_PREMIUM_PLAN_MONTHLY}`,
      yearly: `${process.env.REACT_APP_PREMIUM_PLAN_YEARLY}`,
    },
    highlight: false,
    features: {
      Users: ["Up to 25 guards", "Unlimited ops users"],
      Location: ["Unlimited locations"],
      "Shift management": [
        "Clock in and out",
        // "Break management",
        // "Geo fencing",
      ],
      "Task management": [
        "Unlimited checkpoints",
        "5 images per checkpoint",
        "Unlimited tours",
      ],
      Safety: [
        "Live GPS tracking",
        "Emergency calls",
        // "Lone worker",
        // "Person down",
      ],
      Reporting: [
        "Incident reports",
        "Activity tracking",
        // "Starter email & PDF reports",
        // "Custom email & PDF reports",
        // "Scheduled reporting",
      ],
      // "Data & Security": ["Offline mode", "SSO"],
      // "Branding & integrations": ["Custom branding"],
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
  // "Data & Security",
  // "Branding & integrations",
];

export { plans, categories };
