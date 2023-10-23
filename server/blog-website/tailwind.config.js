/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#efe1b9', 
        secondary: '#4155a1', 
      },
    },
  },
  plugins: [],
}



