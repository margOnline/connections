<template>
  <button @click="submit" type="submit" class="btn">Submit</button>
</template>

<script>
export default {
  name: "SubmitButton",
  methods: {
    submit() {
      this.$emit("submit");
    },
  },
};
</script>
<style scoped>
.btn {
  border: none;
  background-color: rgb(173, 173, 233);
  border-radius: 5px;
  padding: 8px;
  color: rgb(67, 69, 67);
}
</style>
