import { defineClientAppEnhance } from '@vuepress/client'
import Synta from './components/global/Synta.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('Synta', Synta)
})