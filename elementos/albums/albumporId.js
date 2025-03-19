// Importamos la función peticion desde el archivo "../solicitud/peticion.js"
export { solicitud } from "../solicitud/index.js";


// Definimos una función asíncrona "getAlbumxId" que recibe un usuario y un dato de entrada
export const getAlbumxId = async (usuarios, usname) => {  
    // Filtramos los posts que el usuario incluya datoEntrada
    return await  usuarios.filter(usuario => usuario.username.toLowerCase().includes(usname.toLowerCase()));
}