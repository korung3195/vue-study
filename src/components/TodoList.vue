<template>
  <ul class="TodoList">
    <li v-for="(item, idx) in todoItems" :key="idx">
      <span>{{ item }}</span>
      <button @click="() => deleteTodo(idx)">❌</button>
    </li>
  </ul>
</template>  
 
<script>
export default {
  name: "TodoList",
  props: {
    todoItems: { type: Array },
    deleteTodo: { type: Function },
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
  margin: 5px 0;
}
li > button {
  margin-left: 5px;
}
</style>
