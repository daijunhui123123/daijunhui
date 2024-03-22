import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('@/view/Login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    component: () => import('@/view/Register.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/noteClass',
    component: () => import('@/view/NoteClass.vue'),
    meta: {
      title: '便签分类'
    }
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

//全局的路由守卫
const whitePath = ['/Login', '/register']//白名单
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  if (!whitePath.includes(to.path)) {
    //看本地存储有
    if (!localStorage.getItem('userInfo')) {
      router.push('/Login')
      return
    }
  }
  next()
})
export default router