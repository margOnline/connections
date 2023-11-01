<template>
  <div class="notification" :class="{ invisible: !this.$store.state.oneAway }">
    <span>one away</span>
    <button @click="removeNotification()">x</button>
  </div>
</template>

<script>
export default {
  methods: {
    removeNotification() {
      this.$store.dispatch("toggleOneAway", { value: false });
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
.invisible {
  display: none;
}
</style>
