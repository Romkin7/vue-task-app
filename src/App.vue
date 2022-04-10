<template>
  <RRHeader brandTitle="Task tracker app" />
  <main>
    <RouterView />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RRHeader from "@/components/Header.vue";
import { RouterView } from "vue-router";
export default defineComponent({
  components: {
    RRHeader,
    RouterView,
  },
});
</script>

<style lang="scss">
@import "@/assets/scss/base.scss";
</style>
