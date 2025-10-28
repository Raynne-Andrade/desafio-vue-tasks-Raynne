import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const loadTodos = () => {
  const storedTodos = localStorage.getItem('todos');
  return storedTodos ? JSON.parse(storedTodos) : [];
};

const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const useTodoStore = defineStore('todo', () => {
  const todos = ref(loadTodos());
  const filter = ref({ status: 'all' });
  const isLoading = ref(false); 
  const modalFormOpen = ref(false);

  const filteredTodos = computed(() => {
    switch (filter.value.status) {
      case 'completed':
        return todos.value.filter(todo => todo.is_completed);
      case 'pending':
        return todos.value.filter(todo => !todo.is_completed);
      case 'all':
      default:
        return todos.value;
    }
  });

  const addTodo = async (title, description) => {
    isLoading.value = true;
    await new Promise(resolve => setTimeout(resolve, 500)); 

    const newTodo = {
      id: Date.now(),
      title,
      description,
      is_completed: false,
    };
    todos.value.push(newTodo);
    saveTodos(todos.value);
    isLoading.value = false;
  };

  const updateTodo = async (updatedTodo) => {
    isLoading.value = true;
    await new Promise(resolve => setTimeout(resolve, 500)); 

    const index = todos.value.findIndex(t => t.id === updatedTodo.id);
    if (index !== -1) {
      todos.value[index] = updatedTodo;
      saveTodos(todos.value);
    }
    isLoading.value = false;
  };

  const removeTodo = async (id) => {
    isLoading.value = true;
    await new Promise(resolve => setTimeout(resolve, 500)); 

    todos.value = todos.value.filter(t => t.id !== id);
    saveTodos(todos.value);
    isLoading.value = false;
  };

  const toggleCompletion = async (id) => {
    isLoading.value = true;
    await new Promise(resolve => setTimeout(resolve, 300)); 

    const todo = todos.value.find(t => t.id === id);
    if (todo) {
      todo.is_completed = !todo.is_completed;
      saveTodos(todos.value);
    }
    isLoading.value = false;
  };

  const setFilter = (status) => {
    filter.value.status = status;
  };

  const toggleModal = () => { 
    modalFormOpen.value = !modalFormOpen.value
  }
  return {
    todos,
    filter,
    isLoading,
    modalFormOpen,
    filteredTodos,
    addTodo,
    updateTodo,
    removeTodo,
    toggleCompletion,
    setFilter,
    toggleModal
  };
});
