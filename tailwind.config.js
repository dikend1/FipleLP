/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#111111",
        gray900: "#2a2a2a",
        gray700: "#555555",
        gray500: "#8b8b8b",
        gray300: "#d5d5d2",
        gray200: "#e8e8e4",
        gray100: "#f4f4f1",
        acid: "#d8ff62",
        accent: "#c9ff5a",
        lavender: "#b9c0ff",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "sans-serif"],
        body: ['"Manrope"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 30px 90px rgba(17, 17, 17, 0.12)",
        hard: "0 24px 0 rgba(17, 17, 17, 0.08)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        rise: "rise 700ms ease both",
        pulseGlow: "pulseGlow 2.8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-16px) rotate(2deg)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(216, 255, 98, 0)" },
          "50%": { boxShadow: "0 0 32px rgba(216, 255, 98, 0.28)" },
        },
      },
    },
  },
  plugins: [],
};
