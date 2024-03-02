<script setup lang="ts">
</script>

<template>
  <!-- 懒加载， 页面级件加载出来之前， 显示点loading...  -->
  <Suspense>
    <router-view />
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<style scoped>
</style>
