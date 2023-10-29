<template>
  <div>
    <ul v-if="!gameOver">
      <li v-for="word in words" :key="word.text">
        <WordSquare :word="word" />
      </li>
    </ul>
    <ul v-else>
      <li v-for="(word, idx) in guessedWords" :key="word.text + idx">
        <EmptyWordSquare :word="word" />
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
    categoryId: { type: Number, default: null },
  },
  components: { WordSquare, EmptyWordSquare },
  computed: {
    gameOver() {
      return (
        this.$store.state.numOfGuessesRemaining === 0 ||
        this.$store.state.categories.every((c) => c.solved)
      );
    },
    guessedWords() {
      return this.$store.state.guesses.flat();
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
