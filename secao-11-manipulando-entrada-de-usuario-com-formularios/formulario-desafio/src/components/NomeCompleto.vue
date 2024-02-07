<template>
    <div class="rotulo">
        <label>Nome:</label>
        <div class="elemento">
            <input type="text" :value="value.nome" @input="alterarNome">
        </div>
        <label>Sobrenome:</label>
        <div class="elemento">
            <input type="text" :value="value.sobrenome" @input="alterarSobrenome">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    methods: {
        alterarNome(event) {
            this.$emit('input', { 
                nome: event.target.value, 
                sobrenome: this.value.sobrenome 
            })
        },
        alterarSobrenome(event) {
            this.$emit('input', { 
                nome: this.value.nome, 
                sobrenome: event.target.value 
            })
        }
    }
}
</script>

<style>
    .rotulo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 15px 0px;
        font-size: 1.4rem;
    }

    .elemento {
        display: flex;
        align-self: stretch;
        margin: 10px 0px;
    }

    input, textarea, select {
        flex: 1;
        font-size: 1.4rem;
        outline: none;
        border: 1px solid #DDD;
        border-radius: 5px;
        padding: 5px 10px;
    }

    input:focus {
        border: 1px solid #BBB;
    }
</style>