<template>
  <div class="word-grid-container">
    <GameMessage></GameMessage>
    <AppNotification v-if="this.$store.state.oneAway" />
    <SolvedCategory
      v-for="category in solvedCategories()"
      :key="category.id"
      :category="category"
    >
    </SolvedCategory>
    <WordGrid :words="this.unsolvedWords" v-if="!gameOver" />
    <SubmitButton v-if="!gameOver" @submit="handleSubmission" />
    <ViewResultButton v-else @view="viewResult" />
    <NumberOfGuesses v-if="!gameOver" />
  </div>
</template>

<script>
import WordGrid from "@/components/WordGrid";
import SubmitButton from "@/components/SubmitButton";
import ViewResultButton from "@/components/ViewResultButton";
import SolvedCategory from "@/components/SolvedCategory";
import GameMessage from "@/components/GameMessage";
import NumberOfGuesses from "@/components/NumberOfGuesses";
import AppNotification from "@/components/AppNotification";

import _ from "lodash";

export default {
  name: "Board",
  components: {
    WordGrid,
    SubmitButton,
    ViewResultButton,
    SolvedCategory,
    GameMessage,
    NumberOfGuesses,
    AppNotification,
  },
  props: {
    words: { type: Array, required: true },
    categories: { type: Array, required: true },
  },
  methods: {
    async handleSubmission() {
      const guessedWords = this.$store.state.words.filter((w) => w.selected);
      if (guessedWords.length !== 4) alert("select 4 and only 4 words");

      const isDuplicateGuess = await this.$store.dispatch("isDuplicateGuess", {
        guessedWords,
      });
      if (isDuplicateGuess) {
        alert("You already guessed this");
        guessedWords.forEach((word) =>
          this.$store.dispatch("updateWordState", { text: word.text })
        );
        return;
      }

      if (this.isGuessCorrect(guessedWords)) {
        await this.$store.dispatch("handleCorrectGuess", {
          words: guessedWords,
        });
      } else {
        this.$store.dispatch("handleIncorrectGuess", { words: guessedWords });
      }
    },
    viewResult() {
      this.$router.push("Result");
    },
    isGuessCorrect(words) {
      return _.uniqBy(words, (w) => w.categoryId).length === 1;
    },
    solvedCategories() {
      const categories = this.$store.state.categories;
      return categories.filter((c) => c.solved);
    },
  },
  computed: {
    unsolvedWords() {
      const words = this.$store.state.words.filter((word) => !word.correct);
      return _.shuffle(words);
    },
    gameOver() {
      return (
        this.$store.state.numOfGuessesRemaining === 0 ||
        this.$store.state.categories.every((c) => c.solved)
      );
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
