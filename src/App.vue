<template>
  <HeaderTag brandTitle="Task tracker app" />
  <main>
    <RouterView />
  </main>
  <FooterTag />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderTag from "@/components/Header.vue";
import FooterTag from "@/components/FooterTag.vue";
import { RouterView } from "vue-router";
export default defineComponent({
  components: {
    HeaderTag,
    FooterTag,
    RouterView,
  },
});
</script>

<style lang="scss">
@import "@/assets/scss/base.scss";
</style>
