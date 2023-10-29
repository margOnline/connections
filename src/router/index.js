import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import Result from "@/pages/Result";

import Home from "@/pages/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/result",
    name: "Result",
    component: Result,
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
