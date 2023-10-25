<template>
  <a class="word" :class="word.state" @click="toggleState">{{ word.text }}</a>
</template>

<script>
export default {
  props: {
    word: { type: Object, required: true },
  },
  methods: {
    toggleState() {
      console.log("clicked");
    },
  },
};
</script>

<style scoped>
.word,
.word a {
  color: black;
  border-radius: 7px;
  padding: 5px;
}
.selected {
  background-color: rgba(150, 151, 133, 0.527);
}
.unselected {
  background-color: rgba(238, 238, 238, 0.863);
}
.solved {
  background-color: rgb(190, 240, 190);
}
.incorrect {
  background-color: rgb(246, 220, 220);
}
</style>
