<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretiva v-text'"></p>
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>

		<hr>
		<p v-destaque="'coral'">Usando diretiva personalizada</p>
		<p v-destaque="cor">Usando diretiva personalizada</p>
		<p v-destaque:fundo="cor">Usando diretiva personalizada</p>
		<p v-destaque:fundo.atrasar="cor">Usando diretiva personalizada</p>

		<hr>
		<p v-destaque-local:fundo.atrasar.alternar="objeto">Usando diretiva personalizada local</p>

		<!-- <p v-diretiva:argumento.modificadores="'valor'"></p> -->
	</div>
</template>

<script>
export default {
	directives: {
		"destaque-local": {
			bind(el, binding) {
				const aplicarCor = cor => {
					if (binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}

				let atraso = 0
				if (binding.modifiers["atrasar"]) atraso = binding.value.atraso
				
				const cor1 = binding.value.cor1
				const cor2 = binding.value.cor2
				let corAtual = cor1 
				
				setTimeout(() => {
					if (binding.modifiers["alternar"]) {
						setInterval(() => {
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual)
						}, binding.value.intervalo)
					} else {
						aplicarCor(binding.value.cor1)
					}
				}, atraso)
			}
		}
	},
	data() {
		return {
			cor: "lightgreen",
			objeto: {
				cor1: "red",
				cor2: "blue",
				atraso: 5000,
				intervalo: 250
			}
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
