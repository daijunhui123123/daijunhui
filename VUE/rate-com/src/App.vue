<script setup>
//  响应式思想
// vue3  语法  ref  响应式
import Rate from './components/rate.vue'//  分数变了自动更新  
import { ref } from 'vue'
// vue 主要工作开发组件
let score = ref(3)
setTimeout(() => {
  // 组件= ui+ 数据状态
  //状态的改变

  score.value = 4// 页面会自动跟新
}, 2000);
</script>

<template>
  <!-- 评分，5课星星，点亮   组件思维 -->
  <Rate :value="score" />
  <Rate :value="score" theme="red" />
</template>

<style scoped></style>
