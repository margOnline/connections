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
  background: #6f6e6b;
  color: white;
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 60%;
  margin: auto;
  box-shadow: 2px 2px 2px 2px rbga(0, 0, 0.5);
  padding: 10px 20px;
  margin-bottom: 5px;
  border-radius: 6px;
}
.notification-enter-active,
.notification-leave-active {
  transition: all 0.8s ease;
}
.notification-enter-from,
.notification-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.notification-move {
  transition: transform 0.8s ease;
}
</style>
