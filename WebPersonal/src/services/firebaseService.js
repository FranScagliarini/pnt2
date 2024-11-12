import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const CODIGO = "olivia";

// Función para agregar un producto a Firestore
export async function agregarProducto(nombre, precio) {
  try {
    const docRef = await addDoc(collection(db, "productos"), {
      nombre: nombre,
      precio: precio,
      secret: CODIGO, // Este campo debe coincidir con el código en las reglas de seguridad
    });
    console.log("Producto agregado con ID: ", docRef.id);
  } catch (e) {
    console.error("Error al agregar el producto: ", e);
  }
}

// Función para obtener productos de Firestore
export async function obtenerProductos() {
  try {
    const productosRef = collection(db, "productos");
    const q = query(productosRef, where("secret", "==", CODIGO)); // Solo obtiene documentos con el campo secret "olivia"
    const querySnapshot = await getDocs(q);

    // Verifica si se obtuvieron documentos
    if (querySnapshot.empty) {
      console.log("No se encontraron productos con el código secreto.");
      return [];
    }

    // Mapea los documentos a un formato de arreglo especificando cada campo individualmente
    const productos = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        nombre: data.nombre || "Nombre no disponible",
        precio: data.precio || 0,
        secret: data.secret || "Sin código",
        // Agrega más campos si es necesario
      };
    });

    console.log("Productos mapeados:", productos); // Muestra los productos obtenidos en la consola
    return productos;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return [];
  }
}
