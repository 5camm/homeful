import 'tailwindcss/dist/tailwind.css'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Lib from 'lib'
import Browser from '../components/Browser.vue'

console.log(Lib)

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(Lib)
    app.component('browser', Browser)
  }
}
