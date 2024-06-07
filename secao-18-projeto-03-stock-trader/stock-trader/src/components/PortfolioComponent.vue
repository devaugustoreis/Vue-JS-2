<template>
    <div class="all-stocks">
        <SingleStock v-for="stock in portfolioStocks" :key="stock.id" :stockData="stock"/>
        <p class="empty-msg" v-if="portfolioStocks.length == 0">As ações adquiridas aparecerão aqui!</p>
    </div>
</template>

<script>
import SingleStock from '@/components/SingleStock.vue'

export default {
    components: {
        SingleStock
    },

    computed: {
        allStocks() {
            return this.$store.getters.allStocks
        },

        portfolioStocks() {
            return this.allStocks.filter(stock => stock.quantity > 0)
        }
    }
}
</script>

<style>
.empty-msg {
    font: 400 2rem 'Montserrat', sans-serif;
}
</style>