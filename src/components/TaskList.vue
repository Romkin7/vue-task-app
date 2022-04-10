<template>
    <ul>
      <TaskListItem
        v-for="task in tasks"
        v-bind:key="task.id"
        :task="task"
        @delete-task="deleteTask"
        @toggle-reminder="toggleReminder"
        @toggle-done="toggleDone"
      />
    </ul>
    <TaskForm @create-task="createTask" />
</template>

<script lang="ts">
import gpc from "generate-pincode";
import type { ITask } from "@/@types";
import { defineComponent, ref } from "vue";
import { Tasks } from '@/data/tasksList';
import TaskListItem from "./TaskListItem.vue";
import TaskForm from "@/components/TaskForm.vue";
export default defineComponent({
  name: "TaskList",
  components: { TaskListItem, TaskForm },
  setup() {
    const tasks = ref<ITask[]>(Tasks);
    return { tasks };
  },
  methods: {
    createTask(task: ITask) {
      console.log(task);
      const newTask: ITask = {
        id: gpc(4),
        text: task.text,
        done: false,
        reminder: task.reminder,
        startingDate: new Date(task.startingDate),
      };
      this.tasks = [...this.tasks, newTask];
    },
    toggleReminder(id: number) {
      this.tasks = this.tasks.map((task: ITask) => {
        if(task.id === id) {
          task.reminder = !task.reminder;
          return task;
        }
        return task;
      });
    },
    toggleDone(id: number) {
      this.tasks = this.tasks.map((task: ITask) => {
        if(task.id === id) {
          task.done = !task.done;
          return task;
        }
        return task;
      });
    },
    deleteTask(id: number) {
      console.log(this.tasks)
      if (confirm("Are you sure that you want to delete?")) {
        this.tasks = this.tasks.filter((task: ITask) => task.id !== id);
      }
    },
  },
});
</script>

<style lang="scss">
@import "@/assets/scss/tasks.scss";
</style>
