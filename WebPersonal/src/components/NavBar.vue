<template>
  <div class="sidebar">
    <h2 class="bodoni-moda-title">Camila Cabello</h2>

    <!-- Elementos superiores -->
    <ul class="nav-top">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/proyectos">Proyectos</RouterLink></li>
      <li><RouterLink to="/prints">Prints</RouterLink></li>
    </ul>

    <!-- Separador flexible -->
    <div class="flex-separator"></div>

    <!-- Elementos inferiores -->
    <ul class="nav-bottom">
      <li><RouterLink to="/carrito">Carrito</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li v-if="!isAuthenticated">
        <RouterLink to="/login">Iniciar Sesión</RouterLink>
      </li>
      <li v-if="isAuthenticated">
        <RouterLink to="/perfil">Perfil</RouterLink>
      </li>
      <li v-if="isAuthenticated">
        <RouterLink to="/" @click="logout">Cerrar Sesión</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();
const isAuthenticated = computed(() => authStore.isAuthenticated);

// Accion de logout desde el store
const logout = () => {
  authStore.logout();
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&display=swap");

.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #f0f8ff;
  border-right: 1px solid #ddd;
  color: #333;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bodoni-moda-title {
  font-family: "Bodoni Moda", serif;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #6a5acd;
}

.nav-top,
.nav-bottom {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

.nav-top li,
.nav-bottom li {
  margin: 15px 0;
}

a {
  text-decoration: none;
  color: #4682b4;
  font-weight: 400;
  font-family: "Arial", sans-serif;
  transition: background-color 0.3s, color 0.3s;
  padding: 10px;
  border-radius: 5px;
}

a:hover {
  background-color: #b0e0e6;
  color: #005f7f;
}

/* Separador flexible entre nav-top y nav-bottom */
.flex-separator {
  flex-grow: 1;
}
</style>
