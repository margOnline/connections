import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/pages/Home"),
  },
  {
    path: "/result",
    name: "Result",
    component: () => import(/* webpackChunkName: "result" */ "@/pages/Result"),
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
