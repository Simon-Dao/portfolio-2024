import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-pm', 'text-qt', 'text-title', 'text-sd', // Add any other classes you need to safelist
    'bg-qt', 'text-pm', 'bg-pt', 'text-pt', 'bg-sd', 'text-sdNoSize', 'text-sdNoSize2'
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
        sdNoSize2: "#858688",
      },
      fontSize: {
        title: "6rem",
        pm: "6rem",
        sd: "1.5rem",
      },
      screens: {
        'xs': '600px',
        'sm': '740px',
        'md': '900px',
        'lg': '1280px',
        'xl': '1480px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
};

export default config;
