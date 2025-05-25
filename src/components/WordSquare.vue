<template>
  <a class="word" :class="{ selected: word.selected }" @click="toggleSelected">
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
      this.$store.dispatch("switchWordSelected", { text: clickedWord });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&family=Oxygen&family=Oxygen+Mono&family=Poppins&display=swap");
.word {
  font-size: 2cqw;
  font-weight: 700;
  display: inline-block;
  font-family: "Poppins";
  height: 60px;
  width: 60px;
  background-color: #efefe6;
  padding: 10px;
  text-align: center;
  border-radius: 6px;
  justify-content: center;
  align-content: center;
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
    height: 80px;
    width: 80px;
  }
}
.shake {
  animation: horizontal-shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}
@keyframes horizontal-shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
