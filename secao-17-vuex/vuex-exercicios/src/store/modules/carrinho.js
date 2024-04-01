export default {
    namespaced: true,

    state: {
        produtos: [],
    },

    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },

    // Especialistas em mudar store (SEM regras de negócios)
    mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        },
    },

    // As regras de negócios DEVEM estar nas actions. Utilize assíncronismo aqui.
    actions: {
        // PADRÃO
        // adicionarProduto(context, payload) {
        //     setTimeout(() => {
        //         context.commit("adicionarProduto", payload)
        //     }, 1000);
        // }

        adicionarProduto({ commit }, payload) {
            setTimeout(() => {
                commit("adicionarProduto", payload)
            }, 1000);
        },

        /* ===== Passando a action para o ROOT (action global) =====
        adicionarProduto: {
            root: true,     
            // DEESTRUCTURING: obtendo o commit direto do contexto.
            handler({ commit }, payload) {
                setTimeout(() => {
                    commit("adicionarProduto", payload)
                }, 1000);
            }
        }
        */
            
    }
}