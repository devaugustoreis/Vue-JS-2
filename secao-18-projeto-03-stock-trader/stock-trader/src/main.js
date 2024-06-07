import Vue from 'vue'
import App from './App.vue'
import "./style.css"
import router from './router'
import store from './store/store'

import "./plugins/axios" 

Vue.config.productionTip = false

Vue.filter("R$", function(value) {
  value = value.toFixed(2)
  return `R$ ${value.replace(".", ",")}`
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
