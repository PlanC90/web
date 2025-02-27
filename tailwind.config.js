/** @type {import('tailwindcss').Config} */
    export default {
      content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
      theme: {
        extend: {
          colors: {
            blue: {
              500: '#3b82f6',
            },
          },
          animation: {
            'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          },
          backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          },
        },
      },
      plugins: [],
    };
