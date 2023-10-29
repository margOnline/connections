<template>
  <div class="container">
    <h1>Results Page</h1>
    <div v-for="(guess, index) in guesses()" :key="index" class="wordGrid">
      <div v-for="word in guess" :key="word.text">{{ word.categoryId }}</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    guesses() {
      return this.$store.state.guesses;
    },
  },
};
</script>
<style>
.wordGrid {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
