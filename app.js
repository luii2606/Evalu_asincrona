//Importacion de los modulos para obtener las distintas peticiones
import * as obj from "./elementos/index.js";

const listarTareasUsuarios = async () => { // función asincrona para listar las tareas de los usuarios.
  const usuarios = await obj.getUsuarios(obj.URL); //llamamos a get usuarios para obtener todos los usuarios
  let tareasTods = await obj.getTareas(obj.URL, false)  // Obtenemos todas las tareas sin filtrar.
  // Utilizamos map para recorrer el arreglo de usuarios y Promise.all() nos ayuda a que las promesas se resuelvan al mismo tiempo.
  return await Promise.all(usuarios.map(async (usuario) => {
    const tarea = tareasTods.filter((tar)=> tar.userId == usuario.id) // Filtramos las tareas que corresponden al usuario.
    return {... usuario,tarea}  // Se devuelve cada usuario con sus respectivas tareas.
  }));
  }


// Función asíncrona para ingresar el nombre del usuario por teclado luego filtrar el usuario que coincida con su álbum y sus fotos.
const listarUsuarioConAlbums = async () => {
  try {
    // Ingresar por teclado el nombre de usuario.
    let nombreUsuario = prompt("Ingrese el nombre del usuario");
    // Obtener los usuarios.
    const usuarios = await obj.getUsuarios(obj.URL);
    // Método para filtrar los usuarios que coincidan con el dato de entrada con filter().
    const usuariosEncontrados = await obj.getAlbumxId(usuarios, nombreUsuario);
    // Recorrer cada usuario con el método map para obtener los álbumes.
    return await Promise.all(usuariosEncontrados.map(async (usuario) => {
      // Obtener los álbumes del usuario.
      const albums = await obj.getAlbums(obj.URL, usuario);
      // Filtrar únicamente los datos que coincidan con el ID del usuario.
      const usuAlbums = await albums.filter(album => album.userId === usuario.id);
      // Recorrer cada álbum con el método map para obtener las fotos.
      const albumsConFotos = await Promise.all(usuAlbums.map(async (album) => {
        // Obtener las fotos.
        const photos = await obj.getPhotos(obj.URL, album.id);
        // Retornar los álbumes con sus respectivas fotos.
        return { ...album, photos };
      }));
      // Retornar los usuarios con sus álbumes y fotos.
      return { ...usuario, albumsConFotos };
    }));
  } catch (error) {
    alert("Nombre de usuario desconocido", error.message);
  }
};

 

//Funcion asincorna que ingresa el nombre del post, luego filtra los post que coincida con el dato de entrada y mostrara sus respectivos comentarios
const filtrarPostsPorNombre = async () => {
  //Ingresar por teclado el nombre del post
  let titlePost = prompt('Ingrese el nombre del post completo');
  //Obtener los posts
  const posts = await obj.getPost(obj.URL);
  //Filtrar los posts que coincidan el titulo con el dato de entrada con el metodo filter
  const titu = await obj.getPostTitulo(posts,titlePost)
  //Recorrer cada titulo con el metodo map, para obtener los comentarios
  return await Promise.all(titu.map(async (post) => {
    //Obtener los comentarios
    const comentarios = await obj.getCommets(obj.URL, post)
    //Retornar los post con sus respectivos comentarios
    return { ...post, comentarios }
  }));
}


const soliUsuario = async () => {
  //Obtener los usuarios
  const usuarios = await obj.getUsuarios(obj.URL);
  //Recorrer los usuarios con el metodo map, para obtener el nombre y telefono de cada usuario
  return await Promise.all(usuarios.map(async (usuario) => {
    //Asignar el elemento name del usuario a una variable constante
    const name = usuario.name;
    //Asignar el elemento phone del usuario a una variable constante
    const phone = usuario.phone;
    //Asignar el arreglo del nombre y telefono de cada  usuario a una variable

    //retorno del arreglo
      return {name, phone}
  })); 
}
// soliUsuario().then((data) => {
//   console.log(data);
// })

const manejardatos = async () => { // función asincrona para manipular los datos.
  const usuarios = await obj.getUsuarios(obj.URL); //llamamos a get usuarios para obtener todos los usuarios.
  //utilizamos map para recorer el arreglo de usuarios y el promise all() nos ayuda a que las promesas se resuelvan al mismo tiempo. y obtenemos los post de cada usuario.
    return await Promise.all(usuarios.map(async(usuario)=>{
      const posts = await obj.getPost(obj.URL, usuario); // obtenemos los post de cada usuario.
      
      //obtenemos la lista de comentarios para cada post con getCommets(URL,post).
        const comentPost = await Promise.all( posts.map(async(post)=>{
            const coments = await obj.getCommets(obj.URL,post); // Obtenemos la lista de comentarios para cada post.
            return {...post,coments}; //se devuelve cada post con sus comentarios.
        }));
      //------------------------------------------------
      
      const albums = await obj.getAlbums(obj.URL, usuario);// obtenemos los albunes de cada usuario.

      //recorremos los albunes con map y obtenemos las fotos y el promise all() nos ayuda a que las promesas se resuelvan al mismo tiempo. y obtenemos los albums de cada usuario.
      const albumsphotos = await Promise.all(albums.map(async (album) => {
        const photos = await obj.getPhotos(obj.URL, album); // obtenemos las fotos de cada albúm.
        return { ...album, photos }; // se devuelve cada albúm con sus fotos.
      }))
        return {...usuario,comentPost,albumsphotos};// Devolvemos el usuario con sus posts más comentarios y sus álbumes más fotos.
    }));
  

  
  
};
// manejardatos().then((data)=>{  //Llamamos a la función manejardatos() y cuando la promesa se resuelve, imprimimos los datos en la consola.
//     console.log(data);
// });

const visualizarMenu = async () => {
  while (true) {
    // Solicitar la opción 
    let opcion = parseInt(prompt(
      `Seleccione una opción:
      1. Ver usuarios con tareas no completadas
      2. Buscar usuario por nombre y ver sus álbumes y fotos
      3. Buscar post por título y ver comentarios
      4. Ver solo nombres y teléfonos de usuarios
      5. Obtener toda la información de los usuarios
      0. Salir`
    ));


    // Elegir la opcion seleccionada
    switch (opcion) {
      case 1:
        console.log("Usuarios con tareas no completadas:");
        console.log(await listarTareasUsuarios());
        break;

      case 2:
        console.log("Buscar usuario y mostrar álbumes con fotos:");
        console.log(await listarUsuarioConAlbums());
        break;

      case 3:
        console.log("Buscar post y mostrar comentarios:");
        console.log(await filtrarPostsPorNombre());
        break;

      case 4:
        console.log("Mostrar solo nombres y teléfonos de usuarios:");
        console.log(await soliUsuario());
        break;

      case 5:
        console.log("Obtener toda la información de los usuarios:");
        console.log(await manejardatos());
        break;

      case 0:
        console.log("Saliendo");
        return; 

      default:
        alert("Numero no encontrado");
        false;
    }
  }
};

// Llamar a la función del menú
visualizarMenu();
