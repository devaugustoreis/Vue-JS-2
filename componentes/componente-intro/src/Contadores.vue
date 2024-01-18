<template>
    <div class="contadores">
        <h1>Contadores</h1>
        <app-contador v-for="c in 5" :key="c"/>
        <button>?</button>
    </div>
</template>

<script>
    import Contador from "./Contador.vue"

    export default {
        components: { "app-contador": Contador }
    }
</script>

<!-- Atenção! O descendente direto também é afetado pela definição de estilo scoped.
Nesse caso, o elemento externo do componente "app-contador" receberá o estilo definido em div, mas isto não ocorrerá com seus filhos. -->
<style scoped>
    div {
        border: 3px solid rgb(47, 136, 12);
    }
</style>