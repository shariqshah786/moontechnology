/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0C0E",
        "bg-alt": "#0E1114",
        panel: "#131719",
        "panel-2": "#181D20",
        border: "#232A2E",
        "border-soft": "#1B2124",
        text: "#ECEFF0",
        "text-dim": "#8E9BA1",
        "text-faint": "#57646A",
        brass: "#CE9F4C",
        "brass-bright": "#E6BB66",
        "brass-dim": "#7A6132",
        signal: "#5FCB8B",
        danger: "#D3695C"
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "2px",
        md: "2px",
        lg: "2px",
        xl: "2px",
        "2xl": "2px",
        full: "9999px"
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"]
      },
      maxWidth: {
        container: "1240px"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        jitter: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-1.5px)" },
          "75%": { transform: "translateX(1.5px)" }
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" }
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        jitter: "jitter 0.28s ease-in-out infinite",
        bob: "bob 4s ease-in-out infinite",
        pulseGlow: "pulseGlow 2s ease-in-out infinite",
        marquee: "marquee 28s linear infinite"
      }
    }
  },
  plugins: []
};
