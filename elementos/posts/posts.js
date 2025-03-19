import { solicitud } from "../solicitud/solicitud.js"; // Importamos la función solicitud para hacer la petición.

export const getPost = async (URL, usuario) => { // Función asíncrona para obtener los posts de un usuario específico.
  let ruta = ""; // Inicializamos la variable ruta como una cadena vacía.

  if (usuario) ruta = `${URL}/posts?userId=${usuario.id}`; // Si se proporciona un usuario, construimos la ruta con su ID.
  else ruta = `${URL}/posts`; // Si no se proporciona usuario, obtenemos todos los posts.

  return await solicitud(ruta); // Hacemos la solicitud y retornamos los posts obtenidos.
};