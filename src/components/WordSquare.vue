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
  font-size: 0.75vw;
  font-weight: bold;
  height: 40px;
  width: 40px;
  background-color: #efefe6;
  padding: 10px;
  text-align: center;
  border-radius: 6px;
  line-height: 20px;
}
.word a {
  color: black;
}
.selected {
  background-color: #5a594e;
  color: white;
  font-weight: bold;
}
@media (min-width: 721px) and (max-width: 1024px) {
  .word {
    font-size: 2vw;
    height: 80px;
    width: 80px;
  }
}
@media (min-width: 240px) and (max-width: 720px) {
  .word {
    font-size: 3vw;
  }
}
</style>
