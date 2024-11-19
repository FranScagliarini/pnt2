<template>
  <div class="usuarios">
    <h1>Informe de Usuarios</h1>

    <div v-if="usuarios.length > 0" class="lista-usuarios">
      <div v-for="usuario in usuarios" :key="usuario.id" class="usuario">
        <div class="usuario-header">
          <h3>{{ usuario.correo }}</h3>
        </div>
        <div class="usuario-details">
          <p><strong>Correo:</strong> {{ usuario.correo }}</p>
          <p><strong>Contraseña:</strong> {{ usuario.password }}</p>
        </div>
        <div class="usuario-actions">
          <button class="btn-modificar" @click="modificarContrasena(usuario)">
            Modificar Contraseña
          </button>
          <button class="btn-eliminar" @click="eliminarUsuario(usuario.id)">
            Eliminar Usuario
          </button>
        </div>
      </div>
    </div>
    <p v-else>No se encontraron usuarios.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  fetchUsers,
  actualizarUsuario,
  eliminarUsuario as borrarUsuario,
} from "@/services/mockApi";

const usuarios = ref([]);

// Obtener la lista de usuarios
const obtenerUsuarios = async () => {
  try {
    usuarios.value = await fetchUsers();
  } catch (error) {
    console.error("No se pudieron cargar los usuarios", error);
  }
};

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
      obtenerUsuarios(); // Refrescar lista de usuarios
    } catch (error) {
      console.error("Error al actualizar la contraseña", error);
    }
  }
};

// Eliminar usuario
const eliminarUsuario = async (id) => {
  if (confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
    try {
      await borrarUsuario(id);
      alert("Usuario eliminado exitosamente.");
      obtenerUsuarios(); // Refrescar lista de usuarios
    } catch (error) {
      console.error("Error al eliminar el usuario", error);
    }
  }
};

onMounted(() => {
  obtenerUsuarios();
});
</script>

<style scoped>
/* Estilos generales */
.usuarios {
  background-color: #121212; /* Fondo negro */
  color: #e0e0e0; /* Texto claro */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  font-family: "Arial", sans-serif;
  overflow-y: auto;
}

h1 {
  color: #ffaa4c; /* Naranja tenue */
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;
}

/* Estilos de la lista de usuarios */
.lista-usuarios {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 800px;
}

.usuario {
  background-color: #2c2c54; /* Violeta tenue */
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #e0e0e0;
}

.usuario-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.usuario-details {
  margin-top: 10px;
}

.usuario-details p {
  margin: 5px 0;
  font-size: 1.2rem;
  color: #e0e0e0;
}

.usuario-details strong {
  color: #ffaa4c; /* Naranja tenue para resaltar */
}

/* Botones de acción */
.usuario-actions {
  margin-top: 15px;
  display: flex;
  gap: 10px;
}

.usuario-actions .btn-modificar,
.usuario-actions .btn-eliminar {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.usuario-actions .btn-modificar {
  background-color: #ffaa4c; /* Naranja */
  color: #121212;
}

.usuario-actions .btn-modificar:hover {
  background-color: #e0953c;
}

.usuario-actions .btn-eliminar {
  background-color: #ff4c4c; /* Rojo */
  color: #ffffff;
}

.usuario-actions .btn-eliminar:hover {
  background-color: #e03c3c;
}
</style>
