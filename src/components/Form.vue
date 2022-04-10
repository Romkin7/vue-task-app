<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FormTag"
});
</script>

<style lang="scss">
@import '@/assets/scss/form.scss';
</style>
