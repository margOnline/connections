<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <WordList :words="this.shuffledWords" />
    <SubmitButton @submit="handleSubmission" />
  </div>
</template>

<script>
import WordList from "@/components/WordList";
import SubmitButton from "@/components/SubmitButton";
import sourceData from "@/data.json";
import _ from "lodash";

export default {
  name: "Board",
  components: { WordList, SubmitButton },
  data() {
    return {
      msg: "Welcome to Connections",
      words: sourceData.words,
      categories: sourceData.categories,
    };
  },
  methods: {
    handleSubmission() {
      const selectedWords = this.words.filter((w) => w.selected);
      if (selectedWords.length !== 4) {
        alert("4 words only can be submitted");
      } else {
        if (this.isGuessCorrect(selectedWords)) {
          this.$store.dispatch("handleCorrectGuess", {
            correctWords: selectedWords,
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
  },
  computed: {
    shuffledWords() {
      return _.shuffle(this.words);
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
