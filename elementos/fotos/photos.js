import { solicitud } from "../solicitud/solicitud.js"; // Importamos la función solicitud para hacer la petición 
export const getPhotos = async (URL, albums) => { // Función asíncrona para obtener las fotos de un álbum específico
  return await solicitud(`${URL}/photos?albumId=${albums.id}`)// Realizamos la solicitud usando el ID del álbum.
  
}