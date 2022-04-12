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
import { defineComponent } from "vue";
import TaskListItem from "./TaskListItem.vue";
import TaskForm from "@/components/TaskForm.vue";
export default defineComponent({
  name: "TaskList",
  components: { TaskListItem, TaskForm },
  data() {
    return {
      tasks: [] as ITask[],
    };
  },
  methods: {
    async fetchTasks() {
      const response = await fetch("http://localhost:8000/tasks");
      const tasks = await response.json();
      return tasks;
    },
    async fetchTask(id: number) {
      const response = await fetch(`http://localhost:8000/tasks/${id}`);
      const task = await response.json();
      return task;
    },
    async createTask(task: ITask) {
      const newTask: ITask = {
        id: gpc(4),
        text: task.text,
        done: false,
        reminder: task.reminder,
        startingDate: new Date(task.startingDate),
      };
      const response = await fetch("http://localhost:8000/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
      const createdTask = await response.json();
      this.tasks = [...this.tasks, createdTask];
    },
    async toggleReminder(id: number) {
      const taskToToggle = await this.fetchTask(id);
      const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
      const res = await fetch(`http://localhost:8000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });
      const returnedTask = await res.json();
      this.tasks = this.tasks.map((task: ITask) => {
        if (task.id === id) {
          return returnedTask;
        }
        return task;
      });
    },
    async toggleDone(id: number) {
      const taskToToggle = await this.fetchTask(id);
      const updatedTask = { ...taskToToggle, done: !taskToToggle.done };
      const res = await fetch(`http://localhost:8000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });
      const returnedTask = await res.json();
      this.tasks = this.tasks.map((task: ITask) => {
        if (task.id === id) {
          return returnedTask;
        }
        return task;
      });
    },
    async deleteTask(id: number) {
      if (confirm("Are you sure that you want to delete?")) {
        const res = await fetch(`http://localhost:8000/tasks/${id}`, {
          method: "DELETE",
        });
        res.status === 200
          ? (this.tasks = this.tasks.filter((task: ITask) => task.id !== id))
          : alert("Error while deleting task!");
      }
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
});
</script>

<style lang="scss">
@import "@/assets/scss/tasks.scss";
</style>
