import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/HomeViews.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
