<template>
  <div class="datePicker">
    <label v-bind:for="inputId"> {{ label }}</label>
    <input
      type="date"
      v-bind:name="name"
      v-bind:required="required === 'true' ? true : false"
      @input="handleInput"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TextInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    required: {
      type: String,
      required: true,
    },
    inputId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  methods: {
    handleInput(event: Event) {
      this.$emit("input", event);
    },
  },
});
</script>

<style lang="scss">
@import "@/assets/scss/datePicker.scss";
</style>
