<template>
  <div id="app">
    <h1>This is todo list for studying vue</h1>
    <TodoInput v-bind:pushTodo="pushTodo" />
    <TodoList v-bind:todoItems="todoItems" v-bind:deleteTodo="deleteTodo" />
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoInput,
    TodoList,
  },
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    pushTodo(todo) {
      this.todoItems.push(todo);
    },
    deleteTodo(todoIdx) {
      this.todoItems = this.todoItems.filter((_, index) => index != todoIdx);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
