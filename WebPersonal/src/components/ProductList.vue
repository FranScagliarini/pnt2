<template>
  <div class="productos">
    <h1>Lista de Productos</h1>
    <div v-if="productos.length > 0" class="productos-lista">
      <div
        v-for="producto in productos"
        :key="producto.id"
        class="producto-item"
      >
        <ProductCard :producto="producto" />
        <button @click="agregarAlCarrito(producto)" class="btn-agregar">
          Agregar al carrito
        </button>
        <p v-if="producto.agregado" class="mensaje-agregado">
          Producto agregado
        </p>
      </div>
    </div>
    <p v-else>Cargando productos...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import ProductCard from "./ProductCard.vue";
import { useCarritoStore } from "@/stores/carritoStore";

const productos = ref([]);
const carritoStore = useCarritoStore();

const agregarAlCarrito = (producto) => {
  carritoStore.agregarProducto(producto);
  producto.agregado = true;
  setTimeout(() => {
    producto.agregado = false;
  }, 1000);
};
const fetchProductos = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    productos.value = response.data;
    productos.value.forEach((producto) => {
      producto.agregado = false;
    });
    console.log("Productos cargados:", productos.value);
  } catch (error) {
    console.error("Error al cargar los productos", error);
  }
};

onMounted(fetchProductos);
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  background-color: #000;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

.productos {
  background-color: #000;
  color: #e0e0e0;
  padding: 20px;
  border-radius: 8px;
  font-family: "Arial", sans-serif;
  max-width: 1200px;
  margin: auto;
  min-height: 100vh;
}

h1 {
  color: #ffaa4c;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
}

.productos-lista {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  max-width: 100%;
}

.producto-item {
  background-color: #1e1e1e;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  width: 200px;
}

.btn-agregar {
  background-color: #ffaa4c;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.mensaje-agregado {
  margin-top: 10px;
  color: #4caf50;
  font-weight: bold;
  font-size: 1rem;
}
</style>
