<template>
  <div class="acciones-usuario">
    <button class="btn-modificar" @click="handleModificar">
      Modificar Contraseña
    </button>
    <button class="btn-eliminar" @click="handleEliminar">
      Eliminar Usuario
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Props para recibir datos del usuario y callbacks
defineProps({
  onModificar: Function, // Callback para modificar contraseña
  onEliminar: Function, // Callback para eliminar usuario
  usuario: Object, // Objeto usuario
});

// Métodos locales para los eventos
const handleModificar = () => {
  if (typeof onModificar === "function") {
    onModificar(usuario);
  }
};

const handleEliminar = () => {
  if (typeof onEliminar === "function") {
    onEliminar(usuario.id);
  }
};
</script>

<style scoped>
/* Botones de acción */
.acciones-usuario {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.acciones-usuario .btn-modificar,
.acciones-usuario .btn-eliminar {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.acciones-usuario .btn-modificar {
  background-color: #ffaa4c; /* Naranja */
  color: #121212;
}

.acciones-usuario .btn-modificar:hover {
  background-color: #e0953c;
}

.acciones-usuario .btn-eliminar {
  background-color: #ff4c4c; /* Rojo */
  color: #ffffff;
}

.acciones-usuario .btn-eliminar:hover {
  background-color: #e03c3c;
}
</style>
