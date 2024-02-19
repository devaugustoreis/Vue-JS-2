<template>
    <div class="usuario">
        <h2>Usuários</h2>
        <hr>
        <router-view />
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
export default {
    methods: {
        irParaInicio() {
            // ROTA DIRETO
            // this.$router.push("/")

            // OBJETO COM PROPRIEDADES
            // this.$router.push({
            //     path: "/"
            // })
            
            // NOME DA ROTA
            this.$router.push({ name: "inicio" })
        }
    }
}
</script>

<style>
    
</style>