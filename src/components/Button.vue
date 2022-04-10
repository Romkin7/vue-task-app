<template>
  <button v-bind:class="['button', `button--${variant}`]" v-bind:type="type">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import type { ButtonTypes, ButtonVariants } from "@/@types";
import { defineComponent } from "vue";
import type { PropType } from "vue";
export default defineComponent({
  name: "ButtonTag",
  props: {
    type: {
      type: String as PropType<ButtonTypes>,
      default: "submit",
    },
    variant: {
      type: String as PropType<ButtonVariants>,
      default: "green",
    },
  },
});
</script>

<style lang="scss">
@import "@/assets/scss/button.scss";
</style>
