<template>
    <div class="calculator">
        <DisplayComponent :value="displayValue"/>
        <ButtonComponent label="AC" triple @customBtnClick="clearMemory()" />
        <ButtonComponent label="/" operation @customBtnClick="setOperation" />
        <ButtonComponent label="7" @customBtnClick="addDigit"/>
        <ButtonComponent label="8" @customBtnClick="addDigit" />
        <ButtonComponent label="9" @customBtnClick="addDigit" />
        <ButtonComponent label="*" operation @customBtnClick="setOperation"/>
        <ButtonComponent label="4" @customBtnClick="addDigit" />
        <ButtonComponent label="5" @customBtnClick="addDigit" />
        <ButtonComponent label="6" @customBtnClick="addDigit" />
        <ButtonComponent label="-" operation @customBtnClick="setOperation"/>
        <ButtonComponent label="1" @customBtnClick="addDigit" />
        <ButtonComponent label="2" @customBtnClick="addDigit" />
        <ButtonComponent label="3" @customBtnClick="addDigit" />
        <ButtonComponent label="+" operation @customBtnClick="setOperation"/>
        <ButtonComponent label="0" double @customBtnClick="addDigit"/>
        <ButtonComponent label="." @customBtnClick="addDigit" />
        <ButtonComponent label="=" operation @customBtnClick="setOperation"/>
    </div>
</template>

<script>
import ButtonComponent from '../components/ButtonComponent'
import DisplayComponent from '../components/DisplayComponent'

export default {
    components:  {
        ButtonComponent,
        DisplayComponent
    },

    data() {
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0
        }
    },

    methods: {
        clearMemory() {
            // Retorna a data para o estado inicial
            Object.assign(this.$data, this.$options.data())
        },
        
        setOperation(operation) {
            if (this.current === 0) {
                this.operation = operation
                this.current = 1
                this.clearDisplay = true
            } else {
                const equals = operation === "="
                const currentOperation = this.operation

                try {
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`
                    )
                } catch (e) {
                    this.$emit('onError', e)
                }

                this.values[1] = 0
                this.displayValue = this.values[0]
                this.opeartion = equals ? null : operation
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals
            }
        },

        addDigit(n) {
            if (n === "." && this.displayValue.includes(".")) return

            const clearDisplay = this.displayValue === "0" || this.clearDisplay
            const currentValue = clearDisplay ? "" : this.displayValue
            const displayValue = currentValue + n

            this.displayValue = displayValue
            this.clearDisplay = false

            if (n !== ".") {
                const i = this.current
                const newValue = parseFloat(displayValue)
                this.values[i] = newValue
            }
        }
    }
}
</script>

<style>
.calculator {
    height: 320px;
    width: 230px;
    border-radius: 5px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>