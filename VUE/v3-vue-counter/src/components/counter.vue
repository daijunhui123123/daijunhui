<!-- 独立的模块，vue里面叫组件 html+css+js集合  -->
<template>
    <!-- 结构 模板 -->
    <div>
        Clicked {{ count }} times, count is {{ evenOrOdd }}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">Increment if odd</button>
        <button @click="incrementAsync">Increment async</button>
    </div>
</template>

<script  setup>
// composition api 组合式api 组合式函数
// 数据和业务
// import { ref, computed } from 'vue';

// const count = ref(0); // 简单的响应式 reactive 
// // 并不是独立的，与count相关，进行计算后拿到的
// const evenOrOdd = computed(() =>
//     count.value % 2 === 0 ? 'even' : 'odd');

// const increment = () => {
//     count.value++; // dom 不要 性能
// }
// const decrement = () => {
//     count.value--;
// }
// const incrementIfOdd = () => {
//     if (count.value % 2 === 0) {
//         count.value++;
//     }
// }
// const incrementAsync = () => {
//     setTimeout(() => {
//         count.value++;
//     }, 1000);
// }
// export default {
//     // 组件的属性
//     //  vue 2.0  options  props  data  methods  computed  watch
//     setup() {
//         return {
//             count,
//             evenOrOdd,
//             increment,
//             decrement,
//             incrementIfOdd,
//             incrementAsync
//         }
//     }
// }

// 进货
import { useCounterStore } from './store/counter'
const { count } = useCounterStore()
</script>

<style scoped></style>