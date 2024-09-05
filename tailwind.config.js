/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this pattern if necessary
    "./public/index.html", // If you use Tailwind classes in public/index.html
  ],
  theme: {
    extend: {
      colors: {
        "bg-red": "#E53935", // Background color
        "font-yellow": "#FFEB3B", // Font color

        "bg-champagne": "#e1f0e5", // Background champagne color
        "border-muted-gold": "#D4AF37", // Border color
      },
    },
  },
  plugins: [],
};
