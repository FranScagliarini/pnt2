<template>
  <div class="mis-pedidos">
    <h1>Mis Pedidos</h1>
    <div v-if="pedidos.length > 0" class="pedido-lista">
      <div v-for="pedido in pedidos" :key="pedido.id" class="pedido-item">
        <span class="pedido-nombre">{{ pedido.nombre }}</span>
        <span class="pedido-precio">
          Precio total: ${{ pedido.precio.toFixed(2) }}
        </span>
        <div v-if="pedido.estado" class="pedido-estado">
          <span>Estado: {{ pedido.estado }}</span>
        </div>
      </div>
    </div>
    <p v-else>No tienes pedidos.</p>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/authStore"; // Importar el store de autenticación
import { computed, onMounted, ref } from "vue";
import { encontrarPedidosPorCliente } from "@/services/mockApiPedidos"; // Importar el servicio para obtener pedidos

const authStore = useAuthStore(); // Crear una instancia del store de autenticación
const pedidos = ref([]); // Estado local para almacenar los pedidos

// Obtener los pedidos del usuario logueado
const obtenerPedidos = async () => {
  if (!authStore.isAuthenticated) {
    alert("Debes iniciar sesión para ver tus pedidos.");
    return;
  }

  const usuario = authStore.user; // Obtener el usuario logueado
  try {
    // Consultar los pedidos del usuario logueado
    const pedidosUsuario = await encontrarPedidosPorCliente(usuario.id);
    pedidos.value = pedidosUsuario;
  } catch (error) {
    console.error("Error al obtener los pedidos", error);
    alert("Hubo un error al cargar tus pedidos.");
  }
};

// Obtener los pedidos cuando el componente se monta
onMounted(() => {
  obtenerPedidos();
});
</script>

<style scoped>
.mis-pedidos {
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

.pedido-lista {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.pedido-item {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #1e1e1e;
  border-radius: 5px;
}

.pedido-nombre {
  font-weight: bold;
}

.pedido-fecha,
.pedido-precio,
.pedido-estado {
  margin: 5px 0;
}

.pedido-estado {
  font-style: italic;
}
</style>
