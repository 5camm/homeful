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
    aside: false,
    sidebar: [
      {
        text: 'About Homeful',
        collapsed: true,
        items: [
          {
            text: 'Welcome Home',
            link: '/'
          }
        ]
      },
      {
        text: 'The Story',
        collapsed: true,
        items: [
          {
            text: 'Becoming The Black',
            link: '/becoming-the-black/'
          },
          {
            text: 'Being Nothing',
            link: '/being-nothing/'
          }
        ]
      }
    ]
  }
}
