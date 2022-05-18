import { createRouter, createWebHistory } from "vue-router";

import Login from './views/Login.vue'
import Store from './views/Store.vue'
import Register from './views/Register.vue'

const routes = [{
    path: '/',
    name: 'login',
    component: Login
}, {
    path: '/store',
    name: 'store',
    component: Store
},{
    path: '/register',
    name: 'register',
    component: Register
}]

const router = createRouter({ history: createWebHistory(), routes });

export default router;

