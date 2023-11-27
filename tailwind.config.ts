import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      neutral: {
        0: "#ffffff",
        50: "#F4F4F4",
        100: "#E7E7E7",
        200: "#D8D8D8",
        300: "#B1B0B0",
        400: "#808080",
        500: "#3F3F3F",
        600: "#2B2B2B",
        700: "#232323",
        800: "#141414",
        900: "#000000",
        "black-rgba": "rgba(0, 0, 0, 0.5)",
      },
      purple: {
        50: "#F3F0FF",
        100: "#E5DEFF",
        200: "#AC97FF",
        300: "#8364FF",
        400: "#5B35F3",
        500: "#4405CA",
        600: "#2D1169",
        700: "#1E014F",
        "gradient-1": "rgba(91, 53, 243, 0.8)",
      },
      blue: {
        100: "#D9EDFF",
        200: "#95CCFF",
        300: "#3EA7FF",
        400: "#2887DF",
        info: "#007AFF",
        500: "#0065C2",
        600: "#003F7A",
        700: "#007AFF",
      },
      teal: {
        100: "#E6FAFF",
        200: "#B7F2FF",
        300: "#6BE4FF",
        400: "#42C9E7",
        500: "#119EBD",
        600: "#00768F",
      },
      red: {
        100: "#FFDFDF",
        200: "#FFB0B0",
        300: "#FF8383",
        400: "#FF5050",
        500: "#F2262E",
        error: "#ED0B19",
      },
      yellow: {
        100: "#FFF9BE",
        200: "#FFF384",
        300: "#FFEA28",
        400: "#F0D800",
        500: "#DBB803",
      },
      green: {
        100: "#EDFFAD",
        200: "#E2FF7B",
        300: "#D2FA47",
        400: "#BFEE1D",
        500: "#A1DA01",
        600: "#83D202",
        success: "#83C918",
      },
      gray: {
        100: "#F4F4F4",
        200: "#D8D8D8",
        300: "#B1B0B0",
        400: "#808080",
        500: "#3F3F3F",
        600: "#2B2B2B",
      },
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        lalia: ["var(--font-laila)"],
        space_grotesk: ["var(--font-space_grotesk)"],
      },
    },
    boxShadow: {
      default: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    },
  },
  plugins: [],
};
export default config;
