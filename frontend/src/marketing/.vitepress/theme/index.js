import 'tailwindcss/dist/tailwind.css'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Lib from '../../../lib/index.js'
import Browser from '../components/Browser.vue'
import './custom.css'

console.log(Lib)

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(Lib)
    app.component('browser', Browser)
  }
}
