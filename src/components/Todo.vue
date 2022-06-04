<template>
    <div>
        <Navbar />
    </div>
    <div class="grid grid-cols-2 mt-10 ml-10">
        <div class="col-span-1">
            <input @keypress.enter="addTask" placeholder="addaTask"
                class="border w-full border-solid rounded-lg border-black p-2" type="text" v-model="newTask">
        </div>
        <div class="col-span-1">
            <button @click="addTask" class="bg-green-400 rounded-xl text-white p-2 w-36  ml-3">add</button>
        </div>
    </div>
    <div>
        <Task v-for="(task, i) in $store.state.tasks" :key="i" :task="task"></Task>
    </div>
</template>

<script  >
import Task from "./Task.vue"
import Navbar from './Navbar.vue'
import { mapMutations } from 'vuex'
export default {

    components: {
        Navbar, Task
    },
    data() {
        return {
            newTask: ''
        }
    },
    methods: {
        ...mapMutations([
            'ADD_TASK'
        ]),
        addTask() {

            if (this.newTask) {

                this.ADD_TASK(this.newTask)
                this.newTask = ''
            }
        }
    }
}
</script>
<style>
</style>