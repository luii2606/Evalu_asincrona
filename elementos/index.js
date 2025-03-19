//barril
// exportamos las funciones en un solo archivo index.js (buenas prácticas)
export { URL } from "./solicitud/index.js";
export { getUsuarios } from "./usuarios/usuarios.js";
export { getPost, getPostTitulo} from "./posts/index.js";
export { getCommets } from "./comentarios/commets.js";
export { getAlbums, getAlbumxId } from "./albums/index.js";
export { getPhotos } from "./fotos/photos.js";
export { getTareas } from "./tareas/tareas.js"

