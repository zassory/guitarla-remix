//Framework and reacts functions
import { useLoaderData } from '@remix-run/react';

//servers
import { getCurso } from '~/models/curso.server';
import { getGuitarras } from '~/models/guitarras.server';
import { getPosts } from '~/models/posts.server';

//components
import { Curso } from '~/components/curso';
import { ListadoGuitarras } from '~/components/listado-guitarras';
import { ListadoPosts } from '~/components/listado-posts';

//styles
import stylesGuitarras from '~/styles/guitarras.css';
import stylesPosts from '~/styles/blog.css';
import stylesCurso from '~/styles/curso.css';

export const meta = () => {

}

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}

export const loader = async() => {

  const [ guitarras , posts , curso ] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ]);
  
    
  return {
    guitarras: guitarras.data,
    posts:posts.data,
    curso:curso.data,
  }
}


function Index() {

  const { guitarras , posts , curso } = useLoaderData();    

  return (
    <>
      <main className="contenedor">
          <ListadoGuitarras guitarras={ guitarras } />
      </main>

      <Curso 
        curso={ curso.attributes }
      />

      <section className='contenedor'>
        <ListadoPosts posts = { posts } />
      </section>
    </>
  )
}

export default Index
