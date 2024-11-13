<template>
  <div class="registro">
    <div class="login-container">
      <h2>Registrar Usuario</h2>
      <form @submit.prevent="registrarUsuario">
        <div class="form-group">
          <label for="correo">Correo electrónico:</label>
          <input
            type="email"
            id="correo"
            v-model="correo"
            placeholder="Introduce tu correo"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Introduce tu contraseña"
            required
          />
        </div>

        <button type="submit">Registrar</button>
      </form>

      <p v-if="mensaje" :class="{ error: error }">{{ mensaje }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { agregarUsuario } from "../services/mockApi";

const correo = ref("");
const password = ref("");
const mensaje = ref("");
const error = ref(false);

const registrarUsuario = async () => {
  try {
    const response = await agregarUsuario(correo.value, password.value);
    mensaje.value = "Usuario registrado exitosamente.";
    error.value = false;
    correo.value = "";
    password.value = "";
    console.log("Usuario agregado:", response.data);
  } catch (err) {
    mensaje.value = err.message || "Error al registrar usuario.";
    error.value = true;
  }
};
</script>

<style scoped>
/* Fondo negro para la pantalla completa */
.registro {
  background-color: #121212; /* Fondo negro */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Contenedor de registro */
.login-container {
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  background-color: #2c2c54; /* Violeta tenue */
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
