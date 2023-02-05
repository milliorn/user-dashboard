/** @type {import('tailwindcss').Config} */
module.exports = {
  // By adding darkmode: 'class' to the config, you've instructed TailwindCSS to include all of the CSS utility classes for dark mode. This enables a dark variant that you can now add as classes to your React elements like className="bg-white dark:bg-gray-900" and the correct class will be provided when dark is active on your html element.
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
