import {getUsuarios,getPost,getCommets} from "./elementos/index.js";// importamos las funciones de una manera más limpia con ayuda del barril.
const URL = "https://jsonplaceholder.typicode.com"; 
// const usuarioId=3;

// const getusuarioId= async (usuarioId)=>{
//     let usuario= await getUsuarios(URL,usuarioId);
//     let post =await getPost(URL,usuario[0])
// }

// getusuarioId(usuarioId);


const manejardatos = async () => { // función asincrona para manipular los datos
    const usuarios =  await getUsuarios(URL); 
    return await Promise.all(usuarios.map(async(usuario)=>{
        const posts = await getPost(URL,usuario);
        const comentPost = await Promise.all( posts.map(async(post)=>{
            const coments = await getCommets(URL,post);
            return {...post,coments};
        }));
      const albums = await getAlbums(URL, coments);
      const albumsFotos = await Promise.all(albums.map(async (albums) => {
        const fotos = await getFotos(URL, albums);
        return { ...albums, fotos };
      }))
        return {...usuario,comentPost};
    }));
  

  
  
};
manejardatos().then((data)=>{
    console.log(data);
});
