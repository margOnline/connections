<template>
  <div class="container">
    <h1>Ready to play connections!</h1>
    <Board />
  </div>
</template>

<script>
import Board from "@/components/Board.vue";

export default {
  components: {
    Board,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 800px;
  margin: auto;
}
</style>
