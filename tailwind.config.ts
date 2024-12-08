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
        background: "var(--background)",
        foreground: "var(--foreground)",
        insta: "var(--insta)",
      },
      backgroundImage: {
        bg: "url('/radisson-bg.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
