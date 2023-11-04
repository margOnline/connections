<template>
  <a
    class="word"
    :class="{ selected: word.selected, correct: word.correct }"
    @click="toggleSelected"
  >
    {{ word.text.toUpperCase() }}
  </a>
</template>

<script>
export default {
  props: {
    word: { type: Object, required: true },
  },
  methods: {
    toggleSelected(event) {
      const clickedWord = event.target.innerText.toLowerCase();
      this.$store.dispatch("updateWordState", { text: clickedWord });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&family=Oxygen&family=Oxygen+Mono&family=Poppins&display=swap");
.word {
  display: inline-block;
  font-family: "Poppins";
  font-size: 11px;
  font-weight: bold;
  height: 40px;
  width: 40px;
  background-color: #efefe6;
  padding: 10px;
  text-align: center;
  border-radius: 6px;
  line-height: 40px;
}
.word a {
  color: black;
}
.selected {
  background-color: #5a594e;
  color: white;
  font-weight: bold;
}
.correct {
  background-color: rgb(190, 240, 190);
  pointer-events: none;
}
.incorrect {
  background-color: rgb(246, 220, 220);
}
</style>
