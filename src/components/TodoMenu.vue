<template>
  <div class="TodoMenu">
    <div>Total : {{ count }}</div>
    <div>
      <label for="todoFilter">Filter : </label>
      <select id="todoFilter" @change="changeFilterStatus">
        <option value="All">All</option>
        <option value="Done">Done</option>
        <option value="NotDone">NotDone</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoMenu",
  props: {
    todoItems: { type: Array },
    filterStatus: { type: String },
  },
  methods: {
    changeFilterStatus({ target }) {
      this.$emit("changeFilterStatus", target.value);
    },
  },
  computed: {
    count() {
      return this.todoItems.filter(
        ({ isDone }) =>
          this.filterStatus === "All" ||
          (this.filterStatus === "Done") === isDone
      ).length;
    },
  },
};
</script>

<style scoped>
.TodoMenu {
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 0 auto;
}
</style>