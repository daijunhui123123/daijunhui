import { createApp } from 'vue'
import 'lib-flexible/flexible.js'
import App from './App.vue'
import router from './router'
import './assets/style/reset.css'

createApp(App)
    .use(router)
    .mount('#app')
