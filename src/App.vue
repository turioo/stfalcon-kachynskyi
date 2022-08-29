<template>
  <Header />
  <router-view />
</template>

<style src="sanitize.css" lang="css"></style>
<style src="@/assets/scss/main.scss" lang="scss"></style>
<script>
// partials
import Header from "@/components/partials/Header/index.vue";
export default {
  name: "app",
  components: {
    Header,
  },
};
</script>
