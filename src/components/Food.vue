s (61 sloc)  1.86 KB
   
<template>
    <div class=" bg-black w-full">
        <Navbar />
        <div class="flex justify-end">
            <i class="fa fa-shopping-cart -mt-10 text-white cursor-pointer">
                {{ $store.state.cartItemCount }}
            </i>
        </div>
    </div>
    <div class="mt-6">
        <div class="grid grid-cols-2 gap-4">
            <div class="col-span-1 ">
                <img :src="details.url" class="w-56 h-40 ml-5" alt="">
            </div>
            <div class="grid">
                <div> name {{ details.name }}</div>
                <div>price {{ details.price }}</div>
                <div>desc {{ details.desc }}</div>
                <div class="grid grid-cols-4 gap-2">
                    <div class="col-span-1">
                        <button @click="add" class="bg-green-400 w-36 h-10 rounded-lg    text-white">go to
                            cart</button>

                    </div>
                    <div class="col-span-1">
                        <button @click="addTocart" class="bg-green-400 w-36 h-10   rounded-lg text-white">add</button>

                    </div>

                    <div class="col-span-1">
                        <button @click="removeItem(items)"
                            class="bg-green-400 w-36 h-10 rounded-lg text-white">remove</button>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import Navbar from './Navbar.vue'
let details = ref()
const route = useRoute()
details.value = route.params
const router = useRouter()
const store = useStore()

const removeItem = () => {
    store.commit('removeTask')
}
const addTocart = () => {
    store.dispatch('addTocart')
}
const add = () => {
    router.push('/cart')
}


</script>

<style>
</style>