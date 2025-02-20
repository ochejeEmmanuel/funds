 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        slideLeft: {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        slideRight: {
          "0%": { transform: "translateX(50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        bounceIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
          "100%": { transform: "scale(1)" }
        },
        zoomIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        rotateIn: {
          "0%": { transform: "rotate(-10deg)", opacity: "0" },
          "100%": { transform: "rotate(0)", opacity: "1" }
        }
      },
      animation: {
        "slide-up": "slideUp 0.5s ease-in-out forwards",
        "slide-left": "slideLeft 0.5s ease-in-out forwards",
        "slide-right": "slideRight 0.5s ease-in-out forwards",
        "fade-in": "fadeIn 1s ease-in-out forwards",
        "bounce-in": "bounceIn 0.6s ease-in-out forwards",
        "zoom-in": "zoomIn 0.5s ease-in-out forwards",
        "rotate-in": "rotateIn 0.6s ease-in-out forwards"
      }
    },
  },
  plugins: [],
}