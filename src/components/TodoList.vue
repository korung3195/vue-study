<template>
  <ul class="TodoList">
    <li
      v-for="{ content, isDone, id } in todoItems"
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
  },
  methods: {
    toggleTodo(id) {
      this.$emit("toggleTodo", id);
    },
    deleteTodo(id) {
      this.$emit("deleteTodo", id);
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
}
li {
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 5px 0;
}
li > button {
  margin-left: 5px;
}
li.isDone {
  text-decoration-line: line-through;
}
</style>
