<template>
  <div class="TodoMenu">
    <div>Total : {{ totalCount }}</div>
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
    totalCount: { type: Number },
  },
  methods: {
    changeFilterStatus({ target }) {
      this.$emit("changeFilterStatus", target.value);
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