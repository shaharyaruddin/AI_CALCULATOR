/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Ensure your HTML file is included
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        calculatorBg: "#1F2937", // Matches the calculator's background
        buttonPrimary: "#2563EB", // Blue buttons
        buttonSecondary: "#D97706", // Yellow buttons
        buttonDanger: "#DC2626", // Red buttons
        buttonSuccess: "#16A34A", // Green buttons
      },
      fontSize: {
        calculator: "1.25rem", // Custom size for calculator display
      },
      spacing: {
        button: "1rem", // Consistent button padding
      },
      borderRadius: {
        lg: "0.5rem", // Slightly rounded buttons
      },
    },
  },
  plugins: [],
};
