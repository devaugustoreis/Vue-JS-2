<template>
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <p><strong>Código:</strong> {{ id }} / {{ $route.params.id }}</p>
        <p><strong>Completo:</strong> {{ $route.query.completo ? 'Sim' : 'Não' }}</p>
        <p><strong>Língua:</strong> {{ $route.query.lingua }}</p>
        <hr>
        <button primario @click="confirmado = true">Confirmar</button>
        <div id="rodape">
            <h3>Curso Vue</h3>
        </div>
    </div> 
</template>

<script>
export default {
    props: ["id"],
    data() {
        return {
            confirmado: false
        }
    },
    beforeRouteLeave (to, from, next) {
        if (this.confirmado) {
            next()
        } else {
            if (confirm("Tem Certeza que deseja sair?")) next()
            else next(false)
        }
    }
}
</script>

<style>
    #rodape {
        margin-top: 1000px;
    }
</style>