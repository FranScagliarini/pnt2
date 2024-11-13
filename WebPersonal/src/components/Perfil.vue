<template>
  <div class="perfil">
    <div v-if="user" class="perfil-info">
      <h1>Perfil de Usuario</h1>
      <div class="user-info">
        <p><strong>Correo:</strong> {{ user.correo }}</p>
        <p><strong>Rol:</strong> {{ user.role }}</p>
      </div>
    </div>
    <div v-else>
      <p>Cargando información del usuario...</p>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();

const user = authStore.user;
</script>

<style scoped>
/* Fondo negro para la pantalla completa */
.perfil {
  background-color: #121212; /* Fondo negro */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Arial", sans-serif;
  color: #e0e0e0;
}

/* Contenedor de la información del perfil */
.perfil-info {
  background-color: #2c2c54; /* Violeta tenue */
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  width: 80%;
  max-width: 600px;
  color: #e0e0e0;
}

/* Estilos para el título */
h1 {
  color: #ffaa4c; /* Naranja tenue para el título */
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

/* Estilos para la información del usuario */
.user-info p {
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: #e0e0e0;
}

.user-info strong {
  color: #ffaa4c; /* Naranja tenue */
}
</style>
