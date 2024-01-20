<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ nome }}</strong></p>
        <p>Nome do Usuário: <strong>{{ inverterNome(nome) }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">(emissao evento) Reiniciar Nome</button>
        <button @click="mudarNomeFn()">(callback) Mudar para Augusto</button>
    </div>
</template>

<script>
import barramento from "@/barramento"

export default {
    props: {
        nome: {
            type: String,            // Pode-se usar array para definir múltiplos tipos.
            // required: true,       // Propriedade se torna obrigatória para carregar o componente.
            // default: "Anônimo"    // Caso não receba nenhum valor, este valor será usado.
            default: function() {    // Também é possível usar uma função para o default.
                return Array(10).fill(0).join(",")
            }
        },
        mudarNomeFn: Function,
        idade: Number 
    },
    data() {
        return {
            /* nome: "Este atributo entraria em conflito com a propriedade com o mesmo identificador." */
            nomeAlternativo: this.nome // Podemos acessar os props aqui sem problemas
        }
    },
    methods: {
        inverterNome() {
            return this.nome.split("").reverse().join("")
        },
        reiniciarNome() {
            const nomeAnterior = this.nome
            this.nome = "Pedro" // Altera apenas neste componente, ou seja, o filho.
            // $emit é uma função do vue. Serve para disparar um evento de mudança no componente pai.
            this.$emit("resetNome", this.nome)
            // Podemos emitir uma variável ou mesmo um objeto.
            this.$emit("objetoNome", {
                novo: this.nome,
                antigo: nomeAnterior
            })
        }
    },
    created() {
        barramento.$on("alterandoIdade", idade => {
            this.idade = idade
        })
        // Recebendo via método do barramento.
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
