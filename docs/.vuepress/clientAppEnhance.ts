import { defineClientAppEnhance } from '@vuepress/client'
import Synta from './components/global/Synta.vue'
import HomeHeader from './components/global/HomeHeader.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('Synta', Synta)
  app.component('HomeHeader', HomeHeader)
})