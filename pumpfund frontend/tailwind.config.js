/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fdfdfd',
        surface: '#ffffff',
        primary: '#000000',
        secondary: '#333333',
        accent: '#2563eb', // A nice blue for links/buttons
        border: '#000000',
        paper: '#fdfdfd',
      },
      fontFamily: {
        hand: ['"Architects Daughter"', 'cursive'],
        secondary: ['"Patrick Hand"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'sketch': '2px 2px 0px 0px #000000',
        'sketch-hover': '4px 4px 0px 0px #000000',
        'sketch-lg': '6px 6px 0px 0px #000000',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)",
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(57, 255, 20, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(57, 255, 20, 0.6)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
