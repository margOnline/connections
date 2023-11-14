<template>
  <div class="word-grid-container">
    <h1>Results Page</h1>
    <WordGrid :words="guessedWords" :categories="categories" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import WordGrid from "@/components/WordGrid";

export default {
  components: { WordGrid },
  computed: {
    ...mapGetters(["guesses", "categories"]),
    guessedWords() {
      return this.guesses.flat();
    },
  },
};
</script>
<style>
.wordGrid {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
