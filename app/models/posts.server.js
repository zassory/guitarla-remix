export const getPosts = async() => {
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
    return await respuesta.json();    
}
export const getPost = async(url) => {
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    return await respuesta.json();    
}