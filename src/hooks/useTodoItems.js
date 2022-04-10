import { ref } from "@vue/composition-api";

const useTodoItems = () => {
    let id = 0;
    const todoItems = ref([]);
  
    const pushTodo = (todo) =>
      todoItems.value.push({ content: todo, isDone: false, id: id++ });
  
    const deleteTodo = (targetId) =>
      (todoItems.value = todoItems.value.filter(({ id }) => id != targetId));
  
    const toggleTodo = (targetId) =>
      (todoItems.value = todoItems.value.map((item) => {
        if (item.id != targetId) {
          return item;
        }
        return { ...item, isDone: !item.isDone };
      }));
  
    return { todoItems, pushTodo, deleteTodo, toggleTodo };
  };

  export default useTodoItems;