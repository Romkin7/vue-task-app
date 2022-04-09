<script setup lang="ts">
import Header from './components/Header.vue';
import { RouterView } from "vue-router";
</script>

<template>
  <Header />
  <RouterView />
</template>

<style>
@import "@/assets/base.scss";
</style>
