<template>
    <div>
        <Navbar />
    </div>
    <div class="mt-10">
        <div class="grid grid-cols-3 h-48  gap-4">

            <div @click.prevent="food(item)" v-for="item in topRated" :key="item.id"
                class="col-span-1  rounded-lg cursor-pointer">
                <img :src="item.url" alt="" class="w-10/12 rounded-xl h-56">
                <div class=" mt-5  ">name:{{ item.name }}</div>
                <div class="">price:{{ item.price }}</div>
            </div>
            <div @click.prevent="food(item)" v-for="item in allCategories " :key="item.id"
                class="col-span-1 rounded-lg  cursor-pointer ">
                <img :src="item.url" alt="" class="w-10/12 rounded-xl h-56">
                <div class=" mt-5  ">name:{{ item.name }}</div>
                <div class="">price:{{ item.price }}</div>
            </div>
            <div @click.prevent="food(item)" v-for="item in dishesNearYou" :key="item.id"
                class="col-span-1 rounded-lg  cursor-pointer">
                <img :src="item.url" alt="" class="w-10/12 rounded-xl h-56">
                <div class=" mt-5  ">name:{{ item.name }}</div>
                <div class="">price:{{ item.price }}</div>
            </div>
        </div>
    </div>
</template>

<script setup >
import Navbar from './Navbar.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
const store = useStore()
const topRated = store.state.topRated
const allCategories = store.state.allCategories
const dishesNearYou = store.state.dishesNearYou
const router = useRouter()
function food(item) {
    router.push({ name: 'food', params: item })

}



</script>

<style>
</style>