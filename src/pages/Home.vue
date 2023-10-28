<template>
  <div class="container">
    <Board :categories="categories" :words="words" />
  </div>
</template>

<script>
import Board from "@/components/Board.vue";

export default {
  components: {
    Board,
  },
  computed: {
    words() {
      return this.$store.state.words;
    },
    categories() {
      return this.$store.state.categories;
    },
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
