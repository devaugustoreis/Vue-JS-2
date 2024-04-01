export default {
    state: {
        quantidade: 1,
        preco: 10
    },

    // Especialistas em mudar store (SEM regras de negócios)
    mutations: {
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        }
    }
}