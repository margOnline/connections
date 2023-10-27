<template>
  <div class="hello">
    <SolvedCategory
      v-for="category in solvedCategories()"
      :key="category.id"
      :category="category"
    >
    </SolvedCategory>
    <WordList :words="this.unsolvedWords" />
    <SubmitButton @submit="handleSubmission" />
  </div>
</template>

<script>
import WordList from "@/components/WordList";
import SubmitButton from "@/components/SubmitButton";
import SolvedCategory from "@/components/SolvedCategory";
import _ from "lodash";

export default {
  name: "Board",
  components: { WordList, SubmitButton, SolvedCategory },
  props: {
    words: { type: Array, required: true },
    categories: { type: Array, required: true },
  },
  methods: {
    handleSubmission() {
      const selectedWords = this.words.filter((w) => w.selected);
      if (selectedWords.length !== 4) {
        alert("4 words only can be submitted");
      } else {
        if (this.isGuessCorrect(selectedWords)) {
          const correctCategoryId = selectedWords[0].categoryId;
          this.$store.dispatch("handleCorrectGuess", {
            categoryId: correctCategoryId,
          });
          this.updateKey();
        } else {
          alert("incorrect");
        }
      }
      // check only 4 words submitted
      // prevent submission
    },
    isGuessCorrect(words) {
      return _.uniqBy(words, (w) => w.category).length === 1;
    },
    updateKey() {
      return Math.random();
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
