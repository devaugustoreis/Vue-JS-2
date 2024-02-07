<template lang="">
    <div class="progress-bar-wrapper">
        <h1>Tarefas</h1>
        <div class="progress-bar">
            {{ percentageCompleted }}%
            <div class="fill" :style="{'width': `${percentageCompleted}%`}"></div>
        </div>
    </div>
</template>

<script>
import barramento from '@/barramento';

export default {
    created() {
        barramento.$on("updateTaskList", updatedTaskList => {
            this.taskList = updatedTaskList
        })
    },
    computed: {
        percentageCompleted() {
            let totalTasks = Number(this.taskList.length)
            let tasksDone = this.taskList.filter(task => task.done)
            let completedTask = Number(tasksDone.length)
            
            let percentage = ((completedTask * 100 / totalTasks) || 0).toFixed(1) 
            return percentage 
        }
    },
    data() {
        return {
            taskList: []
        }
    }
}
</script>

<style>
    .progress-bar-wrapper {
        width: 80%;
        text-align: center;
    }

    .progress-bar {
        position: relative;
        height: 25px;
        width: 100%;
        border: 1px solid #fff;
        border-radius: 6px;
        line-height: 25px;
    }

    .fill {
        position: absolute;
        top: 0;
        z-index: -1;
        height: 100%;
        background-color: #48c75d;
        border-radius: inherit;
    }
</style>