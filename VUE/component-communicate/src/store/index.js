import { createStore } from 'vuex'

const store = createStore({
  state() {  // data 数据源  公共的
    return {
      lists: ['html', 'css', 'js']
    }
  },
  mutations: {  // methods
    addLists(state, msg) { // mutations中定义的方法，天生具有一个形参，代表state数据源
      state.lists.push(msg)  // addLists(1)
    }
  }
})

export default store