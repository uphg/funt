import { defineClientConfig } from '@vuepress/client'
import Synta from './components/global/Synta.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Synta', Synta)
  }
})

