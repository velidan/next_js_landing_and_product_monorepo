// Example preset
module.exports = {
  relative: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../foundation/src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
    },
    screens: {
      xs: '640px',
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1536px',
    },
    extend: {
      flexGrow: {
        2: '2',
        3: '3',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
      colors: {
        primary: 'purple',
        secondary: 'orange',
      },
    },
  },
  plugins: [],
};
