<template>
  <FormTag class="taskForm" @submit="submitForm">
    <div class="row">
      <div class="col-md-6">
        <TextInput
          type="text"
          name="text"
          label="Task text"
          required="true"
          inputId="text"
          @input="updateTask"
        />
      </div>
      <div class="col-md-6">
        <DatePicker
          name="startingDate"
          label="Starting date"
          required="true"
          inputId="startingDate"
          @input="updateTask"
        />
      </div>
      <div class="col-md-12">
        <div class="taskForm--checkbox">
          <input
            type="checkbox"
            name="reminder"
            v-model="reminder"
            id="reminder"
            checked
          />
          <label for="reminder">reminder</label>
        </div>
      </div>
    </div>
    <ButtonTag
      type="submit"
      variant="green"
      @click="$emit('create-task', task)"
    >
      Create Task
    </ButtonTag>
  </FormTag>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextInput from "@/components/TextInput.vue";
import FormTag from "@/components/Form.vue";
import ButtonTag from "@/components/Button.vue";
import { events } from "@/data/events";
import DatePicker from "./DatePicker.vue";
export default defineComponent({
  name: "TaskForm",
  components: {
    FormTag,
    TextInput,
    ButtonTag,
    DatePicker,
  },
  data() {
    return {
      text: "",
      startingDate: "",
      reminder: false,
    };
  },
  methods: {
    updateTask(event: any) {
      this[event.target.name as "text" | "startingDate"] = event.target.value;
    },
    submitForm(event: Event) {
      event.preventDefault();
      this.$emit("create-task", {
        text: this.text,
        startingDate: this.startingDate,
        reminder: this.reminder,
      });

      this.text = "";
      this.startingDate = "";
      this.reminder = false;
    },
  },
  emits: events,
});
</script>

<style lang="scss">
@import "@/assets/scss/form.scss";
</style>
