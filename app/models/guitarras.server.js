export const getGuitarras = async() => {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    return await respuesta.json();    
}
export const getGuitarra = async(url) => {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);    
    return await respuesta.json();
}