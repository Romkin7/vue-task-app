<template>
  <li
    @dblclick="$emit('toggle-reminder', task.id)"
    v-bind:class="[
      'task',
      task.done ? 'task--done' : '',
      task.reminder ? 'task--reminder' : '',
    ]"
  >
    <div>
      <h3>{{ task.text }}</h3>
      <time v-bind:datetime="String(task.startingDate)">{{
        new Date(task.startingDate).toLocaleDateString("fi")
      }}</time>
    </div>
    <div>
      <ButtonTag
        type="button"
        v-bind:variant="task.done ? 'green' : 'peach'"
        @click="$emit('toggle-done', task.id)"
      >
        <i
          v-bind:class="[
            'fa',
            task.done ? 'fa-check-square' : 'fa-check-square-o',
          ]"
          aria-hidden="true"
        ></i>
      </ButtonTag>
      <ButtonTag
        type="button"
        variant="red"
        @click="$emit('delete-task', task.id)"
      >
        <i class="fa fa-trash" aria-hidden="true"></i>
      </ButtonTag>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import ButtonTag from "@/components/Button.vue";
import type { ITask } from "@/@types";
import { events } from "@/data/events";
export default defineComponent({
  name: "TaskListItem",
  props: {
    task: { type: Object as PropType<ITask>, required: true },
  },
  components: {
    ButtonTag,
  },
  emits: events,
});
</script>

<style lang="scss">
@import "@/assets/scss/task.scss";
</style>
