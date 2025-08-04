module.exports = {
  darkMode: 'class',
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        // Ensure these colors have dark variants
        slate: {
          800: '#1e293b',
          900: '#0f172a',
        }
      }
    },
  },
  plugins: [],
}