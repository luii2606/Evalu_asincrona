import solicitud from "./solicitud.js";
export const obtUsuarios = async (url, nombreusu, albums,usuarios) => {
  let rutaa = "";
  if (nombreusu == usuarios)
  {
     rutaa =`${url}/users?albums= ${albums}`
  }
  // else {
  //   rutaa =
  // }
}

