import {getUsuarios,getPost,getCommets,getAlbums,getPhotos} from "./elementos/index.js";// importamos las funciones de una manera más limpia con ayuda del barril.
const URL = "https://jsonplaceholder.typicode.com"; //Definimos la url para las solicitudes
// const usuarioId=3;

// const getusuarioId= async (usuarioId)=>{
//     let usuario= await getUsuarios(URL,usuarioId);
//     let post =await getPost(URL,usuario[0])
// }

// getusuarioId(usuarioId);


const manejardatos = async () => { // función asincrona para manipular los datos.
  const usuarios = await getUsuarios(URL); //llamamos a get usuarios para obtener todos los usuarios.
  //utilizamos map para recorer el arreglo de usuarios y el promise all() nos ayuda a que las promesas se resuelvan al mismo tiempo. y obtenemos los post de cada usuario.
    return await Promise.all(usuarios.map(async(usuario)=>{
      const posts = await getPost(URL, usuario); // obtenemos los post de cada usuario.
      
      //obtenemos la lista de comentarios para cada post con getCommets(URL,post).
        const comentPost = await Promise.all( posts.map(async(post)=>{
            const coments = await getCommets(URL,post); // Obtenemos la lista de comentarios para cada post.
            return {...post,coments}; //se devuelve cada post con sus comentarios.
        }));
      //------------------------------------------------
      
      const albums = await getAlbums(URL, usuario);// obtenemos los albunes de cada usuario.

      //recorremos los albunes con map y obtenemos las fotos y el promise all() nos ayuda a que las promesas se resuelvan al mismo tiempo. y obtenemos los albums de cada usuario.
      const albumsphotos = await Promise.all(albums.map(async (album) => {
        const photos = await getPhotos(URL, album); // obtenemos las fotos de cada albúm.
        return { ...album, photos }; // se devuelve cada albúm con sus fotos.
      }))
        return {...usuario,comentPost,albumsphotos};// Devolvemos el usuario con sus posts más comentarios y sus álbumes más fotos.
    }));
  

  
  
};
manejardatos().then((data)=>{  //Llamamos a la función manejardatos() y cuando la promesa se resuelve, imprimimos los datos en la consola.
    console.log(data);
});
