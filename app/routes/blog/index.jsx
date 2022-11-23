import { useLoaderData } from '@remix-run/react';
import { ListadoPosts } from '~/components/listado-posts';
import { getPosts } from '~/models/posts.server';

export const meta = () => {
  return {
    title:'GuitarLA - Nuestros Posts',
    description:'GuitarLA - Nuestro post de Guitarras'
  }
}

export const loader = async() => {
  const posts = await getPosts(); 
  return posts.data;
}

const Blog = () => {
  const posts = useLoaderData();
  return (    
    <ListadoPosts
        posts={ posts } 
    />
  )
}

export default Blog