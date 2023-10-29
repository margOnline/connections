<template>
  <h1>{{ message }}!</h1>
</template>

<script>
export default {
  name: "GameMessage",
  data() {
    return {
      gameOverMessages: {
        0: "Better luck next time",
        1: "Phew",
        2: "Not bad",
        3: "Well done",
        4: "Perfect",
      },
      inProgressMessage: "Create 4 groups of 4",
      numOfGuessesRemaining: { type: Number },
    };
  },
  computed: {
    message() {
      if (this.$store.state.categories.every((c) => c.solved)) {
        return this.gameOverMessages[this.numOfGuessesRemaining];
      } else {
        return this.inProgressMessage;
      }
    },
  },
  created() {
    this.numOfGuessesRemaining = this.$store.state.numOfGuessesRemaining;
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
