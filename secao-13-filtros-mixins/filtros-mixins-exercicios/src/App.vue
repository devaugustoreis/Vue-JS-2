<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ usuarioLogado }}</p>
		<p>{{ cpf | cpf }}</p>
		<p>{{ '10020030040' | cpf | inverter }}</p>
		<!-- Obs.: Uma cadeia de filtros é executada na ordem, ou seja, o resultado do anterior passa para o próximo filtro. -->
		
		<input type="text" :value="cpf | cpf">
		<!-- Filtros são suportados na interpolacao via Double Mustache ou v-bind. Não funcionam com v-model -->

		<hr>
		<Frutas />

		<hr>
		<ul>
            <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
	</div>
</template>

<script>
import frutasMixin from "./frutasMixin"
import usuarioMixin from "./usuarioMixin"
import Frutas from "./Frutas.vue"

export default {
	components: { Frutas },
	mixins: [ frutasMixin, usuarioMixin ],
	filters: {
		cpf(valor) {
			const array = valor.split("")
			array.splice(3, 0, ".")
			array.splice(7, 0, ".")
			array.splice(11, 0, "-")
			return array.join("")
		}
	},
	data() {
		return {
			cpf: "10020030040",
			// Em caso de conflito com o mixin, propriedades definidas no próprio componente possuem prioridade.
			frutas: ["abacate"]
		}
	},
	created() {
        console.log("Created - App.vue")
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
	font-size: 1.5rem;
}

input {
	font-size: 1.5rem;
}
</style>
