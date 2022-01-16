module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        appear: "appear 3s linear",
      },
      keyframes: {
        appear: {
          "100%": { transform: "translateY(200px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
