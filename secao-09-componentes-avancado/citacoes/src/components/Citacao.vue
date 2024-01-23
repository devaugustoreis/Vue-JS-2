<template>
    <div class="citacao">
        <!-- ============= SLOT PADRÃO ============ -->
        <!-- <slot></slot> -->
        <!-- Obs.: Não se deve duplicar o slot padrão, pois pode acontecer comportamentos inesperados. -->

        <!-- =========== SLOTS NOMEADOS =========== -->
        <slot name="fonte"></slot>
        <slot name="texto"></slot>
        <div class="autor">
            <slot name="autor"></slot>
        </div>
            
        <!-- Obs.: Pode-se combinar slots padrão e nomeados sem problemas -->
    </div>
</template>

<script>
export default {
    created() {
        console.log("created")
    },
    destroyed() {
        console.log("destroyed")
    },
    // Métodos executados por um componente dinâmico com keep-alive ao ser ativado e desativado.
    activated() {
        console.log("activated")
    },
    deactivated() {
        console.log("deactivated")
    }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    /* Cuidado, pois pode ter conflito entre css estabelecido pelo componente pai. */
    h1 {
        color: red;
    }

    .autor {
        float: right;
    }
</style>
