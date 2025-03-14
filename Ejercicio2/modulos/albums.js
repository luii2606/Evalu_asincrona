import solicitud from "./solicitud.js";
export const obtAlbums = async (url, usuario) => { 
  return await solicitud(`${url}/albums?users=${usuario.id}`) 
}