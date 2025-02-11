import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(4, 30, 35, 1)",
        foreground: "rgba(8, 37, 43, 1)",
        primary: "rgba(36, 160, 181, 1)",
        secondary: "rgba(14, 70, 79, 1)",
        tertiary: "rgba(4, 30, 35, 1)",
        fade: "rgba(179, 179, 179, 1)",
        black: "rgba(10, 12, 17, 1)",
        grey: 'rgba(250, 250, 250, 1)'
      },
      fontFamily: {
        jeju: ["var(--font-myeongjo)"],
        roboto: ["var(--font-roboto)"],
        roadrage: ["var(--font-road-rage)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
