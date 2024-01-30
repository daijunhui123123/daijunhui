<template>
  <div>
    <p ref="refp">消息{{ message }}</p>
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue'
const message = ref('初始消息')
const refp = ref(null)
// console.log(refp.value)
setTimeout(() => {
  message.value = '消息已更改'
  console.log(refp.value)
}, 1000)

nextTick(() => {
  console.log(refp.value, 'nextTick');
})
</script>

<style lang="css" scoped></style>