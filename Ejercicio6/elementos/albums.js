import solicitud from "./solicitud";
export const getAlbums = async (URL, coments) => {
  return await solicitud(`${URL}/albums?coments=${}`)
  
}