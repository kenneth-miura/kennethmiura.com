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
      },
      // See https://stackoverflow.com/questions/77506974/integrating-next-js-font-variables-with-storybook-in-a-tailwindcss-enabled-next
      fontFamily: {
        firaCode: ["var(--fira-code-default)", 'sans-serif'],
        inter: ["var(--inter-default)", 'sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
