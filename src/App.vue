<template>
  <div id="app">
    <h1>Todo app for studying vue</h1>
    <TodoMenu
      :todoItems="todoItems"
      :filterStatus="filterStatus"
      @changeFilterStatus="changeFilterStatus"
    />
    <TodoInput :pushTodo="pushTodo" />
    <TodoList
      :todoItems="todoItems"
      :filterStatus="filterStatus"
      @toggleTodo="toggleTodo"
      @deleteTodo="deleteTodo"
    />
  </div>
</template>

<script>
import TodoMenu from "./components/TodoMenu.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

let id = 0;

export default {
  name: "App",
  components: {
    TodoMenu,
    TodoInput,
    TodoList,
  },
  data() {
    return {
      todoItems: [],
      filterStatus: "All",
    };
  },
  methods: {
    pushTodo(todo) {
      this.todoItems.push({ content: todo, isDone: false, id: id++ });
    },
    deleteTodo(targetId) {
      this.todoItems = this.todoItems.filter(({ id }) => id != targetId);
    },
    toggleTodo(targetId) {
      this.todoItems = this.todoItems.map((item) => {
        if (item.id != targetId) {
          return item;
        }
        return { ...item, isDone: !item.isDone };
      });
    },
    changeFilterStatus(status) {
      this.filterStatus = status;
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
