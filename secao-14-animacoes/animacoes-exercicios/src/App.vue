<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">
			Mostrar Mensagem
		</b-button>

		<!-- 
			OBS: DESCOMENTAR A ANIMACAO / TRANSICAO QUE QUISER VERIFICAR O COMPORTAMENTO. 
		-->

		<!-- <transition name="fade">
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition> -->

		<!-- <transition name="slide-outsync">
			<b-alert variant="info" show v-if="exibir">
				Type = transition (o mais demorado, por padrão) <br>
				Fico na tela até a transition terminar (volto para a posição original)
			</b-alert>
		</transition> -->

		<!-- COMENTARIO
			Com o atributo "appear", ele fará a transição/animação no momento que a aplicação for carregada (por exemplo, caso o elemento já comece em tela) 
		-->
		<!-- <transition name="slide-outsync" type="animation" appear>
			<b-alert variant="info" show v-show="exibir2">
				Type = animation (setado via atributo) <br>
				Fico na tela até a animação terminar, ou seja, não chego a desaparecer por completo (opacity 0)
			</b-alert>
		</transition> -->

		<!-- COMENTARIO
			Integrando outro padrão de biblioteca com vue 
		-->
		<!-- <transition
			enter-active-class="animated bounce"
			leave-active-class="animated shake">
				<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition> -->

		<!-- <hr>
		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select> -->

		<!-- COMENTARIO
			Precisamos usar v-if abaixo, pois dentro de transition só pode ter um único elemento (não funciona com v-show). 
			MODES:
			out-in => Primeiro quem está saindo, sai. Depois quem está entrando, entra.
		-->
		<!-- <transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
			<b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
		</transition> -->

		<!-- 
			CICLO DE VIDA DE UMA TRANSITION
				before-enter / before-leave
				enter / leave
				after-enter / after-leave
				enter-cancelled / leave-cancelled
			Obs.: CSS = false significa que o css não irá influenciar a transição realizada via JS 
		-->
		<!-- <hr>
		<button @click="exibir2 = !exibir2">Alternar</button>
		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"

			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled">
				<div v-if="exibir2" class="box" :style="{width: `${larguraBase}px`}"></div>
		</transition> -->

		<!-- <hr>
		<div class="mb-4">
			<b-button variant="primary" class="mr-2" @click="componenteSelecionado = 'AlertaInfo'">Info</b-button>
			<b-button variant="warning" @click="componenteSelecionado = 'AlertaAdvertencia'">Advertência</b-button>
		</div>
		<transition name="fade" mode="out-in">
			<component :is="componenteSelecionado"></component>
		</transition> -->

		<!-- COMENTARIO
			Propriedade "tag" nos permite escolher qual será o elemento encapsulador de um transition group 
		-->
		<hr>
		<b-button @click="adicionarAluno" class="mb-4">Adicionar Aluno</b-button>
		<transition-group name="slide" tag="div">
			<b-list-group v-for="(aluno, i) in alunos" :key="aluno">
				<b-list-group-item @click="removerAluno(i)" class="slide-move">{{ aluno }}</b-list-group-item>
			</b-list-group>
		</transition-group>
	</div>
</template>

<script>
import AlertaAdvertencia from './AlertaAdvertencia.vue'
import AlertaInfo from './AlertaInfo.vue'

export default {
	components: {
		AlertaAdvertencia,
		AlertaInfo
	},
	data() {
		return {
			alunos: ["Roberto", "Julia", "Teresa", "Paulo"],
			msg: "Uma mensagem de informação para o usuário!",
			exibir: false,
			exibir2: true,
			tipoAnimacao: "fade",
			larguraBase: 300,
			componenteSelecionado: 'AlertaInfo'
		}
	},
	methods: {
		adicionarAluno() {
			const s = Math.random().toString(36).substring(2)
			this.alunos.push(s)
		},
		removerAluno(indice) {
			this.alunos.splice(indice, 1)
		},
		animarLargura(el, done, negativo) {
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase + 
					(negativo? -rodada * 10 : rodada * 10)
				el.style.width = `${novaLargura}px`
				rodada++
				if (rodada > 30) {
					clearInterval(temporizador)
					done() // Diz para o Vue quando a animação foi concluída.
				}
			}, 20)
		},
		beforeEnter(el) {
			console.log("beforeEnter")
			this.larguraBase = 0
			el.style.width = `${this.novaLargura}px`
		},
		enter(el, done) {
			console.log("enter")
			// done() // Diz para o Vue quando a animação foi concluída.
			this.animarLargura(el, done, false)
		},
		afterEnter(el) {
			console.log("afterEnter")
		},
		enterCancelled() {
			console.log("enterCancelled")
		},
		beforeLeave(el) {
			console.log("beforeLeave")
			this.larguraBase = 300
			el.style.width = `${this.novaLargura}px`
		},
		leave(el, done) {
			console.log("leave")
			this.animarLargura(el, done, true)
		},
		afterLeave(el) {
			console.log("afterLeave")
		},
		leaveCancelled() {
			console.log("leaveCancelled")
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
	font-size: 1.5rem;
}

.box {
	height: 100px;
	margin: 30px auto;
	background-color: lightgreen;
}

/*
Padrão Entrada => .v-enter, .v-enter-active, .v-enter-to 
Padrão Saída => .v-leave, .v-leave-active, .v-leave-to
Porém, ao dar-se um "name" a transição, "v" é substituído por este "name".
*/

.fade-enter {
	opacity: 0;
}

.fade-enter-active {
	transition: opacity 0.7s;
}

.fade-enter-to {
	opacity: 1; /* Pode ser omitido, pois 1 é o padrão. */
}

.fade-leave {
	opacity: 1;
}

.fade-leave-active {
	transition: opacity 0.7s;
}

.fade-leave-to {
	opacity: 0;
}

@keyframes slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0); }
}

@keyframes slide-out {
	from { transform: translateY(0); }
	to { transform: translateY(40px); }
}

.slide-enter, .slide-leave-to, .slide-outsync-enter, .slide-outsync-leave-to {
	opacity: 0;
}

.slide-enter-active {
	animation: slide-in 0.7s ease;
	transition: opacity 0.7s;
}

.slide-leave-active {
	position: absolute;   /* Faz com que o elemento não ocupe espaço durante a transição de elementos de uma lista */
	width: 100%;
	animation: slide-out 0.7s ease;
	transition: opacity 0.7s;
}

.slide-move {
	transition: transform 0.7s;
}

/* Classe para mostrar comportamento de elementos com transição e animação dessincronizadas */
.slide-outsync-enter-active {
	animation: slide-in 0.7s ease;
	transition: opacity 0.7s;
}

.slide-outsync-leave-active {
	animation: slide-out 0.7s ease;
	transition: opacity 5s; /* Se os tempos diferirem, podemos especificar quem manda com o "type" na tag*/
}
</style>
