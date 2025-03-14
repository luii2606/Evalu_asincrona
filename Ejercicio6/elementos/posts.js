import solicitud from "./solicitud.js"; // Importamos la función solicitud para hacer la petición.
export const getPost= async(URL,usuario)=>{ // Función asíncrona para obtener los posts de un usuario específico.
    return await solicitud(`${URL}/posts?userId=${usuario.id}`) // Realizamos la solicitud usando el ID del usuario.
    
}