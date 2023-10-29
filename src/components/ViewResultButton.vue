<template>
  <div class="btn" @click="view" type="submit">View Results</div>
</template>

<script>
export default {
  name: "ViewResultbutton",
  methods: {
    view() {
      this.$emit("view");
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
