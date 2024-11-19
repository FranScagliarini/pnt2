import axios from "axios";

const PEDIDOS_API_URL =
  "https://671da14c09103098807d7159.mockapi.io/api/pedidos"; // Reemplaza con tu URL de la API de pedidos

export const fetchPedidos = async () => {
  try {
    const response = await axios.get(PEDIDOS_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los pedidos", error);
    throw error;
  }
};

export const encontrarPedidosPorCliente = async (clienteId) => {
  const pedidos = await fetchPedidos();
  return pedidos.filter((pedido) => pedido.clienteId === clienteId);
};

export const agregarPedido = async (nombre, clienteId, precio) => {
  try {
    const nuevoPedido = { nombre, clienteId, precio };
    return await axios.post(PEDIDOS_API_URL, nuevoPedido);
  } catch (error) {
    console.error("Error al agregar el pedido", error);
    throw error;
  }
};

export const actualizarPedido = async (id, datosActualizados) => {
  try {
    const response = await axios.put(
      `${PEDIDOS_API_URL}/${id}`,
      datosActualizados
    );
    return response.data;
  } catch (error) {
    console.error(`Error al actualizar el pedido con ID ${id}`, error);
    throw error;
  }
};

export const eliminarPedido = async (id) => {
  try {
    const response = await axios.delete(`${PEDIDOS_API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al eliminar el pedido con ID ${id}`, error);
    throw error;
  }
};
