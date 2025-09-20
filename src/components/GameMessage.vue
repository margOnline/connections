<template>
  <h2>{{ message }}!</h2>
</template>

<script>
export default {
  name: "GameMessage",
  props: {
    numOfGuessesRemaining: { type: Number, required: true },
  },
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
    };
  },
  methods: {
    isGameOver() {
      return (
        this.numOfGuessesRemaining === 0 ||
        this.$store.state.categories.every((c) => c.solved)
      );
    },
  },
  computed: {
    message() {
      const gameOver = this.isGameOver();
      if (gameOver) {
        return this.gameOverMessages[this.numOfGuessesRemaining];
      } else {
        return this.inProgressMessage;
      }
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  font-size: 1rem;
}
</style>
