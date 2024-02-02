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

    },
    {
        path: '/fostercare',
        name: 'fostercare',
        component: () => import('../views/FosterCare.vue')

    }, {
        path: '/mall',
        name: 'mall',
        component: () => import('../views/Mall.vue')

    },
    {
        path: '/petcircle',
        name: 'petcircle',
        component: () => import('../views/Petcircle.vue')

    }
    ,
    {
        path: '/item',
        name: 'item',
        component: () => import('../views/Item.vue')

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router