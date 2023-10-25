<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="word in words" :key="word.text">
        <WordSquare :word="word" />
      </li>
    </ul>
    <SubmitButton @submit="handleSubmission" />
  </div>
</template>

<script>
import WordSquare from "@/components/WordSquare";
import SubmitButton from "@/components/SubmitButton";
import sourceData from "@/data.json";

export default {
  name: "Board",
  components: { WordSquare, SubmitButton },
  data() {
    return {
      msg: "Welcome to Connections",
      words: sourceData.words,
      categories: sourceData.categories,
    };
  },
  methods: {
    handleSubmission() {
      console.log("submitted");
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
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
