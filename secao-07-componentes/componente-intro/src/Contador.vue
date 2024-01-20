<template>
    <!-- Observe que a div abaixo herda o estilo definido no componente pai (Contadores) -->
    <div class="contador">
        <span>{{ contador }}</span>
        <button @click="adicionar">+</button>
        <button @click="subtrair">-</button>
        <div>Esta div terá o estilo definido em "div" aplicado</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                contador: 0
            }
        },
        methods: {
            adicionar() {
                this.contador++
            },
            subtrair() {
                this.contador--
            }
        }
    }
</script>

<!-- O atributo "scoped" limita os estilos somente ao componente. 
Além disso, cada elemnento recebe uma hash que pode ser referenciada. 
-->
<style scoped>
    div {
        border: 3px solid rgb(255, 12, 12);
    }

     span {
        border-bottom: 1px solid #ccc;
        height: 30px;
        padding: 5px 25px;
    }

    button {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #fff;
        margin-left: 10px;
        outline: none;
    }
</style>