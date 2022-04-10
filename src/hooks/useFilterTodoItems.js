import { computed, ref } from "@vue/composition-api";

const useFilterTodoItems = (todoItems) => {
    const filterStatus = ref("All");
  
    const filteredTodoItems = computed(() =>
      todoItems.value.filter(
        ({ isDone }) =>
          filterStatus.value === "All" ||
          (filterStatus.value === "Done") === isDone
      )
    );
  
    const totalCount = computed(() => filteredTodoItems.value.length);
  
    const changeFilterStatus = (status) => {
      filterStatus.value = status;
    };
  
    return { filteredTodoItems, totalCount, changeFilterStatus };
  };

  export default useFilterTodoItems;