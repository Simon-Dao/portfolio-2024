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
        pm: "#FFFFFF",
        sd: "#858688",
        tt: "#A154F2",
        qt: "#1c1d20",
        pt: "#ff5b66",
        sdNoSize: "#FFFFFF",
      },
      fontSize: {
        title: "8rem",
        pm: "6rem",
        sd: "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
