<template>
  <div class="TodoInput">
    <form @submit="handleSubmit">
      <input v-model="todo" placeholder="input todo" required />
      <button type="submit">등록</button>
    </form>
  </div>
</template>  
 
<script>
export default {
  props: {
    pushTodo: { type: Function },
  },
  data() {
    return {
      todo: "",
    };
  },
  name: "TodoInput",
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.pushTodo(this.todo);
      this.todo = "";
    },
  },
};
</script>

<style>
</style>
