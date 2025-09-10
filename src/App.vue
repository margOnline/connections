<template>
  <div class="container">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.container {
  width: 90%;
  margin: auto;
}
.easy {
  background-color: #f9df6d;
}
.moderate {
  background-color: #a0c35a;
}
.challenging {
  background-color: #b0c4ef;
}
.hard {
  background-color: #ba81c5;
}
@media (min-width: 240px) {
  .container {
    width: 100%;
  }
}
@media (min-width: 480px) {
  .container {
    width: 380px;
    max-width: 380px;
  }
}
</style>
