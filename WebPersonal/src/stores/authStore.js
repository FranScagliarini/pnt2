import { defineStore } from "pinia";
import { encontrarUsuario } from "@/services/mockApi";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: null,
    isAuthenticated: !!localStorage.getItem("user"),
  }),
  getters: {
    isAdmin: (state) => state.user?.role === "admin",
    isClient: (state) => state.user?.role === "cliente",
  },
  actions: {
    async login(email, password) {
      try {
        const user = await encontrarUsuario(email, password);

        if (user) {
          this.user = user;
          this.isAuthenticated = true;
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          this.isAuthenticated = false;
          console.error("Correo o contraseña incorrectos");
        }
      } catch (error) {
        this.isAuthenticated = false;
        console.error("Error al iniciar sesión", error);
      }
    },
    logout() {
      this.user = null;
      this.isAuthenticated = false;
      localStorage.removeItem("user");
    },
  },
});
