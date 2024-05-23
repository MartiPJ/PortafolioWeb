import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary: "#1ABC9C",
        darkBg: "#131424"
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg,rgba(40, 55, 71, 0.5) -5.91%, rgba(72, 201, 176, 0.2) 111.58%)",

      },
    },
  },
  plugins: [],
};
export default config;
