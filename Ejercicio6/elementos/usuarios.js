import solicitud from "./solicitud.js"; // Importamos la función solicitud para hacer la petición
export const getUsuarios=async(URL,id)=>{ // Función asíncrona para obtener usuarios
    let ruta=""; // Variable para almacenar la URL de la solicitud.
    if(id){
     ruta=`${URL}/users?id=${id}`;  // Si se proporciona un ID, obtenemos solo ese usuario.
    }else{
        ruta=`${URL}/users`; // Si no hay ID, obtenemos todos los usuarios.
    }
    }
  
    const usuarios = await solicitud(ruta); // Hacemos la solicitud con la URL .
    return usuarios; // Devolvemos los usuarios obtenidos.


