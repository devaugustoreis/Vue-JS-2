<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="E-mail">
					<input type="text" v-model.lazy="usuario.email">
					<!-- Modificadores: 
						lazy -> alteração é realizada somente após o "blur" (perda de foco do campo).
						trim -> remove espaços em branco no começo e fim (igual JS).
						number -> converte o valor (se válido) para number (equivalente a usar um parseFloat do JS). 
					-->
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model="usuario.senha">
				</Rotulo>
				<Rotulo nome="Idade">
					<input type="number" v-model="usuario.idade">
					<!-- Obs.: Mesmo com type="number", o valor de usuario.idade será uma string. -->
				</Rotulo>
				<Rotulo nome="Mensagem">
					<!-- Normalmente o conteudo de textarea fica dentro da tag, mas também podemos utilizar o v-model para o two-way data biding. -->
					<textarea name="" cols="30" rows="5" v-model="mensagem"></textarea>
				</Rotulo>
				<Rotulo nome="Características do Problema">
					<span class="mr-4">
						<input type="checkbox" value="reproduzivel" v-model="caracteristicas"> Reproduzível
					</span>
					<span>
						<input type="checkbox" value="intermitente" v-model="caracteristicas"> Intermitente
					</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span class="mr-4">
						<input id="web" type="radio" value="web" v-model="produto">
						<label for="web">Web</label>
					</span>
					<span class="mr-4">
						<input id="mobile" type="radio" value="mobile" v-model="produto">
						<label for="mobile">Mobile</label>
					</span>
					<span>
						<input id="outro" type="radio" value="outro" v-model="produto">
						<label for="outro">Outro</label>
					</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<select v-model="prioridadeSelecionada">
						<!-- Obs.: o valor apontado no selected possui prioridade sobre o valor apontado na propriedade "selected" das options. -->
						<option v-for="prioridade in prioridades" 
							:key="prioridade.codigo"
							:value="prioridade.codigo"
							:selected="prioridade.codigo === 3">
								{{ prioridade.codigo }} - {{ prioridade.nome }}
						</option>
						<!-- Se value for omitido, será utilizado o próprio valor interpolado como opcao -->
					</select>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<Escolha v-model="escolha"/>
				</Rotulo>
				<hr>
				<button @click.prevent="enviar">Enviar</button>
			</form>

			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="E-mail">
					<span>{{ usuario.email }}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{ usuario.senha }}</span>
				</Rotulo>
				<Rotulo nome="Idade">
					<span>{{ usuario.idade }} {{ tipoIdade }}</span>
				</Rotulo>
				<Rotulo nome="Mensagem">
					<!-- Preserva os espaços. -->
					<span style="white-space: pre;">{{ mensagem }}</span>
					<!-- Não preserva os espaços -->
					<span>{{ mensagem }}</span>
				</Rotulo>
				<Rotulo nome="Marque as Opções">
					<span>
						<ul>
							<li v-for="item in caracteristicas" :key="item">{{ item }}</li>
						</ul>
					</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span>{{ produto }}</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<span>{{ prioridadeSelecionada }} {{ tipoPrioridadeSelecionada }}</span>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<span>{{ escolha }}</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Escolha from './components/Escolha.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha },
	computed: {
		tipoIdade() {
			return typeof this.usuario.idade
		},
		tipoPrioridadeSelecionada() {
			return typeof this.prioridadeSelecionada
		}
	},
	data() {
		return {
			mensagem: "1 - teste \n2 - teste",
			caracteristicas: [],
			produto: "web",
			prioridadeSelecionada: 1,
			prioridades: [
				{ codigo: 1, nome: "Baixa" },
				{ codigo: 2, nome: "Moderada" },
				{ codigo: 3, nome: "Alta" }
			],
			usuario: {
				email: "",
				senha: "",
				idade: 25
			},
			escolha: true,
			enviado: false
		}
	},
	methods: {
		enviar() {
			this.enviado = true
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
