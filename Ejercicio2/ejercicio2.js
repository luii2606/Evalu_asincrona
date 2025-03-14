//2. Pedir por teclado el nombre de usuario y listar los datos del usuario que concuerden
// con el nombre de usuario (username), anexo a los datos del usuario se debe listar
// en el mismo resultado todos los álbumes del usuario con sus respetivas fotografías.
import { obtAlbums,obtUsuarios, obtPhootos } from "";

const url = "https://jsonplaceholder.typicode.com";


const manipulardatos = async () => {
  let nombreusu = prompt("Ingresa un usuario");
  const usuarios = await obtUsuarios(url);
  return await Promise.all(usuarios.map(async (nombreusu) => {
    const albums = await obtAlbums(url, nombreusu);
    constalbumsphoot = await Promise.all(albums.map(async (album) => {
      const phootos = await obtPhootos(url, album);
      return{...album, phootos}
    }))

    
  }))
  
};
manipulardatos().then((informacion) => {
  console.log(informacion)
})

const ejercico2 = () => {
  
}






