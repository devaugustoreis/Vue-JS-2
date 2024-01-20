<template>
  <v-app>
    <sidebar-component />
    <header-component />
    <Content />
    <footer-component />
  </v-app>
</template>

<script>
  // "./" refere-se ao caminho relativo.
  // Também podemos utilizar o caminho absoluto a partir da pasta "src". Para isso, utilizamos o "@".
  import Sidebar from "@/components/template/Sidebar.vue"
  import Header from "./components/template/Header.vue"
  import Content from "./Content.vue"
  import Footer from "./components/template/Footer.vue"

  export default {
    components: { 
      "sidebar-component": Sidebar,
      "header-component": Header,
      // Obs.: É possível utilizar o próprio nome do componente como identificador no template.
      Content,
      // Obs².: Também é possível utilizar camelCase. O vue identificará a posição do traço (no template) pelo caractere maiúsculo.
      footerComponent: Footer 
    }
  }
</script>
