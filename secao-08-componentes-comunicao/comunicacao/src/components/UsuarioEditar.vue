<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="alterarIdade">Alterar Idade</button>
    </div>
</template>

<script>
import barramento from "@/barramento"

export default {
    props: ["idade"],
    methods: {
        alterarIdade() {
            this.idade = 45
            // this.$emit("idadeMudou", 45)       // Emissão para o pai. Não é necessariamente obrigatório mudar a propriedade local.
            barramento.$emit("alterandoIdade", this.idade)     // Emissao por barramento.
            barramento.alterarIdade(++this.idade)     // Métodos via barramento.
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
