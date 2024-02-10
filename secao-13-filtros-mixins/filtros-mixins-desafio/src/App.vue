<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{ frase | spacesToCommas }}</p>
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{ frase | countWordSize }}</p>
		<p>{{ 'tambem podemos usar tracos aqui' | count-word-size }}</p>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<p>{{ fraseComVirgulas }}</p>
		<p>{{ comprimentoPalavrasFrase }}</p>
	</div>
</template>

<script>
import frasesModificadasMixin from "./frasesModificadasMixin"

export default {
	mixins: [ frasesModificadasMixin ],
	filters: {
		spacesToCommas(value) {
			return value.replaceAll(" ", ",")
		}
	},
	data() {
		return {
			frase: "Esta é uma frase para testar filtros."
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
