<script setup>
const emit = defineEmits(['close', 'delete']);
</script>
<template>
    <section class='fixed flex justify-center min-w-full h-full z-80 top-0 left-0 items-center bg-[#000000e8]'>
        <div class="bg-white p-5 rounded-2xl text-gray-800"> 
            <h3 class="pb-5 text-2xl">  Deseja deletar a Tarefa ?</h3>
            <div> <button @click="$emit('delete')" class="bg-red-500 text-white p-2 rounded-2xl"> Sim, quero deletar </button> <button @click="$emit('close')" class="rounded-2xl bg-transparent border border-gray-500"> Não </button></div>
        </div>

    </section>
</template>