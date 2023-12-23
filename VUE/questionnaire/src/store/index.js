import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {// === data
    questionList: [],
    itemNum: 1,//第几题
  },
  getters: {
  },
  mutations: {// ===methods
    getQuestionList(state, list) {// 所有写在mutations中的当函数第一个参数都是state
      state.questionList = list
    },
    nextItem(state) {
      state.itemNum++
    }
  },
  actions: {//  ==methos   放异步代码
    getQuestionListAction(context) {
      axios.get('https://www.fastmock.site/mock/3a33c631bcba043a378b4ceafbf994b8/question/questions').then(res => {
        console.log(res)
        context.commit('getQuestionList', res.data)// 触发mutation中的方法
      })
    },
    nextItemAction({ commit }) {
      commit('nextItem')
    }
  },
  modules: {//  同步代码
  }
})
