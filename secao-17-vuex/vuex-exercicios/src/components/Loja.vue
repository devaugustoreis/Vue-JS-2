<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
import { mapActions } from "vuex"

export default {
    data() {
        return {
            sequencia: 1,
        }
    },
    computed: {
        quantidade() {
            return this.$store.state.parametros.quantidade
        },
        preco() {
            return this.$store.state.parametros.preco
        }
    },
    methods: {
        ...mapActions("carrinho", ["adicionarProduto"]),

        // EQUIVALENTE AO CÓDIGO ACIMA
        // adicionarProduto(produto) {
        //     this.$store.dispatch("adicionarProduto", produto)
        // },

        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++

            // ==== MUTATIONS ====
            // this.$store.state.produtos.push(produto)
            // this.$store.commit("adicionarProduto", produto)
            
            // ==== ACTIONS ====
            // this.$store.dispatch("adicionarProduto", produto)
            this.adicionarProduto(produto)

            console.log(this.$store.getters.getNome)
            console.log(this.$store.getters.getNomeCompleto)
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
