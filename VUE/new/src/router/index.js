import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginName.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home.vue')

    },
    {
        path: '/myself',
        name: 'myself',
        component: () => import('../views/Myself.vue')

    }
    ,
    {
        path: '/search',
        name: 'search',
        component: () => import('../views/Search.vue')

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router