import './style.css'
import Vue from 'vue'
import App from './App.vue'
import router from "./router"

Vue.config.productionTip = false

new Vue({
  // router: router,
  router, // Nova sintaxe ECMAScript5. Se chave e valor forem iguais, é possivel simplificar.
  render: h => h(App),
}).$mount('#app')
