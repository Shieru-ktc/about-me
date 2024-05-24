import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#f9fafb",
          100: "#f3f6f8",
          200: "#e5ebf1",
          300: "#d6e1ea",
          400: "#b9cddc",
          500: "#9cb9ce",
          600: "#8ca7ba",
          700: "#748fa1",
          800: "#5c7788",
          900: "#4a6270",
        },
        secondary: {
          50: "#f9fafb",
          100: "#f3f6f8",
          200: "#e5ebf1",
          300: "#d6e1ea",
          400: "#b9cddc",
          500: "#9cb9ce",
          600: "#8ca7ba",
          700: "#748fa1",
          800: "#5c7788",
          900: "#4a6270",
        },
        success: {
          50: "#f3faf7",
          100: "#e0f5eb",
          200: "#b8e7cf",
          300: "#8ad9b2",
          400: "#3ecf8a",
          500: "#02c561",
          600: "#02b456",
          700: "#029b4a",
          800: "#027c3c",
          900: "#015e2f",
        },
        danger: {
          50: "#fdf2f2",
          100: "#fde8e8",
          200: "#f8b4b4",
          300: "#f17f7f",
          400: "#e93f3f",
          500: "#e00000",
          600: "#c90000",
          700: "#a70000",
          800: "#8a0000",
          900: "#700000",
        },
        warning: {
          50: "#fdf8f1",
          100: "#faeddb",
          200: "#f3d6b2",
          300: "#eccf8c",
          400: "#e0b84a",
          500: "#dca30a",
          600: "#c49209",
          700: "#a47b07",
          800: "#876406",
          900: "#6f5205",
        }
      }
    },
  },
  plugins: [],
};
export default config;
