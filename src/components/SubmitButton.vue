<template>
  <button
    @click="submit"
    type="submit"
    class="btn"
    :class="{ enabled: enabled() }"
    :disabled="!enabled()"
  >
    Submit
  </button>
</template>

<script>
export default {
  name: "SubmitButton",
  methods: {
    submit() {
      this.$emit("submit");
    },
    enabled() {
      return this.$store.state.words.filter((w) => w.selected).length === 4;
    },
  },
};
</script>
<style scoped>
.btn {
  font-size: 16px;
  margin-top: 15px;
  border: 1px solid black;
  border-radius: 15px;
  background-color: white;
  padding: 8px 16px;
  color: rgb(67, 69, 67);
}
.enabled:hover {
  background-color: grey;
}
</style>
