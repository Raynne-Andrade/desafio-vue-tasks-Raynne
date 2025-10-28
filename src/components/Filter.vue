<script setup>
import { ref } from 'vue';
import { useTodoStore } from './../stores/todoStore';

const store = useTodoStore();
const editingTodo = ref(null);

</script>
<template>
        <div class="mb-4 flex space-x-2">
      <button
        @click="store.setFilter('all')"
        :class="[
          'px-3 py-1 text-sm rounded-full transition',
          store.filter.status === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        ]"
      >
        Todas
      </button>
      <button
        @click="store.setFilter('pending')"
        :class="[
          'px-3 py-1 text-sm rounded-full transition',
          store.filter.status === 'pending' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        ]"
      >
        Pendentes
      </button>
      <button
        @click="store.setFilter('completed')"
        :class="[
          'px-3 py-1 text-sm rounded-full transition',
          store.filter.status === 'completed' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        ]"
      >
        Concluídas
      </button>
    </div>
</template>