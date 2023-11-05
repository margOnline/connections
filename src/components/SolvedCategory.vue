<template>
  <div class="category-container">
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
        .map((w) => w.text[0].toUpperCase() + w.text.slice(1));
      return words.join(", ");
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 10px;
}
p {
  margin: 5px;
}
.category-container {
  margin: 10px auto;
}
.banner {
  padding: 10px;
  border-radius: 7px;
}
</style>
