// Only two plans are shown (Starter + Pro), monthly billing only. Annual
// pricing and the Premium plan were removed as unused; re-add here if they
// come back (and add the matching PUBLIC_* price-id env vars).
const plans = [
  {
    name: "STARTER",
    description: "Perfect for very small teams",
    price: { monthly: "Free" },
    buttonText: "Get started for free",
    type: "plan",
    id: { monthly: `${import.meta.env.PUBLIC_STARTER_PLAN}` },
    highlight: false,
    features: {
      Users: ["Up to 3 guards", "Unlimited admin users"],
      Location: ["Up to 5 locations"],
      "Shift management": ["Basic clock-in/out"],
      "Task management": [
        "Up to 5 checkpoints",
        "Upload 2 images per checkpoint",
        "Unlimited tours and patrols",
      ],
      Safety: ["Live GPS tracking for guards", "Emergency call support"],
      Reporting: [
        "Incident reporting",
        "Activity tracking",
        { text: "PDF report exports", included: false },
      ],
      "Schedule management": [
        { text: "Unlimited schedules", included: false },
        { text: "Unlimited shifts", included: false },
      ],
    },
  },
  {
    name: "Pro",
    description: "Excellent value for growing teams",
    price: { monthly: "$8" },
    buttonText: "Go pro with a 2 week trial",
    type: "plan",
    id: { monthly: `${import.meta.env.PUBLIC_PROFESSIONAL_PLAN_MONTHLY}` },
    highlight: true,
    features: {
      Users: ["Unlimited guards", "Unlimited admin users"],
      Location: ["Unlimited locations"],
      "Shift management": ["Clock-in/out with GPS"],
      "Task management": [
        "Unlimited checkpoints",
        "Upload 2 images per checkpoint",
        "Unlimited tours and patrols",
      ],
      Safety: ["Live GPS tracking for guards", "Emergency call support"],
      Reporting: [
        "Incident reporting",
        "Activity tracking and logs",
        "PDF report exports",
      ],
      "Schedule management": ["Unlimited schedules", "Unlimited shifts"],
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
];

export { plans, categories };
