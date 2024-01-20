new Vue({
	el: '#desafio',
	data: {
		aplicarDestaque: false,
		aplicarEncolher: false,
		arrayClasses: ['fundo-amarelo', 'bordas-grossas'],
		classeDinamica: '',
		valor: false
	},
	methods: {
		iniciarEfeito() {
			this.aplicarDestaque = true
			setInterval(() => {
				this.aplicarDestaque = !this.aplicarDestaque
				this.aplicarEncolher = !this.aplicarEncolher
			}, 1500)
		},
		iniciarProgresso() {

		}
	}
})
