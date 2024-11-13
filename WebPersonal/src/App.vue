<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="app-container">
    <div class="sidebar">
      <NavBar />
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh; /* Asegura que ocupe toda la altura de la ventana */
  overflow: hidden; /* Evita desbordamientos */
}

.sidebar {
  width: var(
    --sidebar-width
  ); /* Usa el ancho del sidebar definido en merced.css */
  background-color: var(--background-color); /* Fondo oscuro para el sidebar */
  color: var(--text-color); /* Color de texto desde variables globales */
  padding: 1rem;
  height: 100vh; /* Asegura que el sidebar ocupe toda la altura de la pantalla */
  box-sizing: border-box; /* Incluye padding en el ancho */
}

.content {
  flex: 1; /* Ocupa todo el espacio restante */
  background-color: var(
    --background-color
  ); /* Fondo de contenido usando variable global */
  color: var(--text-color);
  overflow-y: auto;
  padding: 1rem;
  box-sizing: border-box; /* Incluye padding en el ancho */
}
</style>
