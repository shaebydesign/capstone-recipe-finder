// tailwind.config.js
module.exports = {
  content: [
    './index.html', // Ensure you're targeting your HTML file
    './src/**/*.{js,jsx,ts,tsx}', // Include JSX/JS files from the src folder
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/hero-pattern.jpg')", // Reference the image from the public/assets folder
      },
    },
  },
  plugins: [],
};
