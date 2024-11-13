<template>
  <div class="sidebar">
    <h2 class="bodoni-moda-title">Tienda Personal</h2>

    <ul class="nav-top">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/productos">Productos</RouterLink></li>
    </ul>

    <div class="flex-separator"></div>

    <ul class="nav-bottom">
      <li v-if="isAuthenticated">
        <RouterLink to="/carrito">Carrito</RouterLink>
      </li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li v-if="!isAuthenticated">
        <RouterLink to="/registro">Registrarse</RouterLink>
      </li>
      <li v-if="!isAuthenticated">
        <RouterLink to="/login">Iniciar Sesión</RouterLink>
      </li>
      <li v-if="isAuthenticated">
        <RouterLink to="/perfil">Perfil</RouterLink>
      </li>
      <li v-if="isAuthenticated && authStore.isAdmin">
        <RouterLink to="/admin">Admin</RouterLink>
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

const logout = () => {
  authStore.logout();
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&display=swap");

.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #1f2a48;
  color: #efefef;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid #3b1d53; /* Morado oscuro */
}

/* Estilo del título */
.bodoni-moda-title {
  font-family: "Bodoni Moda", serif;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #ffaa4c; /* Naranja brillante */
}

/* Estilos para los elementos de navegación */
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
  color: #ffaa4c; /* Naranja brillante para enlaces */
  font-weight: 400;
  font-family: "Arial", sans-serif;
  transition: background-color 0.3s, color 0.3s;
  padding: 10px;
  border-radius: 5px;
  display: block;
  text-align: center;
}

/* Estilo al pasar el cursor sobre los enlaces */
a:hover {
  background-color: #3b1d53; /* Morado oscuro */
  color: #efefef; /* Blanco ahumado */
}

/* Separador flexible entre nav-top y nav-bottom */
.flex-separator {
  flex-grow: 1;
}
</style>
