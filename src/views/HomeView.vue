<template>
  <section id="tasks" class="tasks" aria-label="Tasks container">
    <h2>Task Tracker</h2>
    <TaskList />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskList from "@/components/TaskList.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    TaskList,
  },
});
</script>
