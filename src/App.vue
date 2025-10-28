<script setup>
import { ref } from 'vue';
import { useTodoStore } from './stores/todoStore.js';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue'

const store = useTodoStore();

</script>

<template>
  <section class="bg-gray-100 p-4 sm:p-8 flex justify-center flex-col w-full">
    <h1 class="text-4xl font-extrabold text-gray-900 mb-5">
      Gerenciador de Tarefas
    </h1>
    <TodoForm v-if='store.modalFormOpen' @close="store.toggleModal()" />
    <TodoList />
    <button @click="store.toggleModal()" class="mt-5 w-3xs"> Adicionar nova tarefa </button>
  </section>
</template>
