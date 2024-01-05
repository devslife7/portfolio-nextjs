import type { Config } from "tailwindcss"

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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#FF9001",
          // DEFAULT: "#ffcd11",
          100: "#ffe1b9",
          200: "#ffcc8b",
          300: "#ffb85d",
          400: "#ffa42e",
          500: "#ff9000",
          600: "#ef8700",
          700: "#a25b00",
          800: "#744100",
          900: "#462700",
        },
      },
    },
  },
  plugins: [],
}
export default config
