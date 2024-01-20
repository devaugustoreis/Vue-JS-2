<template>
	<div id="app">
		<!-- ATENCAO! O array usuarios é uma referência, e não uma cópia (passagem por valor)! -->
		<!-- Isso significa que alterações feitas no componente filho, modificarão o array no componente pai (ou mesmo qualquer outro componente) -->
		<!-- Isto acontece pois, basicamente, "referencia" significa que está apontado para o mesmo lugar na memória -->
		<!-- Atributos primitivos normalmente são passados por valor, enquanto que os demais (por exemplo, arrays) são passados por referência! -->
		<usuario-lista :usuarios="usuarios" @usuarioSelecionado="selecionado = $event" />
		<!-- Uma alternativa caso não queiramos esse comportamento de referência, é utilizar um "clone" (que, nesse caso, pode ser feito com o operado spread). 
		<usuario-lista :usuarios="[...usuarios]" @usuarioSelecionado="selecionado = $event" /> -->
		<usuario-detalhe :selecionado="selecionado"/>
	</div>
</template>

<script>
import UsuarioLista from './components/UsuarioLista.vue'
import UsuarioDetalhe from './components/UsuarioDetalhe.vue'

export default {
	name: "app",
	components: { UsuarioLista, UsuarioDetalhe },
    data() {
        return {
            usuarios: [
                { id: 1, nome: 'Ana', idade: 31 },
                { id: 2, nome: 'Carlos', idade: 22 },
                { id: 3, nome: 'Daniel', idade: 40 },
                { id: 4, nome: 'Ema', idade: 17 },
                { id: 5, nome: 'Lia', idade: 28 }
            ],
			selecionado: ""
        }
    }
}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;

	display: flex;
	font-size: 2rem;
}

#app div {
	margin: 20px;
}
</style>
