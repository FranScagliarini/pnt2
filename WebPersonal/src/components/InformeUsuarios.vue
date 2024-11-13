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
      </div>
    </div>
    <p v-else>No se encontraron usuarios.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fetchUsers } from "@/services/mockApi";

const usuarios = ref([]);

const obtenerUsuarios = async () => {
  try {
    usuarios.value = await fetchUsers();
  } catch (error) {
    console.error("No se pudieron cargar los usuarios", error);
  }
};

onMounted(() => {
  obtenerUsuarios();
});
</script>

<style scoped>
/* Asegura que el fondo sea continuo incluso con desplazamiento */
.usuarios {
  background-color: #121212; /* Fondo negro */
  color: #e0e0e0; /* Texto claro */
  min-height: 100vh; /* Fondo cubre al menos la altura de la pantalla */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  font-family: "Arial", sans-serif;
  overflow-y: auto; /* Permite el desplazamiento vertical */
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
  color: #e0e0e0; /* Texto claro */
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
</style>
