<template>
  <a
    class="word"
    :class="{ selected: word.selected, correct: word.correct }"
    @click="toggleSelected"
  >
    {{ word.text }}
  </a>
</template>

<script>
export default {
  props: {
    word: { type: Object, required: true },
  },
  methods: {
    toggleSelected(event) {
      const clickedWord = event.target.innerText;
      this.$store.dispatch("updateWordState", { text: clickedWord });
    },
  },
};
</script>

<style scoped>
.word {
  display: inline-block;
  font-size: 12px;
  height: 40px;
  width: 40px;
  background-color: rgba(238, 238, 238, 0.863);
  padding: 10px;
  text-align: center;
  border: 1px solid rgb(156, 152, 153);
  border-radius: 8px;
  line-height: 40px;
}
.word a {
  color: black;
}
.selected {
  background-color: rgba(150, 151, 133, 0.527);
}
.correct {
  background-color: rgb(190, 240, 190);
  pointer-events: none;
}
.incorrect {
  background-color: rgb(246, 220, 220);
}
</style>
