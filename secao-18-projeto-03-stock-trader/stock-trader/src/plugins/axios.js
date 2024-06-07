import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = "https://curso-vue2-a1b54-default-rtdb.firebaseio.com/"

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})