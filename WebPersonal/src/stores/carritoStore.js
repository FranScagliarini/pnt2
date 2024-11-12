import { defineStore } from "pinia";

export const useCarritoStore = defineStore("carrito", {
  state: () => ({
    items: JSON.parse(localStorage.getItem("carrito")) || [],
  }),
  getters: {
    totalPrecio: (state) =>
      state.items.reduce(
        (total, item) => total + item.price * item.cantidad,
        0
      ),
  },
  actions: {
    agregarProducto(producto) {
      const item = this.items.find((item) => item.id === producto.id);
      if (item) {
        item.cantidad++;
      } else {
        this.items.push({ ...producto, cantidad: 1 });
      }
      this.actualizarLocalStorage();
    },

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

    comprar() {
      alert("Compra realizada!");
      this.items = [];
      localStorage.removeItem("carrito");
    },

    actualizarLocalStorage() {
      localStorage.setItem("carrito", JSON.stringify(this.items));
    },
  },
});
