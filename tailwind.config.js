module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      white: "#ffffff",
      "gray-25": "#fcfcfc",
      "gray-50": "#f5f5f5",
      "gray-100": "#dfe0e2",
      "gray-200": "#caced7",
      "gray-300": "#b5bacc",
      "gray-400": "#9296a7",
      "gray-500": "#767987",
      "gray-600": "#737479",
      "gray-700": "#48494d",
      "gray-800": "#26262a",
      "gray-900": "#1e1f21",
      black: "#000000",

      "brand-25": "#e5ebff",
      "brand-50": "#d6dfff",
      "brand-100": "#a8bbfd",
      "brand-primary": "#5177fc",
      "brand-200": "#345ce4",

      "brand-secondary-25": "#ffeae3",
      "brand-secondary-50": "#f7c0b0",
      "brand-secondary-100": "#f68b6a",
      "brand-secondary": "#ec5e33",
      "brand-secondary-200": "#ce4f28",

      success: "#30c018",
      success100: "#a6e09d",
      alert: "#eee61d",
      alert100: "#f2ef9e",
      danger: "#ff511b",
      danger100: "#f9b49e",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    dropShadow: {
      100: "0 2px 4px rgba(177, 182, 202, 0.7)",
      200: "0 4px 8px rgba(177, 182, 202, 0.7)",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontSize: {
        xxs: "12px",
        xs: "14px",
        sm: "16px",
        md: "20px",
        lg: "36px",
        xl: "50px",
        xxl: "60px",
      },
    },
  },
  darkMode: "false",
};
