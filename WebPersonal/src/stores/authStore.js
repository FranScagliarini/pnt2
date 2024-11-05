import { defineStore } from "pinia";
import { encontrarUsuario } from "@/services/mockApi";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
  }),
  getters: {
    isAdmin: (state) => state.user?.role === "admin",
  },
  actions: {
    async login(email, password) {
      const user = await encontrarUsuario(email, password);

      if (user) {
        this.user = user;
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        console.error("error :(", error);
      }
    },
  },
});
