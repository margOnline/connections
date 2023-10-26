import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

const connectionsApp = createApp(App);
connectionsApp.use(store);
connectionsApp.mount("#app");
