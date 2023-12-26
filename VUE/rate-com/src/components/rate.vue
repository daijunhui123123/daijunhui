<script setup>
import { defineProps, computed } from 'vue';
//  父子组件信任通信
// 外界传输的参数对象
let props = defineProps({
    value: Number,//   number  数据类型
    theme: {
        type: String,
        // 参数数比较复杂的时候
        default: 'orange'
    }
} //   string  数据类型
);
// 计算属性 ，data/ props 
let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value));
let fontStyle = computed(() => `color:$(props.theme);`)
</script>

<template>
    <div :style="fontStyle"> Rate{{ rate }}</div>
</template>

<style scoped></style>
