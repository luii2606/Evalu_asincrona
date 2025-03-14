const solicitud = async url => {
  const peticion = await fetch(url);
  const info = await peticion.json();
  return info;
}
export default solicitud