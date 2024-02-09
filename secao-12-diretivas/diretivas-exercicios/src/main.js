import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive("destaque", {
	bind(el, binding) {
		// el.style.backgroundColor = "lightgreen"

		let atraso = 0
		if (binding.modifiers["atrasar"]) atraso = 3000

		setTimeout(() => {
			if (binding.arg === 'fundo') {
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}
		}, atraso)
	}
})

/* 
GATILHOS (HOOKS) DAS DIRETIVAS:

1 - BIND (el, binding, vnode) => quando a diretiva é interligada com o elemento html.
2 - INSERTED (el, binding, vnode) => quando o elemento é inserido no nó pai.
3 - UPDATE (el, binding, vnode, oldVNode) => quando o componente é atualizado (antes dos filhos serem atualizados)
4 - COMPONENTUPDATED (el, binding, vnode, oldVNode) => => quando o componente é atualizado (após os filhos serem atualizados)
5 - UNBIND (el, binding, vnode) => quando a diretiva é desvinculada do elemento.

Obs.: Utilizamos apenas o parâmetro "el" (referente ao elemento html). Os demais inclusive podem ser omitidos.
Devemos tratá-los (demais parâmetros) como somente leitura. Não devemos alterá-los sob NENHUMA circunstância.

binding se refere a informações vinculadas ao elemento. 
vnode se refere a criação de um nó virtual do elemento.
*/

new Vue({
	render: h => h(App),
}).$mount('#app')
