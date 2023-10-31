<template>
  <div class="notification">
    <span>one away</span>
    <button @click="removeNotification()">x</button>
  </div>
</template>

<script>
export default {
  methods: {
    removeNotification() {
      const notification = document.querySelector(".notification");
      notification.classList.add("disappear");
    },
  },
};
</script>

<style scoped>
.notification {
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 2px 2px 2px 2px rbga(0, 0, 0.5);
  padding: 10px 20px;
  margin-bottom: 5px;
  border: 1px solid #263959;
}
.disappear {
  display: none;
}
</style>
