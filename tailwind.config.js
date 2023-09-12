/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#1264B0',
          'secondary': '#ffffff',
          'success': '#16a34a',
          'warning': '#fbbf24',
          'error': '#dc2626',
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide')
  ],
};

