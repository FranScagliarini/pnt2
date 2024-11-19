<template>
  <div class="home">
    <h1>HOME</h1>
    <div class="image-container">
      <img :src="imagenUrl" alt="pnt2" class="imagen-home" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const imagenUrl = ref("NT2 PNG v01.png");
</script>

<style scoped>
/* Fondo negro suave para contrastar con la sidebar */
.home {
  background-color: #121212; /* Negro suave para fondo */
  color: #e0e0e0; /* Gris claro para el texto */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; /* Centrar los elementos en la columna */
  font-family: "Arial", sans-serif;
}

/* Estilo del título */
h1 {
  font-size: 3rem;
  color: #ffaa4c; /* Naranja tenue para resaltar */
  margin-bottom: 20px; /* Espacio entre el título y la imagen */
}

/* Estilo del contenedor de la imagen */
.image-container {
  max-width: 80%; /* Ajusta el tamaño del contenedor */
  padding: 20px;
  background-color: #222; /* Fondo oscuro para resaltar la imagen */
  border-radius: 10px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Sombra para darle profundidad */
}

/* Estilo de la imagen */
.imagen-home {
  width: 100%; /* Ajustar la imagen al tamaño del contenedor */
  height: auto;
  border-radius: 8px; /* Bordes redondeados para la imagen */
}
</style>
