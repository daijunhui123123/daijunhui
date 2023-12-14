<template>
  <div class="todo">
    <input type="text" v-model="content">
    <button @click="add">添加</button>
    <!-- list.vue -->
    <List :lists="todos"></List>
  </div>
</template>

<script>
import List from './components/List.vue'
export default {
  components: {
    List
    // List引进来的主键
  },
  data() {
    return {
      content: '',
      todos: ['html', 'css']
    }
  },
  methods: {
    add() {
      this.todos.push(this.content)

    }

  }
}
</script>

<style lang="css" >
* {
  padding: 0;
  margin: 0;
}

#app {
  text-align: center;
}

.todo {
  width: 300px;
  margin: 0 auto;
}

input {
  padding: 5px 10px;

}

button {
  padding: 5px 10px;
}

li {
  list-style: none;
  background-color: pink;
  margin-top: 10px;
}
</style>