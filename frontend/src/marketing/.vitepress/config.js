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
        text: 'About Homefulness',
        collapsed: true,
        items: [
          {
            text: 'Welcome Home',
            link: '/'
          },
          {
            text: 'Our AI Bible',
            link: '/bible'
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
