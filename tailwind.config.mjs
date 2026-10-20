import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#16A34A',     // Verde vibrante de ação (Green 600)
        secondary: '#064E3B',   // Verde escuro nobre (Emerald 900)
        accent: '#022C22',      // Verde floresta profundo (Emerald 950)
        brand: {
          light: '#F0FDF4',     // Fundo verde muito suave (Green 50)
          border: '#BBF7D0',    // Borda verde clara (Green 200)
          green: '#16A34A',
          dark: '#064E3B',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '2.5rem',
          xl: '3rem',
        },
      },
    },
  },
  plugins: [typography],
};
