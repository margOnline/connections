<template>
  <div class="container">
    <div class="banner">
      <h1>{{ message }}!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameMessage",
  data() {
    return {
      messages: {
        0: "Better luck next time",
        1: "Phew",
        2: "Not bad",
        3: "Well done",
        4: "Perfect",
      },
      numOfGuessesRemaining: { type: Number },
    };
  },
  computed: {
    message() {
      return this.messages[this.numOfGuessesRemaining];
    },
  },
  created() {
    this.numOfGuessesRemaining = this.$store.state.numOfGuessesRemaining;
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
