<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto" :variant="mensagem.tipo">
			{{ mensagem.texto }}
		</b-alert>

		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o Nome"></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="text" size="lg" v-model="usuario.email" placeholder="Informe o E-mail"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
			<b-button @click="obterUsuarios" size="lg" variant="success" class="ml-2">Obter Usuários</b-button>
		</b-card>

		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: </strong> {{ usuario.nome }} <br>
				<strong>E-mail: </strong> {{ usuario.email }} <br>
				<strong>Id: </strong> {{ id }} <br>
				<b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" class="ml-2" @click="excluir(id)">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
import axios from "axios" // Acessando axios localmente.

export default {
	data() {
		return {
			usuarios: [],
			id: null,
			usuario: {
				nome: "",
				email: ""
			},
			mensagens: []
		}
	},

	methods: {
		limpar() {
			this.usuario.nome = ""
			this.usuario.email = ""
			this.id = null
			this.mensagens = []
		},

		carregar(id) {
			this.id = id
			this.usuario = { ...this.usuarios[id] }
		},
		
		excluir(id) {
			this.$http.delete(`/usuarios/${id}.json`)
			// this.$http.delete(`/usuarios/${id}.`)   // Delete com erro para teste do catch.
				.then(() => {
					this.limpar()
					this.obterUsuarios()
					this.mensagens.push({
						texto: "Usuário excluído com sucesso!",
						tipo: "success"
					})
				})
				.catch(err => {
					this.mensagens.push({
						texto: "Problema para excluir!",
						tipo: "danger"
					})
				})
		},

		salvar() {
			const metodo = this.id ? "patch" : "post"
			const finalUrl = this.id ? `/${this.id}.json` : ".json"

			this.$http[metodo](`usuarios${finalUrl}`, this.usuario)
				.then(_ => {
					this.limpar()
					this.obterUsuarios()
					this.mensagens.push({
						texto: "Operação Realizada com sucesso!",
						tipo: "success"
					})
				})
		},

		obterUsuarios() {
			// A omissão é tratada como um GET.
			this.$http("usuarios.json").then(res => {
				this.usuarios = res.data
			})
			// Axios localmente.
			// axios("https://curso-vue2-a1b54-default-rtdb.firebaseio.com/usuarios.json").then(res => {
			// 	this.usuarios = res.data
			// })
		}
	}

	// created() {
	// 	this.$http.post("usuarios.json", {
	// 		nome: "Maria",
	// 		email: "maria_maria@gmail.com"
	// 	}).then(res => console.log(res))
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
