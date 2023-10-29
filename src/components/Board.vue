<template>
  <div class="hello">
    <GameMessage></GameMessage>
    <SolvedCategory
      v-for="category in solvedCategories()"
      :key="category.id"
      :category="category"
    >
    </SolvedCategory>
    <WordList :words="this.unsolvedWords" />
    <SubmitButton v-if="!gameOver" @submit="handleSubmission" />
    <ViewResultButton v-else @view="viewResult" />
    <NumberOfGuesses v-if="!gameOver" />
  </div>
</template>

<script>
import WordList from "@/components/WordList";
import SubmitButton from "@/components/SubmitButton";
import ViewResultButton from "@/components/ViewResultButton";
import SolvedCategory from "@/components/SolvedCategory";
import GameMessage from "@/components/GameMessage";
import NumberOfGuesses from "@/components/NumberOfGuesses";
import _ from "lodash";

export default {
  name: "Board",
  components: {
    WordList,
    SubmitButton,
    ViewResultButton,
    SolvedCategory,
    GameMessage,
    NumberOfGuesses,
  },
  props: {
    words: { type: Array, required: true },
    categories: { type: Array, required: true },
  },
  methods: {
    async handleSubmission() {
      const guessedWords = this.$store.state.words.filter((w) => w.selected);
      if (guessedWords.length !== 4) {
        alert("select 4 and only 4 words");
      } else {
        if (this.isGuessCorrect(guessedWords)) {
          await this.$store.dispatch("handleCorrectGuess", {
            words: guessedWords,
          });
        } else {
          this.$store.dispatch("handleIncorrectGuess", { words: guessedWords });
        }
      }
      // check only 4 words submitted
      // prevent submission
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
    categoryWords(categoryId) {
      return this.words.filter((w) => w.categoryId === categoryId);
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
