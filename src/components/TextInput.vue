<template>
  <div class="input">
    <label v-bind:for="inputId"> {{ label }}</label>
    <input
      v-bind:type="type"
      v-bind:name="name"
      v-bind:required="required === 'true' ? true : false"
      class="input"
      @input="handleInput"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { InputTypes } from "@/@types";
export default defineComponent({
  name: "TextInput",
  props: {
    type: {
      type: String as PropType<InputTypes>,
      required: true,
    },
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
@import "@/assets/scss/input.scss";
</style>
