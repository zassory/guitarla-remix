import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import styles from '~/styles/blog.css';

import { formatearFecha } from "~/utils/helpers";

export const links = () => {
  return [
    {
      rel:'stylesheet',
      href:styles
    }
  ]
}


export const loader = async({ params }) => {

    const { postUrl } = params;
    const post = await getPost( postUrl );
    
    if(post.data.length === 0){
      throw new Response('', {
        status:404,
        statusText: 'Post no Encontrado'
      })
    }
    
    return post;
}

export const meta = async({ data }) => {      
   if(!data){
     return {
       title:'GuitarLA - Post No Encontrado',
       description:'Post, venta de guitarras, post no encontrado'
     }
   }
   return {
     title: `GuitarLA - ${data.data[0].attributes.titulo}`,                        
    description: `GuitarLA , venta de guitarras, post ${data.data[0].attributes.titulo}`
   }
}


const Post = () => {

  const post = useLoaderData();

  const { titulo , contenido , createdAt , imagen } = post?.data[0]?.attributes;

  return (
    <article className="contenedor post mt-3">
      <img className="imagen" src={ imagen?.data?.attributes.url } alt={`Imagen del post ${ titulo }`} />
      <div className="contenido">
        <h3>{ titulo }</h3>
        <p className="fecha">{ formatearFecha( createdAt ) }</p>
        <p className="texto">{ contenido }</p>
      </div>
    </article>
  )
}

export default Post
