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
        const correctGuess =
          _.uniqBy(selectedWords, (w) => w.category).length === 1;
        if (correctGuess) {
          this.$store.dispatch("handleCorrectGuess", {
            correctWords: selectedWords,
          });
          alert("correct guess!");
        } else {
          alert("incorrect");
        }
      }
      // check only 4 words submitted
      // prevent submission
    },
  },
  computed: {
    shuffledWords() {
      return _.shuffle(this.words);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

a {
  color: #42b983;
}
</style>
