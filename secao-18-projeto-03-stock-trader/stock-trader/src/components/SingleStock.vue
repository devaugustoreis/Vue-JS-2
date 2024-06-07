<template>
    <div class="stock">

        <div class="stock-title" :class="color">
            {{ stockData.name }} 
            (Preço: {{ stockData.price | R$ }}<span v-if="!isBuying">&nbsp;| Qtde: {{ stockData.quantity }}</span>)
        </div>

        <div class="stock-operation">
            <label for="stock-amount" class="amount-label" :class="labelColor">Quantidade</label>
            <div class="amount-wrapper">
                <input type="number" id="stock-amount" class="stock-amount" :class="borderColor" v-model.number="operationQty">
                <button class="btn" :class="color" @click="operateStock()" :disabled="invalidOperation">{{ btnLabel }}</button>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    props: {
        stockData: {
            type: Object,
            required: true
        }
    },


    computed: {
        color() {
            return this.isBuying ? "green" : "blue"
        },

        labelColor() {
            return {
                'blue-label': (this.operationQty != 0 && !this.invalidOperation),
                'red-label': (this.operationQty != 0 && this.invalidOperation)
            }
        },

        borderColor() {
            return {
                'blue-border': (this.operationQty != 0 && !this.invalidOperation),
                'red-border': (this.operationQty != 0 && this.invalidOperation)
            }
        },

        btnLabel() {
            if (this.isBuying) return "COMPRAR"
            else return this.operationQty > this.stockData.quantity ? "INSUFICIENTE" : "VENDER"
        },

        invalidOperation() {
            if (this.operationQty <= 0 || !Number.isInteger(this.operationQty)) return true
            else if (this.isBuying) return this.operationValue > this.funds
            else return this.operationQty > this.stockData.quantity
        },

        funds() {
            return this.$store.getters.funds
        },

        operationValue() {
            return this.operationQty * this.stockData.price
        },
        
        operationData() {
            return {
                id: this.stockData.id,
                type: this.isBuying ? "buy" : "sell",
                quantity: this.operationQty,
                value: this.operationValue
            }
        }
    },


    data() {
        return {
            isBuying: this.$route.path == "/acoes",
            operationQty: 0
        }
    },


    methods: {
        operateStock() {
            this.$store.dispatch("operateStock", this.operationData).then(() => this.operationQty = 0)
        },
    }
}
</script>


<style scoped lang="scss">
$blue: rgb(43, 112, 216);
$red: rgb(216, 43, 43);

.stock {
    height: 150px;
    width: 25vw;
    min-width: 400px;
    box-shadow: 0px 2px 2px 0px rgba(138,138,138,1);
}

.stock-title {
    height: 35%;
    width: 100%;
    color: white;
    display: flex;
    align-items: center;
    padding: 0px 20px;
}

.stock-operation {
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
}

.amount-wrapper {
    display: flex;
    gap: 15px;
}

.stock-amount {
    font: 600 0.9rem 'Montserrat', sans-serif; 
    height: 100%;
    border-bottom: 1px solid rgb(160, 160, 160);
    flex: 1;
    outline: none;
    transition: 0.3s;
}

.blue-border {
    border-bottom: 1px solid $blue;
}

.red-border {
    border-bottom: 1px solid $red;
}

.amount-label {
    font: 500 0.7rem 'Montserrat', sans-serif; 
}

.blue-label {
    color:$blue;
}

.red-label {
    color:$red;
}

.btn {
    font: 0.7rem 'Montserrat', sans-serif; 
    height: 100%;
    padding: 8px 15px;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    transition: 0.3s;
}

.btn:disabled {
    background-color: #d4d4d4;
    color: #adadad;
    cursor: default;
}
</style>
