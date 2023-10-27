<template>
  <div>
    <div>category: {{ category }}</div>
    <div v-if="categoryId" class="categoryBanner">{{ category }}</div>
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
  data() {
    return {
      category: null,
    };
  },
  components: { WordSquare },
  methods: {
    async fetchCategory({ id }) {
      await this.$store.dispatch("fetchCategory", { id });
    },
  },
  async created() {
    this.category = await this.fetchCategory({ id: this.categoryId });
  },
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
