import { solicitud } from "../solicitud/solicitud.js";// Importamos la función solicitud para hacer la petición 
export const getAlbums = async (URL, usuario) => { // Función asíncrona para obtener los álbumes de un usuario específico.
  return await solicitud(`${URL}/albums?=${usuario.id}`) // Hacemos la solicitud con el ID del usuario.
  
}