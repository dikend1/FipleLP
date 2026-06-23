/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0f",
        ink2: "#1c1d22",
        muted: "#6b7280",
        faint: "#9aa1ad",
        line: "#e6e8ec",
        line2: "#eef0f3",
        base: "#f2f3f5",
        base2: "#e9ebef",
        surface: "#ffffff",
        blue: "#2f6bff",
        blueDark: "#1f4fd6",
        blueSoft: "#eaf0ff",
        green: "#34c759",
        greenSoft: "#e6f8ec",
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Inter"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,11,15,0.03), 0 6px 20px rgba(11,11,15,0.05)",
        lift: "0 1px 3px rgba(11,11,15,0.04), 0 14px 40px -8px rgba(11,11,15,0.12)",
        device: "0 2px 6px rgba(11,11,15,0.05), 0 40px 80px -20px rgba(11,11,15,0.28)",
        glow: "0 30px 90px -30px rgba(47,107,255,0.45)",
        focus: "0 0 0 4px rgba(47,107,255,0.18)",
      },
      borderRadius: {
        xl2: "20px",
        xl3: "28px",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        rise: "rise 720ms cubic-bezier(0.22,1,0.36,1) both",
        ping2: "ping2 2.4s cubic-bezier(0,0,0.2,1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        ping2: {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "70%, 100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
