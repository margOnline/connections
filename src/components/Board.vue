<template>
  <div class="word-grid-container">
    <button
      @click="showInstructions"
      id="help-button"
      aria-label="help"
      class="toolbar-button"
    >
      <i class="help-icon">?</i>
    </button>
    <GameMessage :numOfGuessesRemaining="numOfGuessesRemaining"></GameMessage>
    <InstructionPanel />
    <AppNotifications />
    <SolvedCategory
      v-for="category in solvedCategories()"
      :key="category.id"
      :category="category"
    >
    </SolvedCategory>

    <div v-if="gameOver">
      <SolvedCategory
        v-for="category in unSolvedCategories()"
        :key="category.id"
        :category="category"
      >
      </SolvedCategory>
    </div>

    <WordGrid
      :words="wordsForGrid"
      :categories="categories"
      v-if="!gameOver"
      :key="wordGridKey"
    />
    <NumberOfGuesses v-if="!gameOver" />
    <div v-if="!gameOver" class="actions-container">
      <ActionButton @click="shuffleWords()" text="Shuffle" />
      <ActionButton @click="unselectWords()" text="Deselect All" />
      <SubmitButton @submit="handleSubmission" />
    </div>
    <ViewResultButton v-else @view="viewResult" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import WordGrid from "@/components/WordGrid";
import SubmitButton from "@/components/SubmitButton";
import ActionButton from "@/components/ActionButton";
import ViewResultButton from "@/components/ViewResultButton";
import SolvedCategory from "@/components/SolvedCategory";
import GameMessage from "@/components/GameMessage";
import NumberOfGuesses from "@/components/NumberOfGuesses";
import AppNotifications from "@/components/AppNotifications.vue";
import useNotifications from "@/composables/useNotifications";
import InstructionPanel from "@/components/InstructionPanel.vue";
import { isOneAway } from "@/helpers";

import _ from "lodash";

export default {
  name: "Board",
  components: {
    WordGrid,
    SubmitButton,
    ActionButton,
    ViewResultButton,
    SolvedCategory,
    GameMessage,
    NumberOfGuesses,
    AppNotifications,
    InstructionPanel,
  },
  data() {
    return {
      wordGridKey: Math.random(),
      prevWordGridKey: null,
    };
  },
  props: {
    words: { type: Array, required: true },
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
      const categories = this.categories;
      return categories
        .filter((c) => c.solved)
        .sort((a, b) => a.guessedOrder - b.guessedOrder);
    },
    unSolvedCategories() {
      const categories = this.categories;
      return categories
        .filter((c) => !c.solved)
        .sort((a, b) => a.level - b.level);
    },
    addNotification({ message }) {
      useNotifications().addNotification({ message, timeout: 4000 });
    },
    unselectWords() {
      this.$store.state.words
        .filter((w) => !w.solved)
        .forEach((w) => {
          this.$store.dispatch("unselectWord", { word: w });
        });
    },
    shuffleWords() {
      this.prevWordGridKey = this.wordGridKey;
      this.wordGridKey = Math.random();
    },
    showInstructions() {
      this.$store.dispatch("updateShowInstructionModal", { value: true });
    },
  },
  computed: {
    ...mapGetters(["unsolvedWords", "categories", "numOfGuessesRemaining"]),
    wordsForGrid() {
      if (this.wordGridKey === this.prevWordGridKey) {
        return this.unsolvedWords;
      } else {
        return _.shuffle(this.unsolvedWords);
      }
    },
    gameOver() {
      return (
        this.numOfGuessesRemaining === 0 ||
        this.categories.every((c) => c.solved)
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
.actions-container > a,
.actions-container > button {
  margin: 5px;
}
#help-button {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: white;
  font-size: 16px;
  font-weight: bold;
  margin-left: 90%;
}
</style>
