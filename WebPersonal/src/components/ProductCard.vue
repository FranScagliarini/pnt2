<template>
  <div class="producto-card">
    <img :src="producto.image" :alt="producto.title" class="producto-imagen" />
    <div class="producto-info">
      <h2>{{ producto.title }}</h2>
      <p class="producto-precio">$ {{ producto.price }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  producto: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.producto-card {
  background-color: #1e1e1e;
  color: #e0e0e0;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  text-align: center;
  font-family: "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.producto-imagen {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

.producto-info h2 {
  font-size: 1.5rem;
  color: #ffaa4c;
  margin: 10px 0;
}

.producto-precio {
  font-size: 1.2rem;
  color: #4caf50;
  margin-bottom: 15px;
}

.producto-boton {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.producto-boton:hover {
  background-color: #45a049;
}
</style>
