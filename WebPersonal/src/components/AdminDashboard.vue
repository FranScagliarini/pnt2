<template>
  <div class="home">
    <h1>ADMIN</h1>
    <div class="agregar-producto">
      <h2>Agregar Producto</h2>
      <form @submit.prevent="agregarProductoHandler">
        <div>
          <label for="nombre">Nombre del Producto</label>
          <input
            type="text"
            id="nombre"
            v-model="nombre"
            placeholder="Ingresa el nombre del producto"
            required
          />
        </div>
        <div>
          <label for="precio">Precio del Producto</label>
          <input
            type="number"
            id="precio"
            v-model="precio"
            placeholder="Ingresa el precio del producto"
            required
          />
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
      <p v-if="productoAgregado">Producto agregado con éxito</p>
      <p v-if="error" class="error">Error: {{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { agregarProducto } from "../services/firebaseService";

const nombre = ref("");
const precio = ref(0);
const productoAgregado = ref(false);
const error = ref(null);

const agregarProductoHandler = async () => {
  try {
    await agregarProducto(nombre.value, precio.value);
    productoAgregado.value = true;
    error.value = null;
    nombre.value = "";
    precio.value = 0;
  } catch (e) {
    error.value = "No se pudo agregar el producto. Intenta nuevamente.";
    productoAgregado.value = false;
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home {
  background-color: #121212;
  color: #e0e0e0;
  height: 100vh; /* Asegura que ocupe toda la altura de la pantalla */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Arial", sans-serif;
  border: none; /* Asegura que no haya borde */
}

/* Estilo del título principal */
h1 {
  font-size: 3rem;
  color: #ffaa4c; /* Naranja tenue para resaltar */
  margin-bottom: 30px;
}

/* Estilos para el formulario de agregar producto */
.agregar-producto {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  background-color: #1c1c1c; /* Fondo oscuro para el formulario */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

h2 {
  text-align: center;
  color: #ffaa4c; /* Naranja tenue para el título */
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 10px;
  padding: 10px;
  font-size: 1rem;
  background-color: #333; /* Fondo oscuro para inputs */
  color: #fff; /* Texto blanco */
  border: 1px solid #444; /* Borde suave */
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #ffaa4c;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #e07b3c;
}

.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}

p {
  text-align: center;
  margin-top: 10px;
}
</style>
