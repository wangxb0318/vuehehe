import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import './assets/css/base.css'

import './assets/js/font'

import router from './plugins/router'

import axios from './plugins/axios'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
