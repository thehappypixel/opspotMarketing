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
      Users: ["Up to 3 guards", "Unlimited admin users"],
      Location: ["Up to 5 locations"],
      "Shift management": [
        "Clock in and out",
        // "Break management"
      ],
      "Task management": [
        "5 checkpoints",
        "2 images per checkpoint",
        "Unlimited tours",
      ],
      "Schedule management": [
        { text: "Unlimited schedules", included: false },
        { text: "Unlimited shifts", included: false },
      ],
      Safety: ["Live GPS tracking", "Emergency calls"],
      Reporting: [
        // { text: "Incident reports", included: false },
        "Incident reports",
        "Activity tracking",
        { text: "PDF reports", included: false },
      ],
      // "Data & Security": [],
      // "Branding & integrations": [],
    },
  },
  {
    name: "Pro",
    description: "Best value for money",
    price: { monthly: "$8", annual: "$8" },
    buttonText: "Start 2 week trial",
    type: "plan",
    id: {
      monthly: `${process.env.REACT_APP_PROFESSIONAL_PLAN_MONTHLY}`,
      yearly: `${process.env.REACT_APP_PROFESSIONAL_PLAN_YEARLY}`,
    },
    highlight: true,
    features: {
      Users: ["As many guards as you need", "Unlimited admin users"],
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
        "PDF reports",
        // "Starter email & PDF reports",
        // "Custom email & PDF reports",
      ],
      "Schedule management": ["Unlimited schedules", "Unlimited shifts"],
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
      Users: ["Up to 25 guards", "Unlimited admin users"],
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
      "Schedule management": ["Unlimited schedules", "Unlimited shifts"],
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
  "Schedule management",
  // "Data & Security",
  // "Branding & integrations",
];

export { plans, categories };
