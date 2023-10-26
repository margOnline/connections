<template>
  <ul>
    <li v-for="word in words" :key="word.text" class="wordSquare">
      <WordSquare :word="word" />
    </li>
  </ul>
</template>

<script>
import WordSquare from "@/components/WordSquare";

export default {
  props: { words: { type: Array, required: true } },
  components: { WordSquare },
};
</script>
