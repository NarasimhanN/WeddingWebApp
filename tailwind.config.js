/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pinyon: ["Pinyon Script", "serif", "Forum", "sans-serif"],
      },
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },

      animation: {
        zoomIn: "zoomIn 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
