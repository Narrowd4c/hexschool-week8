/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '5rem'
      }
    },
    extend: {
      fontSize: {
        '3xl': ['2rem', 1.5],
        '6xl': ['4rem', 1.5]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        shrikhand: ['Shrikhand', 'cursive']
      },
      colors: {
        primary: {
          500: '#7000FF',
          600: '#6E01F8',
          700: '#380C7E',
          800: '#1F0F39',
          900: '#11002D'
        }
      }
    }
  },
  plugins: []
}
