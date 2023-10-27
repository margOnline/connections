<template>
  <div>
    <ul>
      <li v-for="word in words" :key="word.text" class="wordSquare">
        <WordSquare :word="word" />
      </li>
    </ul>
  </div>
</template>

<script>
import WordSquare from "@/components/WordSquare";

export default {
  props: {
    words: { type: Array, required: true },
    categoryId: { type: Number, default: null },
  },
  components: { WordSquare },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
