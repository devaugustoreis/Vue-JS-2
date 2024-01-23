<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <Citacao>
            <!-- ============= SLOT PADRÃO ============= -->
            <!-- <h1>{{ citacoes[indice].autor }}</h1> -->
            <!-- <p>{{ citacoes[indice].texto }}</p> -->
            <!-- <h6>{{ citacoes[indice].fonte }}</h6> -->
            
            <!-- =========== SLOTS NOMEADOS =========== -->
            <h1 slot="autor">{{ citacoes[indice].autor }}</h1>
            <p slot="texto">{{ citacoes[indice].texto }}</p>
            <h6 slot="fonte">{{ citacoes[indice].fonte }}</h6>
        </Citacao>
    </div>
</template>

<script>
import Citacao from "@/components/Citacao"

export default {
    components: { Citacao },
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    },
    // Como este componente está renderizado dinâmicamente, o gatilho dos métodos abaixo se replicam igualmente para todos os filhos.
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
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        color: green
    }
</style>
