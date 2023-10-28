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
  font-size: 16px;
  margin-top: 15px;
  border: 1px solid black;
  border-radius: 15px;
  background-color: white;
  padding: 8px 16px;
  color: rgb(67, 69, 67);
}
</style>
