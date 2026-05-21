<script setup lang="ts">
// Définition du type Task
interface Task { id: string; title: string; done: boolean; }

// defineProps — équivalent de props: { task: Task } en React
defineProps<{ task: Task }>();

// defineEmits — équivalent des callback props en React (onDelete, onToggle)
const emit = defineEmits<{
    toggle: [task: Task];
    delete: [id: string];
}>();
</script>

<template>
    <li
        style="display: flex; align-items: center; gap: 12px; padding: 14px; margin-bottom: 8px; background: white; border-radius: 8px;">

        <!-- @change émet l'événement toggle vers le parent -->
        <input type="checkbox" :checked="task.done" @change="emit('toggle', task)" />

        <!-- Style dynamique selon task.done -->
        <span :style="{
            flex: 1,
            textDecoration: task.done ? 'line-through' : 'none',
            color: task.done ? '#999' : '#333'
        }">
            {{ task.title }}
        </span>

        <RouterLink :to="'/tasks/' + task.id" style="color: #42b883;">Détails</RouterLink>

        <!-- @click émet l'événement delete vers le parent -->
        <button @click="emit('delete', task.id)" style="background: none; border: none; cursor: pointer;">
            Del
        </button>
    </li>
</template>