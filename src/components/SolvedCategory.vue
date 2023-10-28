<template>
  <div class="container">
    <div class="banner" :class="category.level.toLowerCase()">
      <h3>{{ category.name }}</h3>
      <p>{{ categoryWords }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SolvedCategory",
  props: {
    category: { type: Object, required: true },
  },
  computed: {
    categoryWords() {
      const words = this.$store.state.words
        .filter((w) => w.categoryId === this.category.id)
        .map((w) => w.text);
      return words.join(", ");
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr;
  margin: 20px auto;
}
.banner {
  padding: 10px;
  border-radius: 7px;
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
