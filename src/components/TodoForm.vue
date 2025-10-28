<script setup>
import { ref, watch } from 'vue';
import { useTodoStore } from './../stores/todoStore.js';

const props = defineProps({
  initialTodo: Object,
});

const emit = defineEmits(['close']);

const store = useTodoStore();

const id = ref(null);
const title = ref('');
const description = ref('');
const isEditing = ref(false);

const resetForm = () => {
  id.value = null;
  title.value = '';
  description.value = '';
  isEditing.value = false;
};

watch(() => props.initialTodo, (newVal) => {
  if (newVal) {
    id.value = newVal.id;
    title.value = newVal.title;
    description.value = newVal.description;
    isEditing.value = true;
  } else {
    resetForm();
  }
}, { immediate: true });

const handleSubmit = async () => {
  if (!title.value.trim()) return;

  if (isEditing.value && id.value !== null) {
    await store.updateTodo({
      id: id.value,
      title: title.value,
      description: description.value,
      is_completed: props.initialTodo?.is_completed ?? false,
    });
  } else {
    await store.addTodo(title.value, description.value);
  }

  resetForm();
  emit('close');
};
</script>

<template>
  <section
    class="fixed flex justify-center min-w-full h-full z-80 bg- top-0 left-0 items-center bg-[#000000e8]">
      <form @submit.prevent="handleSubmit" class="bg-white-400 p-6 rounded-lg shadow-md mb-6 bg-white opacity- w-md">
        <span class="text-gray-800 relative left-48 cursor-pointer" @click="$emit('close')"> X </span>
        <h2 class="text-2xl font-bold mb-4 text-gray-800">{{ isEditing ? 'Editar Tarefa' : 'Adicionar Nova Tarefa' }}
        </h2>

        <span class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700">Título</label>
          <input id="title" v-model="title" type="text" required
            class=" text-gray-700 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Ex: Comprar pão" />
        </span>

        <span class="mb-4">
          <label for="description" class="block text-sm font-medium text-gray-700">Descrição (Opcional)</label>
          <textarea id="description" v-model="description" rows="3"
            class=" text-gray-700 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Detalhes da tarefa..."></textarea>
        </span>

        <span class="flex justify-end space-x-3">
          <button v-if="isEditing" @click="$emit('close')"
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Cancelar
          </button>
          <button type="submit" :disabled="store.isLoading"
            class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
            <span v-if="store.isLoading">Salvando...</span>
            <span v-else>{{ isEditing ? 'Salvar Edição' : 'Adicionar Tarefa' }}</span>
          </button>
        </span>
      </form>
  </section>
</template>
