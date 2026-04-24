import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        flame: "#FF4500",
        ember: "#FF6B00",
        gold: "#FFB800",
        saffron: "#FF9500",
        charcoal: "#0A0A0A",
        "dark-1": "#111111",
        "dark-2": "#181818",
        "dark-3": "#222222",
        "dark-card": "#1A1A1A",
        smoke: "#2A2A2A",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        accent: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      backgroundImage: {
        "flame-gradient": "linear-gradient(135deg, #FF4500, #FFB800)",
        "dark-gradient": "linear-gradient(180deg, #0A0A0A 0%, #181818 100%)",
        "card-gradient": "linear-gradient(145deg, #1A1A1A, #222222)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "slide-up": "slideUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 69, 0, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 69, 0, 0.8)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      boxShadow: {
        flame: "0 0 30px rgba(255, 69, 0, 0.3)",
        "flame-lg": "0 0 60px rgba(255, 69, 0, 0.4)",
        "gold-glow": "0 0 30px rgba(255, 184, 0, 0.3)",
        card: "0 8px 32px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
