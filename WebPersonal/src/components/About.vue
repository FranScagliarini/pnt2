<template>
  <div class="pdf-container">
    <div class="pdf-viewer">
      <h1>Trabajo Práctico PNT</h1>
      <iframe
        v-if="pdfUrl"
        :src="pdfUrl"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const pdfUrl = ref("");

onMounted(() => {
  pdfUrl.value = "/Trabajo Práctico PNT-2.pdf";
});
</script>

<style scoped>
/* Contenedor que ocupa toda la pantalla */
.pdf-container {
  background-color: #121212; /* Fondo oscuro */
  height: 100vh; /* Alto de la pantalla completa */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e0e0e0;
  font-family: "Arial", sans-serif;
}

/* Contenedor con borde violeta tenue para el PDF */
.pdf-viewer {
  width: 90%; /* Ajustamos el ancho del contenedor */
  max-width: 1200px; /* Máximo ancho */
  height: 80vh; /* Ajustamos la altura del contenedor */
  background-color: #2c2c54; /* Violeta tenue */
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra suave */
  overflow: hidden; /* Evita que el contenido se desborde */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
}

/* Título */
h1 {
  color: #ffaa4c; /* Naranja para el título */
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

/* Estilo para el iframe que contiene el PDF */
iframe {
  border: none;
  width: 100%; /* El iframe ocupa todo el ancho */
  height: 100%; /* El iframe ocupa todo el alto disponible */
}
</style>
