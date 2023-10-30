<template>
  <div class="container">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.word-grid-container {
  width: 45%;
  margin: auto;
}
</style>
