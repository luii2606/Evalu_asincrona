const solicitud = async url => {
  const peticion = await fetch(url);
  const informacion = await peticion.json();
  return informacion;
}
export default solicitud