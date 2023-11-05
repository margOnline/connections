<template>
  <a @click="handleClick" class="btn">
    {{ text }}
  </a>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text: { type: String, required: true },
  },
  methods: {
    handleClick() {
      this.$emit("click");
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
