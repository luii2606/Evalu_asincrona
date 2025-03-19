import { solicitud } from "../solicitud/solicitud.js"; // Importamos la función solicitud para hacer la petición
export const getCommets=async(URL,post)=>{ // Función asíncrona para obtener los comentarios de un post específico.
    return  await solicitud(`${URL}/comments?postId=${post.id}`)  // Realizamos la solicitud usando el ID del post.
};
