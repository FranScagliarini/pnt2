<template>
  <div class="login-wrapper">
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

<style scoped>
/* Fondo negro para la pantalla completa */
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212; /* Fondo negro */
}

/* Contenedor de inicio de sesión */
.login-container {
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  background-color: #2c2c54; /* Violeta tenue específico */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  color: #e0e0e0; /* Color claro para el texto */
}

h2 {
  color: #ffaa4c; /* Naranja tenue para el título */
  text-align: center;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-size: 1rem;
  color: #e0e0e0;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #333333;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #333333;
  color: #e0e0e0;
}

button {
  width: 100%;
  padding: 0.8rem;
  background-color: #ffaa4c; /* Naranja de acento */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e6952c; /* Color de fondo al hacer hover */
}

.error {
  color: #ff4d4d; /* Rojo para el mensaje de error */
  font-size: 0.9rem;
  margin-top: 1rem;
  text-align: center;
}
</style>
