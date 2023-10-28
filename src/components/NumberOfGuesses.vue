<template>
  <div class="container">
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
