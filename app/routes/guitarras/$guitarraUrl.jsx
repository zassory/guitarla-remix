import { useLoaderData } from '@remix-run/react';
import { getGuitarra } from '~/models/guitarras.server';
import styles from '~/styles/guitarras.css';

//Es el parametro que recibe
export const loader = async({params}) => {
    const { guitarraUrl } = params;
    const guitarra = await getGuitarra( guitarraUrl );

    if(guitarra.data.length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra No Encontrada'
        })
    }
    
    return guitarra;
}

export const meta = ({ data }) => {

    if(!data){
        return {
            title:'GuitarLA - Guitarra No Encontrada',
            description:'Guitarras, venta de guitarras, guitarra no encontrada'
        }
    }
    
    return {
        title: `GuitarLA - ${data.data[0].attributes.nombre}`,
        description: `Guitarras , venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
    }
    
}

export const links = () => {
    return [
        {
            rel:'stylesheet',
            href:styles
        }
    ]
}


const Guitarra = () => {
    
  const guitarra = useLoaderData();
  const { nombre , descripcion , imagen , precio } = guitarra.data[0].attributes

  return (
    <main className='contenedor guitarra'>
        <img className='imagen' src={ imagen.data.attributes.url } alt={`Imagen de la guitarra ${ nombre }`} />
        <div className='contenido'>
            <h3>{ nombre }</h3>
            <p className='texto'>{descripcion}</p>
            <p className='precio'>${precio}</p>
        </div>
    </main>
  )
}

export default Guitarra
//localhost:1337/api/guitarras?filters[url]=beck&populate=imagen