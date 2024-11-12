<!-- ProductList.vue -->
<template>
  <div class="productos">
    <h1>Lista de Productos</h1>
    <div v-if="productos.length > 0" class="productos-lista">
      <ProductCard
        v-for="producto in productos"
        :key="producto.id"
        :producto="producto"
      />
    </div>
    <p v-else>Cargando productos...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import ProductCard from "./ProductCard.vue";

const productos = ref([]);

const fetchProductos = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    productos.value = response.data;
    console.log("Productos cargados:", productos.value);
  } catch (error) {
    console.error("Error al cargar los productos", error);
  }
};

onMounted(fetchProductos);
</script>

<style scoped>
.productos {
  background-color: #121212;
  color: #e0e0e0;
  padding: 20px;
  border-radius: 8px;
  font-family: "Arial", sans-serif;
  max-width: 1200px;
  margin: auto;
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
}
</style>
