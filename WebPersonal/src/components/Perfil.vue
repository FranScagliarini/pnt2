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
.perfil {
  background-color: #121212; /* Fondo negro suave */
  color: #e0e0e0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Arial", sans-serif;
}

.perfil-info {
  background-color: var(--background-color);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 600px;
}

h1 {
  color: var(--accent-color);
  font-size: 2rem;
  margin-bottom: 1rem;
}

/* Estilo para la información del usuario */
.user-info p {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.user-info strong {
  color: var(--accent-color);
}
</style>
