import { defineStore } from "pinia";

export const useCarritoStore = defineStore("carrito", {
  state: () => ({
    items: JSON.parse(localStorage.getItem("carrito")) || [], // Productos en el carrito
  }),
  getters: {
    totalPrecio: (state) =>
      state.items.reduce(
        (total, item) => total + item.price * item.cantidad,
        0
      ), // Precio total del carrito
  },
  actions: {
    // Agrega un producto al carrito o incrementa su cantidad
    agregarProducto(producto) {
      const item = this.items.find((item) => item.id === producto.id);
      if (item) {
        item.cantidad++;
      } else {
        this.items.push({ ...producto, cantidad: 1 });
      }
      this.actualizarLocalStorage();
    },

    // Elimina una unidad de un producto o lo quita si la cantidad llega a 0
    eliminarProducto(productoId) {
      const item = this.items.find((item) => item.id === productoId);
      if (item) {
        item.cantidad--;
        if (item.cantidad === 0) {
          this.items = this.items.filter((item) => item.id !== productoId);
        }
      }
      this.actualizarLocalStorage();
    },

    // Vacía el carrito después de la compra
    comprar() {
      alert("Compra realizada!");
      this.items = [];
      localStorage.removeItem("carrito");
    },

    // Actualiza el carrito en localStorage
    actualizarLocalStorage() {
      localStorage.setItem("carrito", JSON.stringify(this.items));
    },
  },
});
