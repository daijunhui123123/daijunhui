import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// vue 只负责响应式和组件   VDOM
// vuex 状态管理

import store from './store/index.js'

createApp(App)
    .use(store)
    .mount('#app')
