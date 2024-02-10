import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter("countWordSize", function(value) {
	let array = value.split(" ")
		
	array.forEach((word, index) => {
		array[index] = `${word} (${word.length})`
	});

	return array.join(" ")
})

new Vue({
	render: h => h(App),
}).$mount('#app')
