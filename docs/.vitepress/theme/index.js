import 'tailwindcss/dist/tailwind.css'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
// import Breezy from '/@breezy/index.js'
import Browser from '../components/Browser.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    // app.use(Breezy)
    app.component('browser', Browser)
  }
}
