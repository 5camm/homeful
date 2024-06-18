const path = require('path')

module.exports = {
  title: 'Homeful 🏡',
  description:
    'A journey home',
  alias: {
    '/@breezy/': path.resolve(__dirname, '../../src')
  },
  themeConfig: {
    docsDir: 'docs',
    sidebar: [
      {
        text: 'Welcome Home',
        link: '/'
      },
      {
        text: 'Being Nothing',
        link: '/being-nothing/'
      },
      {
        text: 'Becoming The Black',
        link: '/becoming-the-black/'
      }
    ]
  }
}
