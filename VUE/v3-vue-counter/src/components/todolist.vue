<template>
    <div>
        <ul>
            <li v-for="todo  in todos">
                {{ todo.title }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useTodoStore } from '../store/todos.js'
const { todos } = useTodoStore()

</script>

<style lang="less" scoped></style>