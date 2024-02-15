import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = "https://curso-vue2-a1b54-default-rtdb.firebaseio.com/"
// axios.defaults.headers.common["Authorization"] = "token"
// axios.defaults.headers.get["Accepts"] = "application/json"

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: "https://curso-vue2-a1b54-default-rtdb.firebaseio.com/",
            headers: {
                // "Authorization": "token"    // Qualquer tipo de requisição
                get: {
                    "Authorization": "token"
                }
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            // if (config.method == "post") {
            //     config.method = "put"
            // }
            return config
        }, error => Promise.reject(error)) // Opcional

        Vue.prototype.$http.interceptors.response.use(res => {
            // const array = []
            // for (let chave in res.data) {
            //     array.push({ id: chave, ...res.data[chave]})
            // }

            // res.data = array
            return res
        }, error => Promise.reject(error))
    }
})