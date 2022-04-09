<template>
  <div id="app">
    <h1>Todo app for studying vue</h1>
    <TodoMenu
      :totalCount="totalCount"
      @changeFilterStatus="changeFilterStatus"
    />
    <TodoInput :pushTodo="pushTodo" />
    <TodoList
      :todoItems="filteredTodoList"
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
  computed: {
    filteredTodoList() {
      return this.todoItems.filter(
        ({ isDone }) =>
          this.filterStatus === "All" ||
          (this.filterStatus === "Done") === isDone
      );
    },
    totalCount() {
      return this.filteredTodoList.length;
    },
  },
  beforeCreate() {
    console.log("before create : App");
  },
  created() {
    console.log("created : App");
  },
  beforeMount() {
    console.log("before mount : App");
  },
  mounted() {
    console.log("mounted : App");
  },
  beforeUpdate() {
    console.log("before update : App");
  },
  updated() {
    console.log("updated : App");
  },
  beforeDestroy() {
    console.log("before destroy : App");
  },
  destroyed() {
    console.log("destroyed : App");
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
