import { Link } from '@remix-run/react';
import { formatearFecha } from '~/utils/helpers';

export const Post = ({post}) => {

  const { contenido , imagen , titulo , url , publishedAt } = post  

  return (
    <article className="contenedor post">
        <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className='fecha'>{ formatearFecha( publishedAt ) }</p>
            <p className="texto">{ contenido }</p>

            <Link className='enlace' to={`/posts/${url}`} >Leer Post</Link>
        </div>
    </article>
  )
}
