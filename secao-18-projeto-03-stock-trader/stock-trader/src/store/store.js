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
        setFunds(state, payload) {
            state.totalFunds = payload
        },

        setAllStocks(state, payload) {
            state.allStocks = payload
        },

        updateStockQuantity(state, payload) {
            const stock = state.allStocks.find(stock => stock.id == payload.id)

            if (stock) {
                if (payload.type == "buy" && payload.value <= state.totalFunds) {
                    stock.quantity += payload.quantity
                    state.totalFunds -= payload.value
                } else if (payload.type == "sell" && payload.quantity <= stock.quantity) {
                    stock.quantity -= payload.quantity
                    state.totalFunds += payload.value
                }
            }
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
        loadData(context, payload) {
            context.commit("setFunds", payload.funds)
            context.commit("setAllStocks", payload.allStocks)
        },

        operateStock(context, payload) {
            context.commit("updateStockQuantity", payload)
        },

        randomizeStocksPrice(context) {
            context.commit("randomizeStocksPrice")
        }
    }
})