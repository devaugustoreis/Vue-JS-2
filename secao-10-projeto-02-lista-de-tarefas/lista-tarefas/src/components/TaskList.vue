<template >
    <div class="task-list-wrapper">
        <template v-if="taskList.length">
            <div v-for="task in taskList" :key="task.id" 
                class="task-card"
                :class="{'done': task.done}" 
                @click="toggleTask(task)">
                    <div class="task-text">{{ task.description }}</div>
                    <button class="close-btn" @click="deleteTask(task)">&#10006;</button>
            </div>
        </template>
        <div v-else>A Lista de tarefas está vazia.</div>
    </div>
</template>

<script>
import barramento from '@/barramento';

export default {
    mounted() {
        if (localStorage.getItem("taskList")) this.taskList = JSON.parse(localStorage.getItem("taskList"))
        barramento.$on("updateTaskList", updatedTaskList => {
            this.taskList = updatedTaskList
        })
    },
    data() {
        return {
            taskList: []
        }
    },
    methods: {
        toggleTask(task) {
            const index = this.taskList.indexOf(task)
            this.taskList[index].done = !this.taskList[index].done
        },
        deleteTask(task) {
            const index = this.taskList.indexOf(task)
            if (index > -1) this.taskList.splice(index, 1)
        }
    },
    watch: {
        taskList: {
            handler() {
                localStorage.setItem("taskList", JSON.stringify(this.taskList))
            },
            deep: true
        }
    }
}
</script>

<style>
    .task-list-wrapper {
        width: 90%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        column-gap: 15px;
    }

    .task-card {
        width: 210px;
        height: 90px;
        background-color: #ee422b;
        border-radius: 6px;
        border-left: 6px solid #c03422;
        display: flex;
        cursor: pointer;
    }

    .task-card.done {
        background-color: #48c75d;
        border-left: 6px solid #3da34e;
    }

    .close-btn {
        cursor: pointer;
        align-self: flex-start;
        background-color: transparent;
        color: #fff;
        margin: 3px 6px 0 0;
    }

    .task-text {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .task-card.done .task-text {
        text-decoration: line-through;
    }
</style>