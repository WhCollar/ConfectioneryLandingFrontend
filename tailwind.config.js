/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      cormorant: ['Cormorant', 'serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      greatVibes: ['Great Vibes', 'cursive'],
    },
    fontSize: {
      small: '13px',
      medium: '20px',
      large: '36px',
      'x-large': '42px',
      normal: '16px',
      huge: '42px',
    },
    extend: {
      colors: {
        primary: 'rgb(193, 157, 86)',
        gray: '#c8c8c8',
        'product-card-hover-placeholder': 'rgba(255, 255, 255, 0.9)',
        'cyan-bluish-gray': '#abb8c3',
        error: '#dc3232',
        'pale-pink': '#f78da7',
        'vivid-red': '#cf2e2e',
        'luminous-vivid-orange': '#ff6900',
        'luminous-vivid-amber': '#fcb900',
        'light-green-cyan': '#7bdcb5',
        'vivid-green-cyan': '#00d084',
        'pale-cyan-blue': '#8ed1fc',
        'vivid-cyan-blue': '#0693e3',
        'vivid-purple': '#9b51e0',
      },
    },
  },
  plugins: [],
};
