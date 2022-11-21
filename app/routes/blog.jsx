import { useLoaderData } from '@remix-run/react';
import { Post } from '~/components/post';
import { getPosts } from '~/models/posts.server';

import styles from '~/styles/blog.css';

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
    <main>
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map(post => (
          <Post
            key={ post.id }
            post={ post.attributes }
          />
        ))}
      </div>
    </main>
  )
}

export default Blog