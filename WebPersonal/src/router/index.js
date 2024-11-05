import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../views/Home.vue") },
  { path: "/login", component: () => import("../components/Login.vue") },
  { path: "/prints", component: () => import("../components/ProductList.vue") },
  { path: "/carrito", component: () => import("../components/Carrito.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
