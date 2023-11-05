<template>
  <div class="word-grid-container">
    <GameMessage></GameMessage>
    <AppNotifications />
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
import AppNotifications from "@/components/AppNotifications.vue";
import useNotifications from "@/composables/useNotifications";
import { isOneAway } from "@/helpers";

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
    AppNotifications,
  },
  props: {
    words: { type: Array, required: true },
    categories: { type: Array, required: true },
  },
  methods: {
    handleSubmission: async function () {
      const guessedWords = this.$store.state.words.filter((w) => w.selected);
      if (guessedWords.length !== 4) alert("select 4 and only 4 words");

      const isDuplicateGuess = await this.$store.dispatch("isDuplicateGuess", {
        guessedWords,
      });
      if (isDuplicateGuess) {
        this.addNotification({ message: "You already guessed this" });
        return;
      }

      if (this.isGuessCorrect(guessedWords)) {
        await this.$store.dispatch("handleCorrectGuess", {
          words: guessedWords,
        });
      } else {
        const wordElements = this.$el.querySelectorAll(".selected");
        wordElements.forEach((el) => el.classList.add("shake"));
        if (isOneAway({ words: guessedWords })) {
          this.addNotification({ message: "One away" });
        }
        this.$store.dispatch("handleIncorrectGuess", { words: guessedWords });
        setTimeout(() => {
          wordElements.forEach((el) => el.classList.remove("shake"));
        }, 1000);
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
      return categories
        .filter((c) => c.solved)
        .sort((a, b) => a.guessedOrder - b.guessedOrder);
    },
    addNotification({ message }) {
      useNotifications().addNotification({ message, timeout: 4000 });
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
