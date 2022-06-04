import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/Home.vue')
    },
    {
        path: '/ecommerce',
        name: 'ecommerce',
        component: () => import('../components/Ecommerce.vue')
    },
    {
        path: '/food',
        name: 'food',
        component: () => import('../components/Food.vue'),

    },
    {
        path: '/todo',
        name: 'todo',
        component: () => import('../components/Todo.vue')
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('../components/Cart.vue')
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router