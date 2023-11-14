<template>
  <div>
    <ul v-if="!gameOver">
      <li v-for="word in words" :key="word.text">
        <WordSquare :word="word" />
      </li>
    </ul>
    <ul v-else>
      <li v-for="word in words" :key="word.text">
        <EmptyWordSquare :word="word" :categories="categories" />
      </li>
    </ul>
  </div>
</template>

<script>
import WordSquare from "@/components/WordSquare";
import EmptyWordSquare from "@/components/EmptyWordSquare";

export default {
  props: {
    words: { type: Array, required: true },
    categories: { type: Array, required: true },
  },
  components: { WordSquare, EmptyWordSquare },
  computed: {
    gameOver() {
      return (
        parseInt(this.$store.state.numOfGuessesRemaining) === 0 ||
        this.categories.every((c) => c.solved)
      );
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 5px;
  row-gap: 5px;
}
</style>
