<template>
  <div class="container">
    <div class="filled circle"></div>
    <div class="filled circle"></div>
    <div class="unfilled circle"></div>
    <div class="unfilled circle"></div>
  </div>
  <div>
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 25px auto;
  padding: 0 40%;
}
.circle {
  height: 20px;
  width: 20px;
  border-radius: 10px;
  border: 1px solid black;
}
.filled {
  background-color: grey;
}
.unfilled {
  background-color: white;
}
</style>
