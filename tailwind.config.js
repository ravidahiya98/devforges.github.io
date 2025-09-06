/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: '#ffffff',
        secondary: '#ecf4f7',
        accent: '#fae7c9',
        'accent-alt': '#f8d78f',
        'text-primary': '#39404b',
        'text-primary-alt': '#1a1a1a',
        'text-secondary': '#708090',
        'text-secondary-alt': '#abbbc0',
        olive: '#6f6134',
        'teal-blue': '#3a7ca5',
        'muted-cyan': '#5fa8a7',
        avocado: '#72891b',
        'chili-red': '#cb2602',
        burgundy: '#910029',
        
        // Dark mode colors (mapped to appropriate semantic names)
        'dark-primary': '#1a1a1a',
        'dark-secondary': '#39404b',
        'dark-accent': '#6f6134',
        'dark-text-primary': '#ffffff',
        'dark-text-secondary': '#e1c68f',
        'dark-text-secondary-alt': '#fae7c9',
        peach: '#f8d78f',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [],
};