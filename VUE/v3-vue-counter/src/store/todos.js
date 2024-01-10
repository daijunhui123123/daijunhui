import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// vue3 hooks 编程 
export const useTodoStore = defineStore('todos', () => {
    const todos = ref([
        { id: 1, title: '吃饭', done: false },
    ]);
    return {
        todos
    }
})
