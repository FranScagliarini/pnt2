import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const CODIGO = "olivia";

export async function agregarProducto(nombre, precio) {
  try {
    const docRef = await addDoc(collection(db, "productos"), {
      nombre: nombre,
      precio: precio,
      secret: CODIGO,
    });
    console.log("Producto agregado con ID: ", docRef.id);
  } catch (e) {
    console.error("Error al agregar el producto: ", e);
  }
}

export async function obtenerProductos() {
  try {
    const productosRef = collection(db, "productos");
    const q = query(productosRef, where("secret", "==", CODIGO));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No se encontraron productos con el código secreto.");
      return [];
    }

    const productos = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        nombre: data.nombre || "Nombre no disponible",
        precio: data.precio || 0,
        secret: data.secret || "Sin código",
      };
    });

    console.log("Productos mapeados:", productos);
    return productos;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return [];
  }
}
