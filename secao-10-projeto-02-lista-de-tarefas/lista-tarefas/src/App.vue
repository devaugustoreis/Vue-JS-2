<template>
    <div id="app">
        <ProgressBar />
        <NewTask />
        <TaskList />
    </div>
</template>

<script>
    import ProgressBar from './components/ProgressBar.vue';
    import NewTask from './components/NewTask.vue';
    import TaskList from './components/TaskList.vue';

    export default {
        name: 'App',
        components: {
            ProgressBar,
            NewTask,
            TaskList
        }
    }
</script>

<style>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #fff;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
