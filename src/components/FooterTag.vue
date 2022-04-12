<template>
  <footer>
    <div class="container-fluid footer">
      <div class="row">
        <div class="col-md-12">
          <p>Copyright 2022</p>
          <RouterLink to="/about">About task tracker app</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
export default defineComponent({
  name: "FooterTag",
  components: {
    RouterLink,
  },
});
</script>
