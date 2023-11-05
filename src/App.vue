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
.container {
  width: 45%;
  margin: auto;
}
@media (min-width: 768px) and (max-width: 1060px) {
  .container {
    width: 60%;
  }
}
@media (min-width: 240px) and (max-width: 720px) {
  .container {
    width: 100%;
  }
}
</style>
