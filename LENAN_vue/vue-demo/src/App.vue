<script setup>
// 数据绑定-> 响应式
import { ref, transformVNodeArgs } from "vue";
let name = ref("李灵洋")
setTimeout(() => {
  name.value = "李灵洋222"
}, 1000)
let count = ref(0)
const addCount = () => {
  count.value++
}
const todos = ref([])
  ; (async function () {
    const list = await fetch('https://ztj8kh.laf.run/get-list')
    const { data } = await list.json()
    todos.value = data
  })()
</script>

<template>
  <div>

    点击了{{ count }}
    <button type="button" @click="addCount">+1</button>
    <span class="sm">{{ name }} 同学是sb 帅的一批</span>
    <div v-if="todos.length === 0">没有todos</div>
    <ul v-else>
      <li v-for="todo in todos">
        {{ todo.txt }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sm {
  font-size: 20px;
  font-weight: bold;
  color: red;
}
</style>
