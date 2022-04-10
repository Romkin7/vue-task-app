<template>
  <header>
    <nav>
      <RouterLink to="/">
        <h1>{{ brandTitle }}</h1>
      </RouterLink>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About task tracker app</RouterLink>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
export default defineComponent({
  name: "RRHeader",
  props: {
    brandTitle: String,
  },
  components: {
    RouterLink,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/header.scss";
</style>
