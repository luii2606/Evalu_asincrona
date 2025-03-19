export { solicitud } from "../solicitud/index.js"
export const getPostTitulo = async (post, nomtitle) => {
   return await post.filter(post => post.title.toLowerCase() === nomtitle.toLowerCase());
}