import { useLoaderData } from '@remix-run/react';
import { ListadoPosts } from '~/components/listado-posts';
import { getPosts } from '~/models/posts.server';
import styles from '~/styles/blog.css';

export const meta = () => {
  return {
    title:'GuitarLA - Nuestros Posts',
    description:'GuitarLA - Nuestro post de Guitarras'
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



export const loader = async() => {
  const posts = await getPosts(); 
  return posts.data;
}

const Blog = () => {
  const posts = useLoaderData();
  return (
    <main className='contenedor'>
        <ListadoPosts posts={ posts } />
    </main>
  )
}

export default Blog