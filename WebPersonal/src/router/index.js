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
  {
    path: "/perfil",
    component: () => import("../components/Perfil.vue"),
    meta: { requiresAuth: true },
  },
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
  const isAuthenticated = authStore.isAuthenticated;
  const isAdmin = authStore.isAdmin;

  if (to.meta.requiresAuth && !isAuthenticated) {
    alert("Debes iniciar sesión para acceder a esta página.");
    next("/login");
  } else if (to.meta.requiresAdmin && !isAdmin) {
    alert("No tienes permisos para acceder a esta página.");
    next("/home");
  } else {
    next();
  }
});
export default router;
