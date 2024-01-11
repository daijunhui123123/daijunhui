import { createStore } from 'vuex'
import { getCart } from '@/api/cart'


// state 是公共数据源  === data
const store = createStore({
    state() {     //  全局数据  
        return {
            cartCount: 0,  // 购物车数量
        }
    },
    mutations: {  // methods    专职修改state
        setCartCount(state, count) {   //  setCactCount(count)
            state.cartCount = count
        }
    },
    actions: {  //  async  methods  放异步代码     调用  mustation
        async setCartCountAction(context) {
            const { data } = await getCart()
            console.log(data)
            context.commit('setCartCount', data.length)
        }
    },
    getters: {  // computed  


    }
})
// const cartCount = getCart()

export default store