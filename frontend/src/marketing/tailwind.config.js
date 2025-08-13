module.exports = {
  future: {},
  purge: ['./docs/**/*.vue'],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [],
  theme: {
    extend: {
      colors: {
        matrix: {
          bg:    '#0a0f0a',   // page background
          panel: '#0c1110',   // cards/panels
          grid:  '#0f1513',   // subtle sections
          line:  '#11331d',   // dividers
          neon:  '#39ff14',   // matrix green
          mint:  '#00ffd1',   // cyan accent
          acid:  '#b4ff39',   // lime accent
          ink:   '#cfe7d1'    // soft off-white for text
        }
      },
      boxShadow: {
        neon: '0 0 0 1px rgba(57,255,20,.35), 0 0 16px rgba(57,255,20,.25), inset 0 0 0 1px rgba(57,255,20,.2)',
        mint: '0 0 0 1px rgba(0,255,209,.35), 0 0 16px rgba(0,255,209,.25), inset 0 0 0 1px rgba(0,255,209,.2)'
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-glow': { textShadow: '0 0 10px rgba(57,255,20,.6), 0 0 20px rgba(57,255,20,.35)' },
        '.text-mint-glow': { textShadow: '0 0 10px rgba(0,255,209,.6), 0 0 20px rgba(0,255,209,.35)' },
      })
    }
  ]
}