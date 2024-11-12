<template>
  <div class="registro">
    <h1>Registrar Usuario</h1>
    <form @submit.prevent="registrarUsuario">
      <label for="correo">Correo electrónico:</label>
      <input
        type="email"
        id="correo"
        v-model="correo"
        placeholder="Introduce tu correo"
        required
      />

      <label for="password">Contraseña:</label>
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="Introduce tu contraseña"
        required
      />

      <button type="submit">Registrar</button>
    </form>

    <p v-if="mensaje" :class="{ error: error }">{{ mensaje }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { agregarUsuario } from "../services/mockApi"; // Asegúrate de tener la ruta correcta

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
/* Fondo oscuro y centrado para la página de registro */
.registro {
  background-color: #121212; /* Fondo negro suave */
  color: #e0e0e0; /* Gris claro para el texto */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Arial", sans-serif;
}

/* Contenedor de formulario */
form {
  background-color: #1e1e1e; /* Fondo oscuro */
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 400px;
}

h1 {
  color: #ffaa4c; /* Color de acento */
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

label {
  display: block;
  margin: 10px 0 5px;
  color: #e0e0e0;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #2c2c2c;
  color: #e0e0e0;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>
