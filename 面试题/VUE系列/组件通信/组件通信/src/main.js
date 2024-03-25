import './assets/main.css'

import { createApp } from 'vue'


import App from './App5.vue'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
