<template>
    <div class="all-stocks">
        <SingleStock v-for="stock in allStocks" :key="stock.id" :stockData="stock" />
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
        }
    }
}
</script>

<style>
.all-stocks {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding-top: 20px;
    justify-content: center;
}
</style>