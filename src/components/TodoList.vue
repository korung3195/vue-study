<template>
  <ul class="TodoList">
    <li
      v-for="{ content, isDone, id } in filteredTodoList"
      :key="id"
      :class="{ isDone }"
    >
      <span>{{ content }}</span>
      <div>
        <button @click="() => toggleTodo(id)">✅</button>
        <button @click="() => deleteTodo(id)">❌</button>
      </div>
    </li>
  </ul>
</template>  
 
<script>
export default {
  name: "TodoList",
  props: {
    todoItems: { type: Array },
    filterStatus: { type: String },
  },
  methods: {
    toggleTodo(id) {
      this.$emit("toggleTodo", id);
    },
    deleteTodo(id) {
      this.$emit("deleteTodo", id);
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
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 5px 0;
}
li.isDone {
  text-decoration-line: line-through;
}
</style>
