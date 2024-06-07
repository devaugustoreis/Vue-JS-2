import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        totalFunds: 10000,
        allStocks: [
            { id: 1, name: "BMW", price: 110, quantity: 0 },
            { id: 2, name: "Google", price: 200, quantity: 0 },
            { id: 3, name: "Apple", price: 250, quantity: 0 },
            { id: 4, name: "Twitter", price: 12, quantity: 0 }
        ]
    },

    getters: {
        funds(state) {
            return state.totalFunds
        },
        allStocks(state) {
            return state.allStocks
        }
    },

    mutations: {
        updateFunds(state, payload) {
            state.totalFunds = payload
        },

        updateAllStocks(state, payload) {
            state.allStocks = payload
        },

        updateStockQuantity(state, payload) {
            const stock = state.allStocks.find(stock => stock.id == payload.id)

            if (payload.type == "buy") stock.quantity += payload.quantity
            else stock.quantity -= payload.quantity
        },
        
        randomizeStocksPrice(state) {
            const maxIncreasePercentage = 10
            const maxDecreasePercentage = -10

            state.allStocks.forEach(stock => {
                const randomNumber = Math.random() * (maxIncreasePercentage - maxDecreasePercentage) + maxDecreasePercentage
                const percentage = 1 + (randomNumber / 100)

                stock.price *= percentage
            })
        }
    },

    actions: {
        loadFunds(context, payload) {
            context.commit("updateFunds", payload)
        },

        loadStocks(context, payload) {
            context.commit("updateAllStocks", payload)
        },

        operateStock(context, payload) {
            context.commit("updateStockQuantity", payload)

            let newFunds = context.getters.funds

            if (payload.type == "buy") newFunds -= payload.value
            else newFunds += payload.value
            context.commit("updateFunds", newFunds)
        },

        randomizeStocksPrice(context) {
            context.commit("randomizeStocksPrice")
        }
    }
})