<template>
  <div class="guesses-container">
    Mistakes remaining
    <div
      v-for="n in numOfGuessesRemaining()"
      :key="n"
      class="filled circle"
    ></div>
    <div v-for="n in numOfGuesses()" :key="n" class="unfilled circle"></div>
  </div>
</template>

<script>
export default {
  name: "NumberOfGuesses",
  methods: {
    numOfGuessesRemaining() {
      return this.$store.state.numOfGuessesRemaining;
    },
    numOfGuesses() {
      return 4 - this.$store.state.numOfGuessesRemaining;
    },
  },
};
</script>

<style scoped>
.guesses-container {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 8fr 1fr 1fr 1fr 1fr;
}
.circle {
  height: 18px;
  width: 18px;
  border-radius: 9px;
  border: 1px solid black;
  margin: 0;
}
.filled {
  background-color: grey;
}
.unfilled {
  background-color: white;
}
</style>
