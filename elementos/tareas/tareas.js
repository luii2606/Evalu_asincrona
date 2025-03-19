import {solicitud} from "../solicitud/solicitud.js";

export const getTareas = async (URL, estado) => {
  try {
    return await solicitud(`${URL}/todos?completed=${estado}`)
  } catch (error) {
    alert("Solicitud no realizada");
  }
}
