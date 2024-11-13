<template>
  <div class="admin-panel">
    <!-- Contenedor principal con todo unido -->
    <div class="content-container">
      <!-- Barra de botones arriba -->
      <div class="button-bar">
        <button @click="mostrarDashboard" class="btn-dashboard">
          Dashboard
        </button>
        <button @click="mostrarInformes" class="btn-informes">Informes</button>
      </div>

      <!-- Contenido desplegable debajo de los botones -->
      <div class="contenido">
        <div v-if="mostrarContenido.dashboard">
          <AdminDashboard />
        </div>
        <div v-if="mostrarContenido.informes">
          <InformesUsuarios />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AdminDashboard from "../components/AdminDashboard.vue";
import InformesUsuarios from "../components/InformeUsuarios.vue";

// Variables para controlar qué componente se debe mostrar
const mostrarContenido = ref({
  dashboard: false,
  informes: false,
});

// Funciones para manejar la visibilidad de los componentes
const mostrarDashboard = () => {
  mostrarContenido.value.dashboard = true;
  mostrarContenido.value.informes = false;
};

const mostrarInformes = () => {
  mostrarContenido.value.informes = true;
  mostrarContenido.value.dashboard = false;
};
</script>

<style scoped>
/* Fondo general para el panel de administración */
.admin-panel {
  background-color: #121212; /* Fondo negro */
  min-height: 100vh; /* Asegura que el fondo cubra toda la pantalla */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Alineación al inicio para que los botones queden arriba */
  padding: 1rem;
}

/* Contenedor que agrupa botones y contenido */
.content-container {
  width: 100%;
  max-width: 1200px; /* Ancho máximo para el contenedor */
  background-color: #2c2c54; /* Fondo gris-violeta suave */
  border-radius: 12px; /* Bordes redondeados para el contenedor */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  color: #e0e0e0; /* Texto claro */
  display: flex;
  flex-direction: column;
  gap: 2rem; /* Espacio entre los elementos */
  padding: 2rem;
}

/* Barra de botones arriba */
.button-bar {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  margin-bottom: 2rem; /* Separación entre los botones y el contenido */
}

button {
  padding: 1rem 2rem;
  background-color: #000000; /* Botones negros */
  color: white;
  border: none;
  border-radius: 12px; /* Bordes redondeados */
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 45%;
  max-width: 200px;
}

button:hover {
  background-color: #333333; /* Gris oscuro al hacer hover */
}

/* Contenedor para el contenido de los componentes */
.contenido {
  flex: 1;
  width: 100%;
  padding: 2rem;
  background-color: #333333; /* Fondo oscuro para los componentes */
  border-radius: 12px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

h2 {
  color: #8e8e8e; /* Gris suave */
  text-align: center;
  margin-bottom: 1.5rem;
}
</style>
