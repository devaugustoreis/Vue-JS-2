<template>
    <div class="new-task-wrapper">
        <input type="text" placeholder="Nova Tarefa" id="task-input" @keypress.enter="addTaskToList" autofocus>
        <button @click="addTaskToList()">+</button>
    </div>
</template>

<script>
import barramento from "@/barramento"

export default {
    mounted() {
        if (localStorage.getItem("taskList")) this.taskList = JSON.parse(localStorage.getItem("taskList"))
    },
    data() {
        return {
            taskList: []
        }
    },
    methods: {
        generateTaskId() {
            if (this.taskList.length > 0) return this.taskList.slice(-1)[0].id + 1     // Alternativa: this.taskList[this.taskList.length - 1].id + 1
            else return 1
        },
        addTaskToList() {
            const taskInput = document.querySelector("#task-input")
            if (taskInput.value == "") return

            const newTask = taskInput.value
            const taskObject = { 
                id: this.generateTaskId(),
                description: newTask,
                done: false
            }
            this.taskList.push(taskObject)

            localStorage.setItem("taskList", JSON.stringify(this.taskList))
            taskInput.value = ""
            taskInput.focus()
        }
    },
    watch: {
        taskList() {
            barramento.$emit("updateTaskList", this.taskList)
        }
    }
}
</script>

<style scoped>
    * {
        color: #fff;
        font-size: 18px;
        font-weight: 600;
    }

    .new-task-wrapper {
        height: 40px;
        width: 100%;
        margin: 40px 0;
        text-align: center;
    }

    input {
        height: 100%;
        width: 30%;
        min-width: 200px;
        border: 1px solid #fff;
        border-radius: 6px 0px 0px 6px;
        background-color: rgba(100, 100, 100, 0.1);
        padding: 0px 5px;
        outline: none;
    }
    
    input::placeholder { color: rgba(255, 255, 255, 0.3); }

    button {
        height: 100%;
        width: 40px;
        border: 1px solid #fff;
        border-left: 0px;
        border-radius: 0px 6px 6px 0px;
        background-color: rgb(21, 121, 187);
        cursor: pointer;
    }
</style>