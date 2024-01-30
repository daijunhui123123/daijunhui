import { createRouter, createWebHistory } from 'vue-router'


const routes = [{
    path: '/',
    name: '/home',
    component: () => import('../views/Home.vue')
}, {
    path: '/about',
    name: '/about',
    component: () => import('../views/About.vue') // 
}

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

//全局的前置钩子
router.beforeEach((to, from, next) => {
    console.log('全局前置守卫：', to, from)
})

export default router