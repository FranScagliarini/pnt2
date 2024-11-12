<template>
  <div class="carrito">
    <h1>Carrito de Compras</h1>
    <div v-if="items.length > 0" class="carrito-items">
      <div v-for="item in items" :key="item.id" class="carrito-item">
        <span class="producto-nombre">{{ item.title }}</span>
        <span class="producto-precio"
          >Precio: ${{ item.price.toFixed(2) }}</span
        >
        <div class="producto-cantidad">
          <button @click="eliminarProducto(item.id)">-</button>
          <span>{{ item.cantidad }}</span>
          <button @click="agregarProducto(item)">+</button>
        </div>
        <span class="producto-total">
          Total por producto: ${{ (item.price * item.cantidad).toFixed(2) }}
        </span>
      </div>
      <div class="carrito-total">
        <h2>Total del carrito: ${{ totalPrecio.toFixed(2) }}</h2>
        <button @click="comprar" class="btn-comprar">Comprar</button>
      </div>
    </div>
    <p v-else>El carrito está vacío</p>
  </div>
</template>

<script setup>
import { useCarritoStore } from "@/stores/carritoStore";
import { computed } from "vue";

// Importa el store del carrito
const carritoStore = useCarritoStore();
const items = computed(() => carritoStore.items); // Obtiene los productos en el carrito
const totalPrecio = computed(() => carritoStore.totalPrecio); // Calcula el total del carrito

// Acciones del carrito
const agregarProducto = (producto) => carritoStore.agregarProducto(producto);
const eliminarProducto = (productoId) =>
  carritoStore.eliminarProducto(productoId);
const comprar = () => carritoStore.comprar();
</script>

<style scoped>
.carrito {
  background-color: #121212;
  color: #e0e0e0;
  padding: 20px;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: auto;
  margin-top: 20px;
}

h1 {
  text-align: center;
  color: #ffaa4c;
}

.carrito-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.carrito-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #1e1e1e;
  border-radius: 5px;
}

.producto-nombre {
  flex: 1;
  font-weight: bold;
}

.producto-precio,
.producto-cantidad,
.producto-total {
  margin: 0 10px;
}

.producto-cantidad button {
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: #ffaa4c;
  border: none;
  color: white;
  border-radius: 5px;
  margin: 0 5px;
}

.carrito-total {
  text-align: center;
  margin-top: 20px;
}

.btn-comprar {
  background-color: #ffaa4c;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
