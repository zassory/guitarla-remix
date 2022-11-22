import { useLoaderData } from '@remix-run/react';
import { getGuitarras } from '~/models/guitarras.server';

import { Guitarra } from '~/components/guitarra';

import styles from '~/styles/guitarras.css';


export const meta = () => {
  return {
    title:'GuitarLA - Tienda de Guitarras',
    description:'GuitarLA - Nuestra colección de guitarras'
  }
}

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader(){  
  
  const guitarras = await getGuitarras();  
  return guitarras.data;
}

function Tienda() {
  const guitarras = useLoaderData();
  return (
    <main className='contenedor'>
        <h2 className='heading'>Nuestra Colección</h2>

        { guitarras?.length && (
          <div className='guitarras-grid'>
            { guitarras.map( guitarra => (
              <Guitarra
                key={ guitarra?.id }
                guitarra={guitarra?.attributes}
              />
            ))}
          </div>
        )}

    </main>
  )
}

export default Tienda