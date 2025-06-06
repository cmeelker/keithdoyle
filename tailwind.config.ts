import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "white-smoke": "#F5F5F5",
      },
    },
  },
  plugins: [],
};
export default config;
