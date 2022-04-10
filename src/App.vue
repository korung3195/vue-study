<template>
  <div id="app">
    <h1>Todo app for studying vue</h1>
    <TodoMenu
      :totalCount="totalCount"
      @changeFilterStatus="changeFilterStatus"
    />
    <TodoInput :pushTodo="pushTodo" />
    <TodoList
      :todoItems="filteredTodoItems"
      @toggleTodo="toggleTodo"
      @deleteTodo="deleteTodo"
    />
  </div>
</template>

<script>
import TodoMenu from "./components/TodoMenu.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import useLifeCycle from "./hooks/useLifeCycle";
import useTodoItems from "./hooks/useTodoItems";
import useFilterTodoItems from "./hooks/useFilterTodoItems";

export default {
  name: "App",
  components: {
    TodoMenu,
    TodoInput,
    TodoList,
  },
  setup() {
    useLifeCycle("App");
    const { todoItems, pushTodo, deleteTodo, toggleTodo } = useTodoItems();
    const { filteredTodoItems, totalCount, changeFilterStatus } =
      useFilterTodoItems(todoItems);

    return {
      filteredTodoItems,
      totalCount,
      pushTodo,
      deleteTodo,
      toggleTodo,
      changeFilterStatus,
    };
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
