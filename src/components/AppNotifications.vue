<template>
  <div class="notifications">
    <transition-group name="notification">
      <div
        class="notification"
        v-for="notification in notifications"
        :key="notification.id"
      >
        <span>{{ notification.message }}</span>
        <button @click="removeNotification(notification.id)">x</button>
      </div>
    </transition-group>
  </div>
</template>

<script>
import useNotificatons from "@/composables/useNotifications";

export default {
  setup() {
    const { notifications, removeNotification } = useNotificatons();
    return { notifications, removeNotification };
  },
};
</script>

<style scoped>
.notification {
  background: black;
  color: white;
  display: grid;
  grid-template-columns: 3fr 1fr;
  box-shadow: 2px 2px 2px 2px rbga(0, 0, 0.5);
  padding: 10px 20px;
  margin-bottom: 5px;
  border: 1px solid #263959;
}
.notification-enter-active,
.notification-leave-active {
  transition: all 0.5s ease;
}
.notification-enter-from,
.notification-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.notification-move {
  transition: transform 0.8s eease;
}
</style>
