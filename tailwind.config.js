/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          // Obsidian Deep Theme - Identidade Seu Pet Equilibrado
          bg: '#0C0E12',
          surface: '#14171C',
          card: '#14171C',
          cardHover: '#1B1E26',
          cardElevated: '#1B1E26',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(245, 186, 201, 0.35)',
          
          // Rose Pastel Acentos
          rose: '#F5BAC9',
          roseLight: '#FCE8EE',
          roseHover: '#F8CAD6',
          roseDark: '#2B181E',
          roseBorder: 'rgba(245, 186, 201, 0.28)',
          roseGlow: 'rgba(245, 186, 201, 0.25)',
          
          // Tipografia
          text: '#FFFFFF',
          textSecondary: '#9DA3B4',
          muted: '#6B7280',
          darkText: '#121418',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 35px -5px rgba(245, 186, 201, 0.28)',
        glowSm: '0 0 15px -3px rgba(245, 186, 201, 0.35)',
        rose: '0 10px 30px -5px rgba(245, 186, 201, 0.22)',
      },
      backgroundImage: {
        'rose-gradient': 'linear-gradient(135deg, #F5BAC9 0%, #F8CAD6 100%)',
        'dark-radial': 'radial-gradient(circle at top center, rgba(245, 186, 201, 0.08) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};
