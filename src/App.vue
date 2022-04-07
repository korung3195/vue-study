<template>
  <div id="app">
    <h1>This is todo list for studying vue</h1>
    <TodoInput :pushTodo="pushTodo" />
    <TodoList
      :todoItems="todoItems"
      @toggleTodo="toggleTodo"
      @deleteTodo="deleteTodo"
    />
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
      this.todoItems.push({ content: todo, isDone: false });
    },
    deleteTodo(todoIdx) {
      this.todoItems = this.todoItems.filter((_, index) => index != todoIdx);
    },
    toggleTodo(todoIdx) {
      this.todoItems = this.todoItems.map((item, index) => {
        if (index != todoIdx) {
          return item;
        }
        return { ...item, isDone: !item.isDone };
      });
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
