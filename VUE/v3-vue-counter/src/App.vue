<template>
  <!-- 挂再Counter组件上   管理  复用 -->
  <!-- <Counter /> -->
  <!-- <Todolist /> -->
  <h1>推荐</h1>
  <Baner :per-page="3" />
</template>

<script setup>
// 模块化
// import Counter from './components/counter.vue';
// import Todolist from './components/todolist.vue';
import Baner from './components/Banner.vue';
</script>

<style lang="less" scoped></style>