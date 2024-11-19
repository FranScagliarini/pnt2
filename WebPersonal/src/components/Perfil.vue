<template>
  <div class="perfil">
    <div v-if="user" class="perfil-info">
      <h1>Perfil de Usuario</h1>
      <div class="user-info">
        <p><strong>Correo:</strong> {{ user.correo }}</p>
        <p><strong>Rol:</strong> {{ user.role }}</p>
      </div>
      <div class="perfil-actions">
        <button class="btn-modificar" @click="modificarContrasena(user)">
          Modificar Contraseña
        </button>
        <button class="btn-eliminar" @click="eliminarCuenta(user.id)">
          Eliminar Cuenta
        </button>
      </div>
    </div>
    <div v-else>
      <p>Cargando información del usuario...</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import {
  actualizarUsuario,
  eliminarUsuario as borrarUsuario,
} from "@/services/mockApi";

const authStore = useAuthStore();
const user = ref(authStore.user); // Referencia al usuario autenticado

// Modificar contraseña
const modificarContrasena = async (usuario) => {
  const nuevaContrasena = prompt(
    `Ingrese la nueva contraseña para ${usuario.correo}:`,
    usuario.password
  );
  if (nuevaContrasena && nuevaContrasena !== usuario.password) {
    try {
      await actualizarUsuario(usuario.id, { password: nuevaContrasena });
      alert("Contraseña actualizada exitosamente.");
      user.value.password = nuevaContrasena; // Actualizar localmente
    } catch (error) {
      console.error("Error al actualizar la contraseña", error);
    }
  }
};

// Eliminar cuenta
const eliminarCuenta = async (id) => {
  if (
    confirm(
      "¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer."
    )
  ) {
    try {
      await borrarUsuario(id);
      alert("Cuenta eliminada exitosamente.");
      authStore.logout(); // Cerrar sesión tras eliminar la cuenta
    } catch (error) {
      console.error("Error al eliminar la cuenta", error);
    }
  }
};
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

/* Botones de acción */
.perfil-actions {
  margin-top: 1.5rem;
  display: flex;
  gap: 10px;
}

.perfil-actions .btn-modificar,
.perfil-actions .btn-eliminar {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.perfil-actions .btn-modificar {
  background-color: #ffaa4c; /* Naranja */
  color: #121212;
}

.perfil-actions .btn-modificar:hover {
  background-color: #e0953c;
}

.perfil-actions .btn-eliminar {
  background-color: #ff4c4c; /* Rojo */
  color: #ffffff;
}

.perfil-actions .btn-eliminar:hover {
  background-color: #e03c3c;
}
</style>
