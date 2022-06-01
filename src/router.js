import { createRouter, createWebHistory } from "vue-router";

import Login from './pages/Login.vue'
import Store from './pages/Store.vue'
import Register from './pages/Register.vue'
import ShoppingCart from './pages/ShoppingCart.vue'

const routes = [{
    path: '/',
    name: 'login',
    component: Login
}, {
    path: '/loja',
    name: 'store',
    component: Store
}, {
    path: '/cadastro',
    name: 'register',
    component: Register
},
{
    path: '/carrinho-de-compras',
    name: 'shoppingcart',
    component: ShoppingCart
}]

const router = createRouter({ history: createWebHistory(), routes });

export default router;