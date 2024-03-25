<template>
    <Child @add="handle" />

    <div class="bd">
        <ul>
            <li v-for="item in list">{{ item }}</li>
        </ul>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import Child from './views/Child_2.vue'

const list = ref(['html', 'css'])

const handle = (item) => {
    list.value.push(item)
}
</script>

<style lang="css" scoped>
.hd input {
    width: 200px;
    padding: 10px 0;
    font-size: 20px;
}

.hd button {
    padding: 10px 20px;
    font-size: 20px;
}
</style>