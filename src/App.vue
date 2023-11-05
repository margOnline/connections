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
