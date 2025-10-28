<script setup>
import { ref } from 'vue';
import { useTodoStore } from './../stores/todoStore';
import TodoForm from './../components/TodoForm.vue';
import TodoItem from './../components/TodoItem.vue';
import Filter from './Filter.vue';
import Loading from './Loading.vue';

const store = useTodoStore();
const editingTodo = ref(null);

const startEdit = (todo) => {
  editingTodo.value = todo;
};

const stopEdit = () => {
  editingTodo.value = null;
};
</script>

<template>
  <section class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4 text-gray-800">Minhas Tarefas</h2>

    <Filter />
    <Loading v-if="store.isLoading" />

    <div class="border border-gray-200 rounded-lg divide-y divide-gray-200">
      <template v-if="store.filteredTodos.length">
        <TodoItem v-for="todo in store.filteredTodos" :key="todo.id" :todo="todo" @edit="startEdit" />
      </template>
      <p v-else class="p-4 text-center text-gray-500">
        Nenhuma tarefa encontrada para o filtro selecionado.
      </p>
    </div>

  </section>

  <TodoForm :initial-todo="editingTodo" @close="stopEdit" v-if="editingTodo" />
</template>
