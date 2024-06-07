<template>
    <div id="app">
        <NavBar />
        <ContentComponent />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import ContentComponent from '@/components/ContentComponent.vue'

export default {
    components: {
        ContentComponent,
        NavBar
    }
}
</script>

<style>
</style>
