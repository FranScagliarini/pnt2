import axios from "axios";

const MOCKAPI_URL = "https://671da14c09103098807d7159.mockapi.io/api/users";

const fetchUsers = async () => {
  try {
    const response = await axios.get(MOCKAPI_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los usuarios", error);
    throw error;
  }
};

export const encontrarUsuario = async (correo, password) => {
  const users = await fetchUsers();
  return users.find((u) => u.correo === correo && u.password === password);
};

export const agregarUsuario = async (correo, password) => {
  try {
    const existe = await encontrarUsuario(correo, password);
    if (existe) {
      throw new Error("El usuario ya existe.");
    }
    const usuario = { correo, password };
    return await axios.post(MOCKAPI_URL, usuario);
  } catch (error) {
    console.error("Error al agregar usuario", error);
    throw error;
  }
};
