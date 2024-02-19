<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <p><strong>Código:</strong> {{ id }}</p>

        <!-- 
            3 ABORDAGENS PARA O ROUTER LINK.
            A - Url da rota com o prop "id"
            B - Url da rota com o param "id" vindo do $route.params
            C - Objeto com nome da rota (auxilia em rotas muito grandes) e parâmetros
        -->

        <!-- <router-link tag="button" primario :to="`/usuario/${id}/editar`"> -->
        <!-- <router-link tag="button" primario :to="`/usuario/${$route.params.id}/editar`"> -->
        <router-link tag="button" primario :to="{ 
            name: 'editarUsuario', 
            params: { id }, 
            query: { completo: true, lingua: 'pt-br' },
            hash: '#rodape' 
        }">
            Editar
        </router-link>
    </div>
</template>

<script>
export default {
    props: ["id"], // Mesmo nome do parâmetro da rota

    beforeRouteEnter(to, from, next) {
        // O THIS abaixo não aponta pro componente (acontecerá um erro, pois a propridade "id" não existe no método).
        // console.log(this.id) // Componente ainda não foi criado, logo não se tem acesso a nenhuma de suas propriedades.
        console.log("dentro do componente -> usuário detalhe")
        next()
        // Caso queira acessar as propriedades do componente (não é muito comum), existe a alternativa abaixo.
        next(vm => {
            console.log(vm.id)
        })
    }

    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {
    //     $route(to, from) {
    //         this.id = to.params.id
    //     }
    // },
}
</script>

<style>
    
</style>