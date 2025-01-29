/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      container: {
        // Customize the container for the xl breakpoint
        screens: {
          xl: '1200px',
        },
      },
    },
  },
  plugins: [],
};