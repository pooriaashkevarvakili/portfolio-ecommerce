<template>
    <div>
        <div class=" bg-black w-full">
            <Navbar />
            <div class="flex justify-end">
                <i class="fa fa-shopping-cart -mt-10 text-white cursor-pointer">
                    {{ $store.state.cartItemCount }}
                </i>
            </div>
        </div>
        <div>
            <div class="flex justify-center mt-32">
                <div>
                    <div v-if="totalPrice !== 0">
                    </div>
                    <div v-else class="flex items-center justify-center flex-col ">
                        <img src="../assets/shopping-cart.png" class="w-52" />
                        <div class="mt-4 ">
                            <h4 class="text-center">Your cart is empty</h4>
                            <h5 class="text-center">You can go to home page to view more food items.</h5>
                            <div class="text-center">
                                <button class=" mt-4 bg-green-400 text-white p-5 rounded-xl"
                                    @click="Ecommerce">Ecommerce</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <ul>
                            <li v-for="items in cartItems" :key="items.id">
                                <div>
                                    <h6>{{ items.name }}</h6>
                                    <div>
                                        <button class="bg-green-400 text-white rounded-xl p-5"
                                            @click="removeItem(items)">-</button>
                                        <span class="ml-5">{{ items.quantity }}</span>
                                        <button class="bg-green-400 ml-5 text-white p-5 rounded-xl"
                                            @click="addTocart(items)" type="button">+</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from "./Navbar.vue"
import { mapActions, mapState } from 'vuex';
export default {
    name: "CardPage",
    components: { Navbar },
    data() {
        return {
            item: 0
        };
    },
    methods: {
        ...mapActions([
            "addTocart", "removeItem"
        ]),
        Ecommerce() {
            this.$router.push('/ecommerce')
        }

    },
    computed: {
        ...mapState({
            cartItems: state => state.cartItems
        }),
        totalPrice() {
            let price = 0;
            this.$store.state.cartItems.map(el => {
                price += el["quantity"] * el["price"];
            });
            return price;
        }
    }
};
</script>
<style scoped>
</style>