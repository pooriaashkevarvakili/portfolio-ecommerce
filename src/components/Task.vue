<template>
    <div class="flex p-5  justify-between  ">
        <div class="mt-8   p-4">{{ task.content }}</div>
        <div>
            <button class="bg-red-400  mt-10 text-white p-5 rounded-lg" @click="REMOVE_TASK(this.task)">x</button>
        </div>
    </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
    props: ['task'],
    setup() {
        const store = useStore()
        const REMOVE_TASK = () => { store.commit('REMOVE_TASK') }
        return { REMOVE_TASK }
    }

}
</script>
<style>
</style>