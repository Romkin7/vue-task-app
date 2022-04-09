<template>
    <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/header.scss';
</style>