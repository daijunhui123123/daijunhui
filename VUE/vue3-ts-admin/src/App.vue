<script setup lang="ts">
fetch('/api/article/list')
 .then(res => res.json())
 .then(data => console.log(data))
</script>

<template>
  <div>

  </div>
</template>

<style scoped>

</style>
