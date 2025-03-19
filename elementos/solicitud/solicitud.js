export const solicitud = async (URL) => {
  try {
    const peticion = await fetch(URL);
    const data = await peticion.json();
    return data;    
  } catch (error) {
    alert("Solicitud no encontrada");
  }
  
}
