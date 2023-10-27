import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

import Home from "@/pages/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async () => {
  await store.dispatch("initializeGame");
});

export default router;
