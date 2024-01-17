<template>
  <div id="app">
    <p>{{ titulo }}</p>
    <button @click="titulo += '#'">Alterar Título</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      titulo: "Teste Data usando Vue JS"
    }
  }
}
</script>

<style>
  #app {
    background-color: coral;
  }
</style>
