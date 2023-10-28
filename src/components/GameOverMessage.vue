<template>
  <div class="container">
    <div class="banner">
      <h3>{{ message }}</h3>
      <p>{{ categoryWords }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameMessage",
  props: {
    words: { type: Array, default: () => [] },
  },
  data() {
    return {
      messages: {
        0: "Better luck next time",
        1: "Phew",
        2: "Well done",
        4: "Perfect",
      },
      numOfGuessesRemaining: { type: Number }
    };
  },
  computed: {
    message() {
      const words = this.$store.state.words
        .filter((w) => w.categoryId === this.category.id)
        .map((w) => w.text);
      return words.join(", ");
    },
  },
  created() {
    this.numOfGuessesRemaining = this.$tore.state.numOfGuessesRemaining;
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
.easy {
  background-color: rgb(248, 246, 103);
}
.moderate {
  background-color: rgb(88, 230, 121);
}
.challenging {
  background-color: rgb(183, 135, 245);
}
.hard {
  background-color: rgb(150, 150, 244);
}
</style>
