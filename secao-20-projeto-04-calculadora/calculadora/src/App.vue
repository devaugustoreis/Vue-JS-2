<template>
    <div id="app">
        <h1>Calculadora</h1>
        <CalculatorComponent />
    </div>
</template>

<script>
import CalculatorComponent from "./main/CalculatorComponent.vue";

export default {
    components: {
        CalculatorComponent
    }
}
</script>

<style>
@font-face {
    font-family: "CaviarDreams";
    src: url("./fonts/CaviarDreams.ttf");
}

* {
    font-family: "CaviarDreams";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

h1 {
    margin-bottom: 15px;
}
</style>