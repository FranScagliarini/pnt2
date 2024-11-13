import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/authStore";

const routes = [
  { path: "/", component: () => import("../views/Home.vue") },
  {
    path: "/productos",
    component: () => import("../components/ProductList.vue"),
  },
  { path: "/carrito", component: () => import("../components/Carrito.vue") },
  { path: "/about", component: () => import("../components/About.vue") },
  { path: "/perfil", component: () => import("../components/Perfil.vue") },
  {
    path: "/admin",
    component: () => import("../views/AdminView.vue"),
    meta: { requiresAdmin: true },
  },
  { path: "/registro", component: () => import("../components/Registro.vue") },
  { path: "/login", component: () => import("../components/Login.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAdmin && !authStore.isAdmin) {
    next("/home");
  } else {
    next();
  }
});

export default router;
