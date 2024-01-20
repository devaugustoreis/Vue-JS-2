new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert("O botão foi clicado!")
        },
        atualizarValor(e) {
            this.valor = e.target.value
        }
    }
})