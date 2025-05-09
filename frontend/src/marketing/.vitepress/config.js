const path = require('path')

module.exports = {
  title: '   🏩 Homeful',
  description: 'A journey home',
  // alias: {
  //   '@/lib/': path.resolve(__dirname, '../../lib')
  // },
  // vue: {
  //   template: {
  //     compilerOptions: {
  //       isCustomElement: (tag) => {
  //           return tag.startsWith('b-') // (return true)
  //       }
  //     }
  //   }
  // },
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
