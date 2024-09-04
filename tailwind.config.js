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
      screens: {
        "custom-headers": { min: "450px" }, // for headers
        "min-945px": "945px", // for hero , max: "639px"
        "custom-headers-xs": { min: "360px", max: "449px" }, // for headers
        "custom-about-xl": { max: "1199px" },
        "custom-about-lg": { max: "991px" },
        "custom-about-md": { max: "767px" },
        "custom-about-sm": { max: "575px" },
        "min-375px": "375px", // for contactUs , max: "639px"
        "custom-footer": { max: "379px" }, // custom range from 379px down
      },
      colors: {
        beige: {
          100: "#a29889",
        },
        "forest-green": "#2E4A32",
        "body-color": "#637381", // for paragraph text
      },
      width: {
        "custom-about-calc": "calc(((100% - 1140px) / 2) + 866px)",
        "custom-about-calc-sm": "calc(((100% - 340px) / 2) + 340px)",
        "custom-about-calc-md": "calc(((100% - 540px) / 2) + 540px)",
        "custom-about-calc-lg": "calc(((100% - 720px) / 2) + 584px)",
        "custom-about-calc-xl": "calc(((100% - 940px) / 2) + 671px)",
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
          "0%": {
            opacity: 1,
            transform: "translateX(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
        "close-menu": "close-menu 0.5s ease-in-out forwards",
      },
      boxShadow: {
        "faded-all": "inset 0 0 40px 16px #fff", // from https://codepen.io/burtclan/pen/PoOOey?editors=0100
      },
    },
    plugins: [require("tailwindcss-animated")],
  },
};
