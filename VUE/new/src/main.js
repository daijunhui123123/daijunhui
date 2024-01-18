import { createApp } from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import './assets/style/reset.css'
// 2. 引入组件样式
import 'vant/lib/index.css';
import router from './router'
import { NavBar, Icon, Swipe, SwipeItem } from 'vant';
const app = createApp(App)

app.use(Swipe)
app.use(SwipeItem)
app.use(NavBar)
app.use(router)
app.mount('#app')

