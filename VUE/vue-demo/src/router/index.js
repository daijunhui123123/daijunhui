import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        component: () => import('')
    }





]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;