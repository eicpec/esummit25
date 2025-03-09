export const plugins = [require('tailwind-scrollbar-hide')];
  
// In tailwind.config.js:
theme: {
  extend: {
    colors: {
      'electric-blue': '#00f3ff',
      'cyber-green': '#00ff88',
      'neon-purple': '#bc13fe',
    },
    animation: {
      'spin-slow': 'spin 3s linear infinite',
      'gradient-x': 'gradient-x 3s ease infinite',
      'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      'progress': 'progress 1.5s ease-in-out infinite',
    },
    keyframes: {
      'gradient-x': {
        '0%, 100%': { 'background-position': '0% 50%' },
        '50%': { 'background-position': '100% 50%' },
      },
      'progress': {
        '0%': { width: '0%' },
        '100%': { width: '100%' },
      }
    }
  }
}