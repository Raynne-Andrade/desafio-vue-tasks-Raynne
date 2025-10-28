<script setup>
import { ref } from 'vue';
import { useTodoStore } from './../stores/todoStore.js';
import IconPencilEdit from './icons/IconPencilEdit.vue';
import IconTrash from './icons/IconTrash.vue';
import ModalDeleteTodo from './ModalDeleteTodo.vue';

const props = defineProps({
  todo: Object,
});

const emit = defineEmits(['edit']);

const store = useTodoStore();

let openConfirmModal = ref(false)

const toggleCompletion = () => {
  store.toggleCompletion(props.todo.id);
};

const removeTodo = () => {
    store.removeTodo(props.todo.id);
  
};


</script>

<template>
  <section :class="[
    'flex items-center justify-between p-4 border-b last:border-b-0 transition duration-150 ease-in-out',
    todo.is_completed ? 'bg-green-200' : 'bg-white hover:bg-gray-50'
  ]">
    <div class="flex items-center">
      <input type="checkbox" :checked="todo.is_completed" @change="toggleCompletion" :disabled="store.isLoading"
        class="appearance-none w-4 h-4 border-2 border-gray-300 rounded-sm bg-white checked:border-gray-500 checked:bg-gray-500" />
      <div class="ml-4 text-left">
        <h3 :class="[
          'text-lg font-semibold',
          todo.is_completed ? 'line-through text-gray-500' : 'text-gray-900'
        ]">
          {{ todo.title }}
        </h3>
        <p v-if="todo.description" class="text-sm text-gray-500">
          Descrição: {{ todo.description }}
        </p>
        <span class="text-sm text-gray-500">
          ID: {{ todo.id }}
        </span>
      </div>
    </div>

    <div class="flex space-x-2">
      <button @click="$emit('edit', todo)" :disabled="store.isLoading"
        class=" bg-gray-400 disabled:opacity-50 p-1 rounded-full hover:bg-[#d29bfd] transition" title="Editar">
        <IconPencilEdit />
      </button>

      <button @click="() => openConfirmModal = true" :disabled="store.isLoading"
        class="bg-red-500 text-red-600 hover:text-red-800 disabled:opacity-50 p-1 rounded-full hover:bg-red-7 \00 transition"
        title="Remover">
        <IconTrash />
      </button>
    </div>

    <ModalDeleteTodo v-if="openConfirmModal" @close="openConfirmModal= false" @delete="removeTodo()" />
  </section>
</template>
