<template>
  <div class="home">
    <h1>ADMIN</h1>
  </div>
</template>

<script setup></script>

<style scoped>
/* Elimina los márgenes y bordes predeterminados */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Fondo negro uniforme para todo el contenido */
.home {
  background-color: #121212; /* Negro uniforme para el fondo */
  color: #e0e0e0; /* Gris claro para el texto */
  height: 100vh; /* Asegura que ocupe toda la altura de la pantalla */
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Arial", sans-serif;
  border: none; /* Asegura que no haya borde */
}

/* Estilo del título */
h1 {
  font-size: 3rem;
  color: #ffaa4c; /* Naranja tenue para resaltar */
  background-color: #121212; /* Fondo negro igual al de la página */
}
</style>
