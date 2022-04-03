import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import challenges from './challenge-data.js'

let data = {
  challenges: challenges
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
