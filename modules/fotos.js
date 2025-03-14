import solicitud from "./solicitud.js";  
export const obtPhootos = async (url, albums) => { 
  return await solicitud(`${url}/photos?users=${albums}`)
  
}