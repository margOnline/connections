import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "@/router";

const connectionsApp = createApp(App);
connectionsApp.use(store);
connectionsApp.use(router);

const requireComponent = require.context(
  "./components",
  true,
  /App[A-Z]\w+\.(vue|js)$/
);
requireComponent.keys().forEach(function (filename) {
  let baseComponentConfig = requireComponent(filename);
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig;
  const baseComponentName =
    baseComponentConfig.name ||
    filename.replace(/^.+\//, "").replace(/\.\w+$/, "");

  connectionsApp.component(baseComponentName, baseComponentConfig);
});

connectionsApp.mount("#app");
