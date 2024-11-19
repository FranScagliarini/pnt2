<template>
  <div class="pedidos">
    <h1>Informe de Pedidos</h1>

    <div v-if="pedidos.length > 0" class="lista-pedidos">
      <div v-for="pedido in pedidos" :key="pedido.id" class="pedido">
        <div class="pedido-header">
          <h3>Pedido #{{ pedido.id }}</h3>
        </div>
        <div class="pedido-details">
          <p><strong>Producto:</strong> {{ pedido.nombre }}</p>
          <p><strong>Precio Total:</strong> ${{ pedido.precio.toFixed(2) }}</p>
        </div>
        <div class="pedido-actions">
          <button class="btn-eliminar" @click="borrarPedido(pedido.id)">
            Eliminar Pedido
          </button>
        </div>
      </div>
    </div>
    <p v-else>No se encontraron pedidos.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fetchPedidos, eliminarPedido } from "@/services/mockApiPedidos";

const pedidos = ref([]);

const obtenerPedidos = async () => {
  try {
    const pedidosData = await fetchPedidos();
    console.log(pedidosData);
    pedidos.value = pedidosData;
  } catch (error) {
    console.error("No se pudieron cargar los pedidos", error);
  }
};

const borrarPedido = async (id) => {
  console.log("ID del pedido a eliminar:", id);
  if (confirm("¿Estás seguro de que deseas eliminar este pedido?")) {
    try {
      await eliminarPedido(id);
      alert("Pedido eliminado exitosamente.");
      obtenerPedidos();
    } catch (error) {
      console.error("Error al eliminar el pedido", error);
    }
  }
};

onMounted(() => {
  obtenerPedidos();
});
</script>

<style scoped>
.pedidos {
  background-color: #121212; /* Fondo negro */
  color: #e0e0e0; /* Texto claro */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  font-family: "Arial", sans-serif;
  overflow-y: auto;
}

h1 {
  color: #ffaa4c; /* Naranja tenue */
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;
}

/* Estilos de la lista de pedidos */
.lista-pedidos {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 800px;
}

.pedido {
  background-color: #2c2c54; /* Violeta tenue */
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #e0e0e0;
}

.pedido-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.pedido-details {
  margin-top: 10px;
}

.pedido-details p {
  margin: 5px 0;
  font-size: 1.2rem;
  color: #e0e0e0;
}

.pedido-details strong {
  color: #ffaa4c; /* Naranja tenue para resaltar */
}

/* Botones de acción */
.pedido-actions {
  margin-top: 15px;
  display: flex;
  gap: 10px;
}

.pedido-actions .btn-modificar,
.pedido-actions .btn-eliminar {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.pedido-actions .btn-modificar {
  background-color: #ffaa4c; /* Naranja */
  color: #121212;
}

.pedido-actions .btn-modificar:hover {
  background-color: #e0953c;
}

.pedido-actions .btn-eliminar {
  background-color: #ff4c4c; /* Rojo */
  color: #ffffff;
}

.pedido-actions .btn-eliminar:hover {
  background-color: #e03c3c;
}
</style>
