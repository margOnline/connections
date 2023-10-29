<template>
  <div class="container">
    <h1>Results Page</h1>
    <WordGrid :words="words" />
  </div>
</template>

<script>
import WordGrid from "@/components/WordGrid";

export default {
  components: { WordGrid },
  methods: {
    guesses() {
      return this.$store.state.guesses;
    },
  },
  computed: {
    words() {
      return this.$store.state.words;
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
