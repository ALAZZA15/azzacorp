/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        heading: ["'Outfit'", "sans-serif"],
      },
      colors: {
        // Cosmic background
        space: {
          DEFAULT: "#030A16",
          soft: "#081A33",
          deep: "#010610",
        },
        // Cyan accent (induk Azza)
        cosmic: {
          DEFAULT: "#7DD3FC",
          soft: "#BAE6FD",
          deep: "#0284C7",
        },
        // Mars red (Smart Key)
        mars: {
          DEFAULT: "#E5484D",
          soft: "#FCA5A5",
          deep: "#991B1B",
        },
        // Text
        bone: "#F1F5F9",
        dust: "#94A3B8",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "rise-in": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(125, 211, 252, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(125, 211, 252, 0.6)" },
        },
      },
      animation: {
        twinkle: "twinkle 3s ease-in-out infinite",
        drift: "drift 6s ease-in-out infinite",
        "rise-in": "rise-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};