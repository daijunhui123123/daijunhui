import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'//引入路由
const routes = [
    {
        path: '/',//重定项
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '',//重定项
                redirect: '/home/suggest'
            },
            {
                path: '/home/suggest',
                component: () => import('@/views/homeChild/Suggest.vue')
            },
            {
                path: '/home/newest',
                component: () => import('@/views/homeChild/Newest.vue')
            }
        ]
    },
    {
        path: '/hot',
        component: () => import('../views/Hot.vue')
    },
    {
        path: '/class',
        name: 'class',
        component: () => import('../views/Class.vue')
    },


]


const router = createRouter({
    routes,
    history: createWebHistory()
})//路由的实例对象

export default router