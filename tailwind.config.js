/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        loudBlue: '#2EC7F6',
        softBeige: 'rgba(247, 245, 242, 1)',
      },
    },
  },
  plugins: [],
}

