<template>
  <div class="banner">
    <p>Number of guesses: {{ numOfGuesses() }}</p>
  </div>
</template>

<script>
export default {
  name: "NumberOfGuesses",
  methods: {
    numOfGuesses() {
      return this.$store.state.numOfGuessesRemaining;
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr;
  margin: 20px auto;
}
.banner {
  padding: 10px;
  border-radius: 7px;
}
</style>
