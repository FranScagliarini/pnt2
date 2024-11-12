<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="onLogin">
      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const onLogin = async () => {
  try {
    await authStore.login(email.value, password.value);

    if (authStore.isAuthenticated) {
      if (authStore.isAdmin) {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } else {
      errorMessage.value = "Correo o contraseña incorrectos";
    }
  } catch (error) {
    errorMessage.value = "Hubo un error al iniciar sesión. Inténtalo de nuevo.";
    console.error(error);
  }
};
</script>

<style>
body {
  background-color: #000000;
  margin: 0;
  font-family: Arial, sans-serif;
  color: var(--text-color);

  display: flex;
  justify-content: center; /* Centrado horizontal */
  align-items: center; /* Centrado vertical */
  height: 100vh; /* Asegura que el contenedor ocupe toda la altura de la pantalla */
}

/* Contenedor de inicio de sesión con color violeta de la paleta */
.login-container {
  max-width: 400px;
  padding: 1rem;
  background-color: var(--border-color); /* Violeta tenue de la paleta */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  color: var(--text-color); /* Blanco para el texto */
}

h2 {
  color: var(--accent-color); /* Naranja tenue para el título */
  text-align: center;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-size: 1rem;
  color: var(--text-color); /* Blanco para el texto de las etiquetas */
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--border-color); /* Color de borde morado tenue */
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 1rem;
  background-color: #333333; /* Fondo oscuro para los inputs */
  color: var(--text-color); /* Texto blanco para los inputs */
}

button {
  width: 100%;
  padding: 0.8rem;
  background-color: var(--accent-color); /* Naranja tenue para el botón */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(
    --hover-background-color
  ); /* Morado tenue para el hover */
}

.error {
  color: var(--error-color); /* Rojo tenue para el mensaje de error */
  font-size: 0.9rem;
  margin-top: 1rem;
  text-align: center;
}
</style>
