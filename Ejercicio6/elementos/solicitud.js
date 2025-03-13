const solicitud = async url => { // funcion asincrona solicitud
    const peticion = await fetch(url); // constante petición hacemos la (petición) de la url con el fetch
    const data = await peticion.json(); //convertimos la petición en un archivo j.son
    return data // retornamos el archivo j.son
}

export default solicitud // exportamos por defecto solicitud
