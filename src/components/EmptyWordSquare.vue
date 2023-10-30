<template>
  <div v-if="!word.correct" class="empty-square unsolved"></div>
  <div v-else class="empty-square" :class="solvedCategoryLevel"></div>
</template>

<script>
export default {
  props: {
    word: { type: Object, required: true },
  },
  computed: {
    solvedCategoryLevel() {
      const category = this.$store.state.categories.find(
        (c) => c.id === this.word.categoryId
      );
      return category.level.toLowerCase();
    },
  },
};
</script>

<style scoped>
.empty-square {
  display: inline-block;
  height: 60px;
  width: 60px;
  padding: 10px;
  border: 1px solid black;
  text-align: center;
  border-radius: 8px;
  line-height: 60px;
}
.unsolved {
  background-color: rgba(150, 151, 133, 0.527);
}
.correct {
  background-color: rgb(190, 240, 190);
  pointer-events: none;
}
.incorrect {
  background-color: rgb(246, 220, 220);
}
.easy {
  background-color: rgb(248, 246, 103);
}
.moderate {
  background-color: rgb(88, 230, 121);
}
.challenging {
  background-color: rgb(183, 135, 245);
}
.hard {
  background-color: rgb(150, 150, 244);
}
</style>
