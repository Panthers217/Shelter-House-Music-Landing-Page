/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#FAF1DC', // Cream Cloud (main background)
          100: '#F7DEC2', // Warm Sand
          200: '#FAD39D', // Honey Glow
          300: '#EDC9AB', // Apricot
          400: '#E4B790', // Peach Clay
          500: '#D08050', // Sunset Amber (PRIMARY CTA)
          600: '#C46F43',
          700: '#A85D38',
          800: '#8C4B2E',
          900: '#704025',
        },
        accent: {
          50:  '#F8F3ED',
          100: '#E9DDCF',
          200: '#D6C2A9',
          300: '#B79671', // Hill Taupe
          400: '#9F7A58',
          500: '#845632', // Cedar Brown (HEADINGS)
          600: '#72492B',
          700: '#5E3C24',
          800: '#4A2F1C',
          900: '#372315',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(132, 86, 50, 0.12)',
        lift: '0 12px 40px rgba(132, 86, 50, 0.18)',
      },
    },
  },
  plugins: [],
}
