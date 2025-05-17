import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/HomeViews.vue") },
  { path: "/cart", component: () => import("@/views/CartViews.vue") },
  { path: "/cotalog", component: () => import("@/views/CotalogViews.vue") },
  { path: "/favorite", component: () => import("@/views/FavoriteViews.vue") },
  {
    path: "/product/:id",
    component: () => import("@/views/ProduktCartViews.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
