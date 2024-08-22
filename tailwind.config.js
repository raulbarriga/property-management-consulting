const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      "open-menu": {
        "0%": {
          opacity: 0,
          transform: "translateX(-100%)",
        },
        "100%": {
          opacity: 1,
          transform: "translateX(0)",
        },
      },
      "close-menu": {
        "0%": { opacity: 1, transform: "translateX(0)" },
        "100%": { opacity: 0, transform: "translateX(-100%)" },
      },
    },
    animation: {
      "open-menu": "open-menu 0.5s ease-in-out forwards",
      "close-menu": "close-menu 0.5s ease-in-out forwards",
    },
  },
  plugins: [require("tailwindcss-animated")],
};
