new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
    computed: {
        resultado() {
            return this.valor !== 37 ? "Valor nao e 37!" : "Valor e 37!"
        }
    },
    // Importante tomar cuidado para watches não gerarem reações em cadeia indesejadas ou loops infinitos.
    watch: {
        resultado() {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    }
});