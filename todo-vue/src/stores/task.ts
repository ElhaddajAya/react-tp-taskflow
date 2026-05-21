import { defineStore } from "pinia";
import { ref } from "vue";

interface Task {
  id: string;
  title: string;
  done: boolean;
}

// defineStore — équivalent de createSlice en Redux mais beaucoup plus simple
export const useTaskStore = defineStore("tasks", () => {
  // State
  const tasks = ref<Task[]>([]);
  const loading = ref(true);
  const error = ref<string | null>(null);

  // Charger les tâches depuis l'API
  async function fetchTasks() {
    try {
      const res = await fetch("http://localhost:4000/tasks");
      tasks.value = await res.json();
    } catch {
      error.value = "Erreur chargement";
    } finally {
      loading.value = false;
    }
  }

  // Ajouter une tâche
  async function addTask(title: string) {
    const res = await fetch("http://localhost:4000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, done: false }),
    });
    tasks.value.push(await res.json());
  }

  // Supprimer une tâche
  async function deleteTask(id: string) {
    await fetch("http://localhost:4000/tasks/" + id, { method: "DELETE" });
    tasks.value = tasks.value.filter((t) => t.id !== id);
  }

  // Toggler une tâche
  async function toggleTask(task: Task) {
    const res = await fetch("http://localhost:4000/tasks/" + task.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...task, done: !task.done }),
    });
    const data = await res.json();
    const i = tasks.value.findIndex((t) => t.id === data.id);
    tasks.value[i] = data;
  }

  return { tasks, loading, error, fetchTasks, addTask, deleteTask, toggleTask };
});
